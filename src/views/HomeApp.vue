<template>
    <div>
        <NavbarApp/>
        <div class="container mx-auto">
            <div class="grid grid-cols-3">
                <div class="bg-red-500 col-span-2">1</div>
                <SideBar/>
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
        SideBar
        },
        data(){
            return{
                linkler:['Anasayfa','Not Defteri']
            }
        }
    }
</script>

<style scoped>

</style>