<script>
export default {}
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
            <v-radio-group row>
              <v-radio label="Radio 1" color="green" value="option1"/>
              <v-spacer/>
              <v-radio label="Radio 1" color="green" value="option1"/>
              <v-spacer/>
              <v-radio label="Radio 1" color="green" value="option1"/>
              <v-spacer/>
              <v-radio label="Radio 1" color="green" value="option1"/>
            </v-radio-group>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped></style>
