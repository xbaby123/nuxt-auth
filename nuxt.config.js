module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-jwt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a jwt authentication with nuxt.js example' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  plugins: [
    '~/plugins/vee-validate'
  ],
  css: [
    { src: '~/assets/css/main.scss', lang: 'sass' },
    // { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/font-awesome',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
