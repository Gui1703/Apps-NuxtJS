<script>
export default {
  data() {
    return {
      quiz: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
      },
      correct: '',
      answer_id: ''
    }
  },
  created() {
    this.get()
    this.getAnswer()
  },
  methods: {
    get() {
      this.$axios
        .get(
          'https://nuxt-quiz-952c6-default-rtdb.firebaseio.com/quiz/questions.json'
        )
        .then((res) => (this.quiz = res.data[this.$route.params.edit]))
    },
    update() {
      this.$axios
        .patch(
          `https://nuxt-quiz-952c6-default-rtdb.firebaseio.com/quiz/questions/${this.$route.params.edit}.json`,
          this.quiz
        )
        .then((res) => this.$router.push('/admin/questions'))
    },
    getAnswer() {
      this.$axios
        .get(
          `https://nuxt-quiz-952c6-default-rtdb.firebaseio.com/quiz/answers.json?orderBy="question_id"&startAt="${this.$route.params.edit}"&endAt="${this.$route.params.edit}"`
        )
        .then((res) => {
          this.correct = Object.values(res)[0].answer
          this.answer_id = Object.keys(res)[0]
        })
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout>
      <v-flex class="xs8 offset-xs2">
        <v-card>
          <v-card-title>
            <h1 class="display-1">Edit Question</h1>
            <v-spacer />

            <nuxt-link to="/admin/questions">
              <v-btn small dark color="grey darken-2">Back</v-btn>
            </nuxt-link>
          </v-card-title>

          <v-card-text>
            <form @submit.prevent="update">
              <v-text-field v-model="quiz.question" label="Question" solo />
              <v-text-field v-model="quiz.option1" label="Option 1" solo />
              <v-text-field v-model="quiz.option2" label="Option 2" solo />
              <v-text-field v-model="quiz.option3" label="Option 3" solo />
              <v-text-field v-model="quiz.option4" label="Option 4" solo />

              <v-flex>
                <p>Choose Correct Answer</p>

                <v-radio-group v-model="correct" :mandatory="false" row>
                  <v-radio
                    label="Option 1"
                    value="option1"
                    @click="correct = quiz.option1"
                  />
                  <v-spacer />
                  <v-radio
                    label="Option 2"
                    value="option2"
                    @click="correct = quiz.option2"
                  />
                  <v-spacer />
                  <v-radio
                    label="Option 3"
                    value="option3"
                    @click="correct = quiz.option3"
                  />
                  <v-spacer />
                  <v-radio
                    label="Option 4"
                    value="option4"
                    @click="correct = quiz.option4"
                  />
                </v-radio-group>

                <v-btn class="indigo" block dark type="submit">Update</v-btn>
              </v-flex>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped></style>
