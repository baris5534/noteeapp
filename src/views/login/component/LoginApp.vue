<template>
    <div class="font-semibold bg-slate-400 rounded-md w-72 mx-auto h-64 p-5 flex flex-col justify-between">
        <span>GİRİŞ YAPINIZ</span>
            <input type="text" name="" id="" placeholder="Name" class="p-2 rounded-md" value="Barış Yıldız">
            <input type="password" name="" id="" placeholder="Password" class="p-2 rounded-md" value="123456">
        <router-link to="/home" class="mx-auto flex font-bold w-full py-2 text-center px-20 rounded-md bg-gray-300 hover:bg-gray-200">GİRİŞ YAP</router-link>
    </div>
</template>

<script>
    export default {
        name: "LoginApp",
    }
</script>

<style scoped>

</style>