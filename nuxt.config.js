import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ธรรมล้านดวง',
    title:
      'สวดมนต์ข้ามปีออนไลน์ ผ่าน 99 วัด 99 สิ่งศักดิ์สิทธิ์ กับ ธรรมล้านดวง',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'สนใจเข้าร่วมกดเพิ่มเพื่อนเลย https://lin.ee/Jqdw87d',
      },
      { property: 'og:site_name', content: 'I Love Painting' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/banner2.jpg',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'สวดมนต์ข้ามปีออนไลน์',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'สวดมนต์ข้ามปีออนไลน์ ผ่าน 99 วัด 99 สิ่งศักดิ์สิทธิ์ กับ ธรรมล้านดวง',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/banner2.jpg',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/banner2.jpg',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-responsive-loader',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
