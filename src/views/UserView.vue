<template>
    <div>
        <NavbarApp />
        <div class="container mx-auto">
            <div class="grid grid-cols-10">
                <header class="col-span-8 w-10/12 flex flex-col items-center mx-auto">
                    <div class=" w-10/12 max-h-80 text-black m-2 rounded-md flex flex-col p-5">
                        <ModalnewUser>
                            <h2>modal</h2>
                        </ModalnewUser>
                        <h2 class="text-left text-xl font-semibold">Kullanıcılar</h2>

                        <div class="w-2/3 border-2 rounded-lg p-3 flex flex-col justify-between">
                            <AccordionMenu v-for="user in users" :key="user.id" class="mb-4 border-2 mt-2 rounded-xl">
                                <template v-slot:title>
                                    <span class="font-semibold">{{ user.name }}</span>
                                </template>
                                <template v-slot:content>
                                    <p class="p-3 border-t-2 flex flex-row justify-between items-center">
                                        <span class="w-2/6 text-left space-x-2">
                                            <span>{{ user.name }}</span>
                                            <span>{{ user.password }}</span>
                                        </span>
                                        <span class="w-1/6 text-right flex flex-row space-x-2 items-center">
                                            <button class="hover:scale-125 transition-all"><svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                    <path fill-rule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                            <EditUser class="">Düzenle</EditUser>
                                        </span>
                                    </p>
                                </template>

                            </AccordionMenu>

                        </div>

                    </div>
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
    name: 'UserView',
    components: {
        NavbarApp,
        SideBar,
        ModalnewUser,
        AccordionMenu,
        EditUser,
    },
    data() {
        return {
            users: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.users = data)
            .catch(err => console.log(err.message))
    },
}
</script>

<style lang="scss" scoped></style>