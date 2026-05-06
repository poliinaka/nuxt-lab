export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2026-04-18',

  nitro: {
    experimental: {
      websocket: true
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxt/ui'
  ],

  ui: {
    theme: {
      colors: {
        primary: 'violet'
      }
    }
  },

  app: {
    head: {
      title: 'OLV реклама',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  
  fonts: {
    provider: 'none'
  },
  
  runtimeConfig: {
    public: {}
  }
})
