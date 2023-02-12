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
      correct: ''
    }
  },
  methods: {
    store() {

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
            <v-spacer/>
            <v-btn small dark color="grey darken-2">All Questions</v-btn>
          </v-card-title>

          <v-card-text>
            <form @submit.prevent="store">
              <v-text-field v-model="quiz.question" label="Question" solo/>
              <v-text-field v-model="quiz.option1" label="Option 1" solo/>
              <v-text-field v-model="quiz.option2" label="Option 2" solo/>
              <v-text-field v-model="quiz.option3" label="Option 3" solo/>
              <v-text-field v-model="quiz.option4" label="Option 4" solo/>

              <v-flex>
                <p>Choose Correct Answer</p>
                <v-radio-group v-model="correct" row>
                  <v-radio label="Option 1"/>
                  <v-spacer/>
                  <v-radio label="Option 2"/>
                  <v-spacer/>
                  <v-radio label="Option 3"/>
                  <v-spacer/>
                  <v-radio label="Option 4"/>
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
