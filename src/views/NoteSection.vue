<template>
    <div>
        <NavbarApp/>
        <div class="container mx-auto">
            <div class="grid grid-cols-3">
                <div class="bg-red-500 col-span-2 flex justify-center">
                    <div class="bg-gray-700 w-3/5 text-white flex flex-col p-5">
                        <h2 class="text-left">Not Ekle</h2>
                        <div>
                            <textarea name="" id="" cols="30" rows="8" placeholder="Not Ekleyin..." class="p-3 rounded-lg"></textarea>
                            <button class="bg-green-600 p-2 rounded-xl">+ Yeni Not</button>
                        </div>
                    </div>
                </div>
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
  name: 'NoteSection',
  components: {
        NavbarApp
        },
}
    
</script>

<style lang="scss" scoped>

</style>