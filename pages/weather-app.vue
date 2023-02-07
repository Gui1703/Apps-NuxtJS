<template>
  <v-container>
    <!-- <v-layout> -->
    <h1 class="display-1 text-center">Weather App</h1>

    <v-flex xs12>
      <v-card color="blue-grey darken-2">
        <v-card-text class="white--text">Here is the card</v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 class="mt-4">
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field v-model="city" solo label="Enter City Name" />
      </v-form>
    </v-flex>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      city: 'London',
      weather: {}
    }
  },
  created() {
    this.getWeatherInfo()
  },
  methods: {
    getWeatherInfo() {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=bede080e9ccd38476d8ea25dfa9f91cc`
        )
        .then((res) => (this.weather = res))
    }
  }
}
</script>

<style scoped></style>
