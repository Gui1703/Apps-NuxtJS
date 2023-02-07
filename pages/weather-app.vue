<template>
  <v-container>
    <!-- <v-layout> -->
    <h1 class="display-1 text-center">Weather App</h1>

    <v-flex xs12>
      <v-card color="blue-grey darken-2">
        <v-card-text class="white--text">
          <v-layout v-if="weather.weather" justify-center>
            <v-flex xs4 class="text-center">
              <h4>Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" alt="icon-weather" />
              <p>
                <span class="display-1">{{ temp() }} &deg;C</span>
                <span class="caption ml-4">
                  {{ weather.weather[0].description }}
                </span>
              </p>
            </v-flex>
            <v-flex xs4 class="text-center">
              <h4>Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" alt="icon-weather" />
              <p>
                <span class="display-1">{{ temp() }} &deg;C</span>
                <span class="caption ml-4">
                  {{ weather.weather[0].description }}
                </span>
              </p>
            </v-flex>
            <v-flex xs4 class="text-center">
              <h4>Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" alt="icon-weather" />
              <p>
                <span class="display-1">{{ temp() }} &deg;C</span>
                <span class="caption ml-4">
                  {{ weather.weather[0].description }}
                </span>
              </p>
            </v-flex>
          </v-layout>
        </v-card-text>
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
  name: 'WeatherApp',
  data() {
    return {
      city: 'London',
      weather: {}
    }
  },
  computed: {
    icon() {
      return this.weather.weather
        ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
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
    },
    temp() {
      return this.weather.weather
        ? Math.round(this.weather.main.temp - 273)
        : ''
    }
  }
}
</script>

<style scoped></style>
