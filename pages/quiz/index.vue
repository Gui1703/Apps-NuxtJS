<script>
import Questions from '../../components/Questions.vue'

export default {
  name: 'Quiz',
  components: { Questions },
  data() {
    return {
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

      <Questions
        v-for="(question, index) in questions"
        :key="index"
        :item="question"
      />
    </v-flex>
  </v-layout>
</template>

<style scoped></style>
