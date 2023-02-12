<script>
export default {}
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
            <form>
              <v-text-field label="Question" solo/>
              <v-text-field label="Option 1" solo/>
              <v-text-field label="Option 2" solo/>
              <v-text-field label="Option 3" solo/>
              <v-text-field label="Option 4" solo/>
            </form>

            <v-flex>
              <p>Choose Correct Answer</p>
              <v-radio-group row>
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
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped></style>
