<script>
export default {
  name: 'QuestionsTable',
  data() {
    return {
      headers: [
        { text: 'Question', value: 'question' },
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
        { text: 'Option 3', value: 'option3' },
        { text: 'Option 4', value: 'option4' },
        { text: 'Action', value: 'action' }
      ],
      questions: []
    }
  },
  created() {
    this.fetchQuestions()
  },
  methods: {
    fetchQuestions() {
      this.$axios
        .get(
          'https://nuxt-quiz-952c6-default-rtdb.firebaseio.com/quiz/questions.json'
        )
        .then(
          (res) =>
            (this.questions = Object.keys(res.data).map((key, index) => {
              res.data[key].id = key
              return res.data[key]
            }))
        )
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title>
            <h1 class="display-1">All Questions</h1>
            <v-spacer />
            <nuxt-link to="/admin/questions/create">
              <v-btn small dark color="grey darken-2">Create Questions</v-btn>
            </nuxt-link>
          </v-card-title>

          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="questions"
              class="elevation-1"
            >
              <template #item="{ item }">
                <tr>
                  <td class="text-xs-left">{{ item.question }}</td>
                  <td class="text-xs-left">{{ item.option1 }}</td>
                  <td class="text-xs-left">{{ item.option2 }}</td>
                  <td class="text-xs-left">{{ item.option3 }}</td>
                  <td class="text-xs-left">{{ item.option4 }}</td>
                  <td class="text-xs-center">
                    <nuxt-link class="link" :to="`/admin/questions/${item.id}`">
                      <v-icon color="orange">mdi mdi-pencil</v-icon>
                    </nuxt-link>
                    <v-icon color="red">mdi mdi-delete</v-icon>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.link {
  text-decoration: none;
}
</style>
