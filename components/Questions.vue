<script>
export default {
  name: 'QuestionsComponent',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      choosen: '',
      result: null
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
  <v-card class="mt-4">
    <v-card-title class="deep-purple lighten-1 white--text">
      <h1 class="headline">{{ item.question }}</h1>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-radio-group v-model="choosen" row>
          <v-radio :label="item.option1" :value="item.option1" color="green" />
          <v-spacer />
          <v-radio :label="item.option2" :value="item.option2" color="green" />
          <v-spacer />
          <v-radio :label="item.option3" :value="item.option3" color="green" />
          <v-spacer />
          <v-radio :label="item.option4" :value="item.option4" color="green" />
        </v-radio-group>
      </v-container>

      <v-layout>
        <v-btn color="purple darken-2" dark small @click="handleAnswer">
          Submit
        </v-btn>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
