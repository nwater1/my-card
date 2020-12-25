<template>
  <v-app>
    <v-main class="bg">
      <v-container style="margin: 0 auto">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      class="justify-center"
      color="#292929"
      height="70"
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
<style scoped>
.bg {
  background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/BG-01.png'); /* The image used */

  height: 700px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>
