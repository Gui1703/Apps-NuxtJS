<script>
export default {
  middleware: 'auth',
  data() {
    return {
      quiz: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
      },
      correct: ''
    }
  },
  methods: {
    store() {
      this.$axios.post('questions.json', this.quiz).then((res) => {
        this.storeAnswer(res.data.name)
      })
    },
    storeAnswer(id) {
      this.$axios
        .post('/answers.json', {
          question_id: id,
          answer: this.correct
        })
        .then((result) => {
          this.$router.push('/admin/questions')
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
            <h1 class="display-1">Add Question</h1>
            <v-spacer />

            <nuxt-link to="/admin/questions">
              <v-btn small dark color="grey darken-2">All Questions</v-btn>
            </nuxt-link>
          </v-card-title>

          <v-card-text>
            <form @submit.prevent="store">
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

                <v-btn class="indigo" block dark type="submit">Add</v-btn>
              </v-flex>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped></style>
