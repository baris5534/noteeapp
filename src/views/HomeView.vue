<template>
  <div class="home overflow-hidden">
    <div class="h-screen flex left-0 right-0 top-0 items-center absolute">
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
