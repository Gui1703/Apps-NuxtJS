<script>
export default {

  data() {
    return {
      choosen: ''
    }
  },
  methods: {
    handleAnswer() {
      console.log(this.choosen)
    }
  }
}
</script>

<template>
  <v-layout justify-center class="mt-3 mb-5">
    <v-flex class="xs6">
      <h1 class="display-1">Quiz App</h1>

      <v-card class="mt-4">
        <v-card-title class="deep-purple lighten-1 white--text">
          <h1 class="headline">Question comes here</h1>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-radio-group v-model="choosen" row>
              <v-radio label="Radio 1" color="green" value="option1"/>
              <v-spacer/>
              <v-radio label="Radio 2" color="green" value="option2"/>
              <v-spacer/>
              <v-radio label="Radio 3" color="green" value="option3"/>
              <v-spacer/>
              <v-radio label="Radio 4" color="green" value="option4"/>
            </v-radio-group>
          </v-container>

          <v-layout>
            <v-btn color="purple darken-2" dark small @click="handleAnswer">Submit</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped></style>
