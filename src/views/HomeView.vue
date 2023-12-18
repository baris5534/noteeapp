<template>
  <div class="home">
    <div class="h-screen flex items-center">
      <LoginApp class=""/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import LoginApp  from '@/components/LoginApp.vue'

export default {
  name: 'HomeView',
  components: {
    LoginApp
  }
}
</script>
