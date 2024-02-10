import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/home.vue').then(r => r.default || r)
    },
    {
      name: 'products',
      path: '/products',
      component: () => import('~/pages/products.vue').then(r => r.default || r)
    }
  ],
}