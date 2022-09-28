import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import store from '../store/index.js'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter(to,from,next){
      if(store.getters.isAuth){
        next()  //isAuth true ise geçişe izin ver
      }else{
        next("/auth")
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter(to,from,next){
      if(store.getters.isAuth){
        next()  //isAuth true ise geçişe izin ver
      }else{
        next("/auth")
      }
    }
  },
  {
    path: '/auth',
    name: 'AuthView',
    component: AuthView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
