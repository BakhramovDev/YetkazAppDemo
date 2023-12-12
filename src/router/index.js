import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Index.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: function () {
      return import('../views/Basket.vue')
    }
  },
  {
    path: '/Markets',
    name: 'Markets',
    component: function () {
      return import('../views/Markets.vue')
    }
  },
  {
    path: '/Restaurants',
    name: 'Retaurants',
    component: function () {
      return import('../views/Restaurants.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
