<template>
    <div>
        <NavbarApp/>
        <div class="w-full">
            <div class="grid grid-cols-10">
                <div class="col-span-8 mt-20">
                    <h2 class="text-2xl">Anasayfa</h2>
                </div>
                <SideBar class="col-span-2 px-10 float-left border-l-2"/>
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
        data(){
            return{
                linkler:['Anasayfa','Not Defteri']
            }
        }
    }
</script>

<style scoped>

</style>