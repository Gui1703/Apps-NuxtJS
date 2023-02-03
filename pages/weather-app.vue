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
        <v-text-field solo label="Enter City Name" />
      </v-flex>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped></style>
