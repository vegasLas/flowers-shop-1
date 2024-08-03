// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  buildModules: [
    '@nuxt/typescript-build'
  ],
  runtimeConfig: {
    host: 'postgresql://postgres:qwerty@localhost:5432/test',
    JWT_SECRET: 'a6e6c3153aa2b678a8bd24fac0bf889af75f6d75e43ef8d63641904976464232',
    public: {
      apiUrl: process.env.API_BASE_URL,
    },
  },
  axios: {
    // Axios module configuration
    // baseURL: process.env.API_BASE_URL || 'http://localhost:4000', // Set your API base URL
  },
  serverMiddleware: [
    { path: '/api', handler: '~/server/middleware/cors.js' },
    { path: '/api', handler: '~/server/middleware/auth.js' },
    { path: '/api', handler: '~/server/middleware/log.js' },
  ],
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
