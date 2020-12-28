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
    <v-row justify="center" align="center">
      <v-main style="padding-bottom: 0px; margin: 0 auto">
        <section id="main">
          <div class="detail"></div>
        </section>
      </v-main>
    </v-row>
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
  background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/s-01-01C.jpg');
  background-size: 100% 100%;
  border: 1px solid black;
}

@media only screen and (min-device-width: 600px) {
  div.img {
    background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/14ban2com.png');
    width: 100%;
    height: 100% 100%;
    background-size: contain;
    border: 1px solid black;
  }
}

@media only screen and (min-device-width: 960px) {
  div.img {
    background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/14ban2com.png');
    max-width: 100%;
    height: 500px;
    background-size: 100% 100%;
    border: 1px solid black;
  }
}

div.detail {
  width: 100%;
  height: 300px;
  background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/web-03re.png');
  background-size: contain;
  border: 1px solid black;
}

@media only screen and (min-device-width: 600px) {
  div.detail {
    background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/web-03LL.png');
    width: 100%;
    height: 500px;
    background-size: 100% 100%;
    border: 1px solid black;
  }
}

@media only screen and (min-device-width: 960px) {
  div.detail {
    background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/web-03LL.png');
    max-width: 100%;
    height: 500px;
    background-size: 100% 100%;
    border: 1px solid black;
  }
}
</style>
