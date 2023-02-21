<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      title: 'Learning Nuxt',
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-cloud',
          title: 'Weather App',
          to: '/weather-app'
        },
        {
          icon: 'mdi-help-box-multiple',
          title: 'Quiz App',
          to: '/quiz'
        }
      ]
    }
  },
  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$store.commit('auth/setLoggedIn', false)
      this.$router.push('/admin/login')
    }
  }
}
</script>

<template>
  <v-app dark>
    <no-ssr>
      <notifications group="notify" />
    </no-ssr>

    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="indigo" dark :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link class="link" to="/">{{ title }}</nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn plain>
        <nuxt-link class="link" to="/weather-app">Weather App</nuxt-link>
      </v-btn>
      <v-btn plain>
        <nuxt-link class="link" to="/quiz">Quiz App</nuxt-link>
      </v-btn>
      <v-btn v-if="$store.state.auth.loggedIn" plain @click="logout">
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: #fff;
}
</style>
