<template>
  <div id="app">
    <NavbarApp v-if="!$route.meta.hideNavbar"/>
    <div class="w-full">
            <div class="grid grid-cols-12">
                <div class="col-span-10 mt-20">
                   <router-view/> 
                </div>
                <SideBar v-if="!$route.meta.hideSidebar" class="col-span-2 float-left border-l-2" />
            </div>
        </div>
    
  </div>
</template>
<script>
import NavbarApp from '@/components/NavbarApp.vue'
import SideBar from '@/components/SideBar.vue'
export default {
    name: 'HomeApp',
    components: {
        NavbarApp,
        SideBar,
    },
    data() {
        return {
        }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
