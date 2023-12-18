<template>
    <div class="font-semibold bg-slate-400 rounded-md w-72 mx-auto h-64 p-3 flex flex-col justify-between">
        <span>GİRİŞ YAPINIZ</span>
            <input type="text" name="" id="" placeholder="Name" class="p-3 rounded-md">
            <input type="password" name="" id="" placeholder="Password" class="p-3 rounded-md">
        <router-link to="/login" class="w-32 mx-auto flex  font-bold py-3 px-5 rounded-md bg-gray-300">GİRİŞ YAP</router-link>
    </div>
</template>

<script>
    export default {
        name: "LoginApp",
    }
</script>

<style scoped>

</style>