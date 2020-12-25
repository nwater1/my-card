<template>
  <v-row justify="center" align="center">
    <v-main style="padding-bottom: 60px">
      <section id="main">
        <div class="img"></div>
        <v-row justify="center" align="center" style="height: 110px">
          <a class="btn-1" href="https://lin.ee/Jqdw87d"
            >เพิ่มเพื่อน เพื่อรับการแจ้งเตือนสวดมนต์</a
          >
        </v-row>
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
  height: 400px;
  background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/bannup.jpg');
  background-size: cover;
  border: 1px solid black;
}

@media only screen and (min-width: 960px) {
  div.img {
    background-image: url('https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/banner2.jpg');
    width: 100%;
    height: 400px;
    background-size: cover;
    border: 1px solid black;
  }
}
</style>
