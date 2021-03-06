import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'ธรรมล้านดวง | สวดมนต์ | สวดธรรมจักรพร้อมกัน 1 ล้านคน',
    title:
      'สวดมนต์ สวดมนต์ออนไลน์ สวดธรรมจักรพร้อมกัน 1 ล้านคน เวลา 20.00น. ที่เพจ ธรรมล้านดวง สนใจเข้าร่วมกดเพิ่มเพื่อนเลย https://lin.ee/Jqdw87d',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'สวดมนต์ สวดมนต์ออนไลน์ สวดธรรมจักรพร้อมกัน 1 ล้านคน เวลา 20.00น. ที่เพจ ธรรมล้านดวง สนใจเข้าร่วมกดเพิ่มเพื่อนเลย https://lin.ee/Jqdw87d',
      },
      { property: 'og:site_name', content: 'I Love Painting' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content:
          'https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/tumb.png',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ธรรมล้านดวง | สวดมนต์ | สวดธรรมจักรพร้อมกัน 1 ล้านคน',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'สวดมนต์ สวดมนต์ออนไลน์ สวดธรรมจักรพร้อมกัน 1 ล้านคน เวลา 20.00น. ที่เพจ ธรรมล้านดวง สนใจเข้าร่วมกดเพิ่มเพื่อนเลย https://lin.ee/Jqdw87d',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/tumb.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://new-year-card-1.s3-ap-southeast-1.amazonaws.com/favicon-32x32.png',
      },
    ],
    script: [
      { src: '/js/fb-sdk.js' }
     ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/vue-plyr', mode: 'client' },
  ],

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
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-TNK7876',
    pageTracking: true,
  },
  googleAnalytics: {
    id: '{UA-186190763-1}',
  },
  
  


  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
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
