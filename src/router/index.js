import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      hideNavbar:true,
      hideSidebar:true,
    }
  },
  {
    path: '/login',
    name:'login',
    component:() => import('../views/HomeApp.vue')
  },
  {
    path:'/home',
    name:'/home',
    component:() => import('../views/HomeApp.vue')
  },
  {
    path:'/note',
    name:'note',
    component:() => import('../views/NoteSection.vue')
  },
  {
    path:'/user',
    name:'user',
    component: () => import('../views/UserView.vue'),
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
