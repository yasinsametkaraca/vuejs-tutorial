import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "@/components/products/ProductList";
import ProductAdd from "@/components/products/ProductAdd";
import ProductSell from "@/components/products/ProductSell";

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product-add',
    name: 'ProductAdd',
    component: ProductAdd
  },
  {
    path: '/product-sell',
    name: 'ProductSell',
    component: ProductSell
  },
  {path: '/:catchAll(.*)',redirect: '/' } /*herhangi farklı birşey girilirse url ye bizi anasayfaya yönledirir*/

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
