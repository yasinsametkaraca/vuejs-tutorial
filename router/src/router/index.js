import { createRouter, createWebHistory } from 'vue-router'
import HeaderComp from "@/components/HeaderComp";
import HomeView from '../views/HomeView.vue'

const UserComp = () => import('../components/user/UserComp.vue')
/*import UserComp from '../components/user/UserComp.vue'*/
import UserStart from '../components/user/UserStart.vue'
import UserEdit from "@/components/user/UserEdit";
import UserDetail from "@/components/user/UserDetail";

const routes = [
  {
    path: '/',
    name: 'home',
    components:{
      default: HomeView,
      "header-top": HeaderComp
    }
    /*component: HomeView*/
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    name: "UserComp",
    path: '/user',
    components:{
      default: UserComp,
      "header-bottom": HeaderComp
    },
    children: [
      {path: '', component: UserStart},
      {path: ':userId', component: UserDetail,},
      {path: ':userId/edit', component: UserEdit, name: 'UserEdit', beforeEnter:(to, from,next)=>{
          console.log(to, from,next)
          next()/* Next(false) dersek edit usere gitmez













          */

        }}
    ]
  },
  {path: '/redirect',redirect: '/user' }, /* localhost:8080/redirect yazarsa bizi anasayfaya yönledirir.*/
  {path: '/:catchAll(.*)',redirect: '/' } /*herhangi farklı birşey girilirse url ye bizi anasayfaya yönledirir*/
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to,from,savedposition) {
    console.log(from,savedposition)
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})
/*router.beforeEach((to,from,next) => {
console.log(from,to,next)
})*/

export default router
