<template>
  <v-row justify="center" align="center">
    <v-main style="padding-bottom: 50px">
      <section id="main">
        <v-img
          max-height="1500"
          width="100%"
          src="https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/bannup.jpg"
        ></v-img>
        <v-row justify="center" align="center" style="height: 100px">
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
  font-size: 22px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;

  text-align: center;
  margin-top: 25px;
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
  margin-top: 25px;
  width: 60%;
  height: 100%;
  background-color: #00c300;
}
</style>
