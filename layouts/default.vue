<template>
  <v-app>
    <v-main>
      <v-container style="margin: 0 auto">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      class="justify-center"
      color="#292929"
      height="50"
      :absolute="!fixed"
      app
    >
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} Made with 💜 by ธรรมล้านดวง
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],

      title: 'Vuetify.js',
    }
  },
}
</script>
