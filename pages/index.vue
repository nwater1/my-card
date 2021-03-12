<template>
  <div class="app">
    <!--
    <v-row justify="center" align="center">
      <v-main style="padding-bottom: 30px">
        <section id="main">
          <LineButton  @click="addFriends"> <i class="fab fa-line" /> สนใจเพิ่มเพื่อนในไลน์ได้เลย</LineButton>
        </section>
      </v-main>
    </v-row>
    -->
    <v-row class="banner" justify="center" align="center">
      <v-img
      :aspect-ratio="16/9"
  max-width="1000"
  :src="require(`~/assets/ban-dhamma.jpg`)"
></v-img>
    </v-row>
    <v-row justify="center" align="center" style="margin-bottom: 50px">
      <div class="btn-1">
      <a class="link" href="https://master.d3aq7s7yioenk7.amplifyapp.com/">
        <i class="fab fa-line" /> สนใจเพิ่มเพื่อนในไลน์ได้เลย
      </a>
      </div>
    </v-row>
    <!--<v-row justify="center" align="center" class="video-container">
     <vue-plyr :options="options">
  <video
    controls
    crossorigin
    playsinline
    autoplay
  >
    <source
      size="720"
      src="../assets/fbvideo.mp4"
      type="video/mp4"
    />
  </video>
</vue-plyr>
    </v-row>
  -->
    
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {}
  },
  methods: {
    addFriend() {
      // eslint-disable-next-line no-console
      console.log('hello')
      // window.open('https://master.d3aq7s7yioenk7.amplifyapp.com/')
    }
  }
}
</script>

<style scoped>
.video-container {
   width: auto;
    height: auto;
}
.banner {
  margin-bottom: 50px;
}
.btn {
  color: white;
  font-size: 20px;
  padding: 8px 24px;
  border: none;
  cursor: pointer;

  text-align: center;
  margin-top: 0px;
  width: 100%;
  height: 100%;
  background-color: #00c300;
}
.link:link {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.link:focus {
  color: #ffffff;
  text-decoration: none;
}
.link:hover {
  color: #ffffff;
  text-decoration: none;
}
.link:visited {
  color: #ffffff;
  text-decoration: none;
}

.btn-1 {
  color: #00c300;
  font-size: 22px;
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  display: block;
  text-align: center;
  margin-top: 0px;
  width: 250px;
  height: 110px;
  background-color: #00c300;
  border-radius: 40px;
}

.btn-1:hover {
  color: #FFF;
  background-color: #00e000;
}

.btn-1:focus {
  outline: none;
  background:  #00b300;
}
div.img {
  width: 100%;
  height: 450px;
  background-image: url('https://res.cloudinary.com/dz4zph4bl/image/upload/v1614137237/gvt9f0u0oak96zzlqzpd.jpg');
  background-size: 100% 100%;
  border: 1px solid black;
}

@media only screen and (min-device-width: 600px) {
  div.img {
    background-image: url('https://res.cloudinary.com/dz4zph4bl/image/upload/v1614137237/gvt9f0u0oak96zzlqzpd.jpg');
    width: 100%;
    height: 100% 100%;
    background-size: contain;
    border: 1px solid black;
  }
}

@media only screen and (min-device-width: 960px) {
  div.img {
    background-image: url('https://res.cloudinary.com/dz4zph4bl/image/upload/v1614137237/gvt9f0u0oak96zzlqzpd.jpg');
    max-width: 100%;
    height: 500px;
    background-size: 100% 100%;
    border: 1px solid black;
  }
}

div.detail {
  width: 100%;
  height: 300px;
  background-image: url('https://res.cloudinary.com/dz4zph4bl/image/upload/v1614137280/nmp4bkli7mldlogjd8wd.jpg');
  background-size: contain;
  border: 1px solid black;
}

@media only screen and (min-device-width: 600px) {
  div.detail {
    background-image: url('https://res.cloudinary.com/dz4zph4bl/image/upload/v1614137280/nmp4bkli7mldlogjd8wd.jpg');
    width: 100%;
    height: 500px;
    background-size: 100% 100%;
    border: 1px solid black;
  }
}

@media only screen and (min-device-width: 960px) {
  div.detail {
    background-image: url('https://res.cloudinary.com/dz4zph4bl/image/upload/v1614137280/nmp4bkli7mldlogjd8wd.jpg');
    max-width: 100%;
    height: 500px;
    background-size: 100% 100%;
    border: 1px solid black;
  }
}
</style>
