// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Jost': true,
      } 
    }],
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    // '@pinia/nuxt',
    // {
    //   autoImports: ['defineStore', 'acceptHMRUpdate'],
    // },
  ],
  css: ['~/assets/css/main.css'],
  imports: {
    dirs: ['stores'],
  },
})
