<script>
export default {
  name: 'Login',
  middleware: 'guest',
  data() {
    return {
      show1: false,
      loading: false,
      form: false,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios
        .$post(
          `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.FIREBASE_KEY}`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        )
        .then((res) => this.handleToken(res.idToken))
    },
    handleToken(token) {
      this.$cookies.set('token', token)
      this.$store.commit('auth/setLoggedIn', true)
      this.$router.push('/admin/questions')
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout>
      <v-flex class="xs6 offset-xs3">
        <v-card>
          <v-card-title>
            <h1 class="display-1">Admin Login</h1>
          </v-card-title>

          <v-card-text>
            <v-flex class="xs12">
              <v-form v-model="form" @submit.prevent="login">
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  type="email"
                  :rules="[(v) => !!v || 'Field is required']"
                  solo
                  single-line
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  :type="show1 ? 'text' : 'password'"
                  :rules="[(v) => !!v || 'Field is required']"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  solo
                  single-line
                  @click:append="show1 = !show1"
                />

                <v-btn
                  :disabled="!form"
                  :loading="loading"
                  block
                  color="indigo"
                  size="large"
                  type="submit"
                  variant="elevated"
                >
                  Login
                </v-btn>
              </v-form>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped></style>
