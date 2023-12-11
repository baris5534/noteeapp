<template>
    <div>
        <NavbarApp/>
        <div class="container mx-auto">
            <div class="grid grid-cols-3">
                <div class="bg-red-500 col-span-2">1</div>
                <div class="bg-gray-400">
                    <ul>
                        <li><router-link to="/note">Not Defteri</router-link></li>
                        <li>Kullanıcılar</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarApp from '@/components/NavbarApp.vue'
    export default {
        name: 'HomeApp',
        components: {
        NavbarApp
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