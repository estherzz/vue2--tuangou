import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首页不需要异步加载 Home
  {path: '*', component:Home},
  {path: '/list/:id', component: ()=>import('@/views/List.vue')},
  {path: '/buy', component: ()=>import('@/views/Buy.vue')},
  {path: '/detail/:id', component: ()=>import('@/views/Detail.vue')},
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.

  //   // 异步组件 首屏直接加载 异步组件是需要的时候加载
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
