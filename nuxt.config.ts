// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Jost': true,
      } 
    }],
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  css: ['~/assets/css/main.css']
})
