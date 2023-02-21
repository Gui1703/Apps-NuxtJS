<script>
export default {
  name: 'Quiz',
  data() {
    return {
      choosen: '',
      questions: []
    }
  },
  created() {
    this.getQuestions()
  },
  methods: {
    getQuestions() {
      this.$axios
        .get('/questions.json')
        .then((res) => (this.questions = res.data))
    }
  }
}
</script>

<template>
  <v-layout justify-center class="mt-3 mb-5">
    <v-flex class="xs6">
      <h1 class="display-1">Quiz App</h1>

      <v-card v-for="(question, index) in questions" :key="index" class="mt-4">
        <v-card-title class="deep-purple lighten-1 white--text">
          <h1 class="headline">{{ question.question }}</h1>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-radio-group v-model="choosen" row>
              <v-radio
                :label="question.option1"
                :value="question.option1"
                color="green"
              />
              <v-spacer />
              <v-radio
                :label="question.option2"
                :value="question.option2"
                color="green"
              />
              <v-spacer />
              <v-radio
                :label="question.option3"
                :value="question.option3"
                color="green"
              />
              <v-spacer />
              <v-radio
                :label="question.option4"
                :value="question.option4"
                color="green"
              />
            </v-radio-group>
          </v-container>

          <v-layout>
            <v-btn color="purple darken-2" dark small @click="handleAnswer"
              >Submit
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped></style>
