<template>
  <div class="home overflow-hidden">
    <div class="h-screen flex left-0 right-0 top-0 items-center absolute bg-gray-700">
      <LoginApp class=""/>
    </div>
  </div>
</template>

<script>
import LoginApp  from '../login/component/LoginApp.vue'

export default {
  name: 'HomeView',
  components: {
    LoginApp
  }
}
</script>
