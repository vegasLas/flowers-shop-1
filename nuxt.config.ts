// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    host: 'postgresql://postgres:qwerty@localhost:5432/test',
    JWT_SECRET: 'a6e6c3153aa2b678a8bd24fac0bf889af75f6d75e43ef8d63641904976464232'
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
