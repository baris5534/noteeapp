<template>
    <div>
        <NavbarApp/>
        <div class="container mx-auto">
            <div class="grid grid-cols-10">
                <header class="col-span-8 w-10/12 flex flex-col items-center mx-auto">
                    <div class=" w-10/12 max-h-80 text-black m-2 rounded-md flex flex-col p-5">
                        <ModalnewUser>
                            <h2>modal</h2>
                        </ModalnewUser>
                        <h2 class="text-left text-xl font-semibold">Kullanıcılar</h2>

                        <div class="w-2/3 border-2 rounded-lg p-3 flex flex-col justify-between">
                            <AccordionMenu class="mb-4 border-2 mt-2 rounded-xl">
                            <template v-slot:title>
                                <span class="font-semibold">Accordion 1</span>
                            </template>
                            <template v-slot:content>
                                <p class="p-3 border-t-2 flex flex-row justify-between items-center">
                                    <span class="w-2/6 text-left space-x-2">  
                                        <span>Ad Soyad</span>
                                        <span>şifre</span>
                                    </span>
                                    <span class="w-2/6 text-right flex flex-row space-x-2">
                                        <button class="bg-red-600 px-3 py-1 rounded-lg text-white">Sil</button>
                                        <EditUser class="flex">Düzenle</EditUser>
                                    </span>
                                </p>
                            </template>
                           
                        </AccordionMenu>
                        
                        </div>
                        
                        <!-- <div class="flex">
                            <input type="text" name="" id="" placeholder="Not Ekleyin..."
                                class="border-2  rounded-lg break-wrap w-4/6 h-48 text-black">
                            <button class="bg-green-600 p-2 rounded-xl align-top mx-2 flex h-10"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                                        clip-rule="evenodd" />
                                </svg>
                                Yeni Not</button>
                        </div> -->
                        <!-- <div>
                            <button class="bg-blue-600 px-4 text-white flex py-2 rounded-xl align-top m-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                        clip-rule="evenodd" />
                                </svg>
                                Kaydet</button>
                        </div> -->
                    </div>
                    <!-- <div class=" w-3/6 max-h-80 text-black m-2 rounded-md flex flex-col p-5 border-2">
                        <h2 class="text-left pl-12 flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" class="w-6 h-6">
                                <path
                                    d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path
                                    d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                            Notlarım</h2>
                        <ul>
                            <li class="border-2">
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi non vero excepturi amet
                                    deserunt in, impedit quidem eius, alias, fuga quasi minus voluptas facere fugiat
                                    laudantium soluta ad! Consequuntur, nemo?</span>
                            </li>
                        </ul>
                    </div> -->
                </header>

                <SideBar class="col-span-2 px-10 float-left border-l-2" />
            </div>
    </div>
</div>
</template>

<script>
import NavbarApp from '@/components/NavbarApp.vue'
import SideBar from '@/components/SideBar.vue'
import ModalnewUser from '@/components/ModalnewUser.vue'
import AccordionMenu from '@/components/AccordionMenu.vue'
import EditUser from '@/components/EditUser.vue'
    export default {
        name:'UserView',
        components: {
        NavbarApp,
        SideBar,
        ModalnewUser,
        AccordionMenu,
        EditUser,
        },
    }
</script>

<style lang="scss" scoped>

</style>