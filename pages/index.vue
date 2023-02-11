<template>
  <v-row justify="center" align="center">
    <v-col class="text-center" cols="12" sm="8" md="6">
      <h1 class="display-2">{{ course }}</h1>
      <input v-model="course" style="color: white" type="text"/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    course: {
      get() {
        return this.$store.getters.upperCaseCourse
      },
      set(value) {
        this.$store.commit('setCourse', value)
      }
    }
  }
}
</script>
