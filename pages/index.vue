<template>
  <div>
    <v-row justify="center" align="center">
      <v-main style="padding-bottom: 30px">
        <section id="main">
          <a href="https://lin.ee/Jqdw87d">
            <div class="img"></div>
          </a>
        </section>
      </v-main>
    </v-row>
    <v-divider></v-divider>
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
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {}
  },
}
</script>

<style scoped>
.btn {
  color: white;
  font-size: 20px;
  padding: 8px 24px;
  border: none;
  cursor: pointer;

  text-align: center;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  background-color: #00c300;
}
a:link {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.btn-1 {
  color: white;
  font-size: 22px;
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  display: block;
  text-align: center;
  margin-top: 30px;
  width: 60%;
  height: 100%;
  background-color: #00c300;
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
