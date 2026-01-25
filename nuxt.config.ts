export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/hints', '@nuxt/icon', '@nuxt/image', '@nuxt/fonts', '@unocss/nuxt'],
  app: {
    head: {
      title: 'Latra',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  components: {
    dirs: [
      {
        path: '~/components/',
        pathPrefix: false
      }
    ]
  },
  css: ['~/assets/css/global.css'],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
      styles: ['normal', 'italic', 'oblique']
    }
  }
});
