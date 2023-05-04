import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView/HomeView.vue'
import CakeDetail from '@views/CakeDetail/CakeDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cakes/:id',
      name: 'cakeDetail',
      component: CakeDetail
    }
  ]
})

export default router
