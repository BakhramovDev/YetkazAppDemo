import { createRouter, createWebHistory } from 'vue-router'
// <<<<<<< HEAD
// import HomeView from '../views/Index.vue'
// =======
import HomeView from '../views/index.vue'
// >>>>>>> 5718f525d21a9c3357116ec5cb5796737e137fca

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
