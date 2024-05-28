// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    host: 'postgresql://postgres:qwerty@localhost:5432/test'
  },
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
