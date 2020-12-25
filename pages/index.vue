<template>
  <v-row justify="center" align="center">
    <v-main style="padding-bottom: 50px">
      <section id="main">
        <a href="https://lin.ee/Jqdw87d">
          <div class="img"></div>
        </a>
      </section>
    </v-main>
  </v-row>
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
  background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/s-01com.jpg');
  background-size: contain;
  border: 1px solid black;
}

@media only screen and (min-device-width: 600px) {
  div.img {
    background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/14ban2com.png');
    width: 100%;
    height: 500px;
    background-size: contain;
    border: 1px solid black;
  }
}

@media only screen and (min-device-width: 960px) {
  div.img {
    background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/14ban2com.png');
    max-width: 100%;
    height: 500px;
    background-size: contain;
    border: 1px solid black;
  }
}
</style>
