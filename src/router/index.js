import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/login/HomeView.vue'
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
    component:() => import('../views/login/component/LoginApp.vue')
  },
  {
    path:'/home',
    name:'/home',
    component:() => import('../views/home/HomeApp.vue')
  },
  {
    path:'/note',
    name:'note',
    component:() => import('../views/Note/NoteSection.vue')
  },
  {
    path:'/user',
    name:'user',
    component: () => import('../views/User/UserView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
