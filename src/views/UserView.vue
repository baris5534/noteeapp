<template>
    <div>
        <NavbarApp/>
        <div class="container mx-auto">
            <div class="grid grid-cols-5">
                <div class="col-span-4 flex flex-col items-center mx-auto  border-r-2 h-screen">
                    <div class=" w-6/12 max-h-80 text-black m-2 rounded-md flex flex-col p-5 border-2">
                        <div class="flex flex-row  justify-between p-2 items-center">
                            <h2 class="text-left pl-12">Kullanıcılar</h2>
                            <button class="p-2 bg-blue-700 rounded-lg text-white">Kullanıcı Ekle</button>
                        </div>
                        
                        <div class="bg-slate-400 flex p-3 justify-between items-center rounded-xl">
                            <div class="w-2/5 flex justify-between">
                                <span>Barış Yıldız</span>
                                <span>123456</span>
                            </div>
                            <div class="w-3/12 flex justify-between">
                                <button class="bg-green-600 px-2 py-1 rounded-xl">Düzenle</button>
                                <button class="bg-red-600 px-2 py-1 rounded-xl">Sil</button>
                            </div>
                    </div>
                </div>
                <!-- <div class=" w-3/6 max-h-80 text-black m-2 rounded-md flex flex-col p-5 border-2">
                        <h2 class="text-left pl-12 flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>
Notlarım</h2>
                        <ul>
                            <li class="border-2">
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi non vero excepturi amet deserunt in, impedit quidem eius, alias, fuga quasi minus voluptas facere fugiat laudantium soluta ad! Consequuntur, nemo?</span>
                            </li>
                        </ul>
                    </div> -->
            </div>
            <SideBar class="col-span-1"/>
        </div>
    </div>
</div>
</template>

<script>
import NavbarApp from '@/components/NavbarApp.vue'
import SideBar from '@/components/SideBar.vue'
    export default {
        name:'UserView',
        components: {
        NavbarApp,
        SideBar
        },
    }
</script>

<style lang="scss" scoped>

</style>