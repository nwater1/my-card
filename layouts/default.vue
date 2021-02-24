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
        <i class="fab fa-facebook-square"
          ><a href="https://web.facebook.com/dhamma1000000"></a
        ></i>
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
  background-color: #fff; /* The image used */

  height: auto; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>
