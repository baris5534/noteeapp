<template>
    <div id="app">
        <div>
            <button @click="onToggle" class="hover:scale-125 transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" class="w-6 h-6">
                    <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path
                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
            </button>
        </div>
        <transition name="fade">
            <div v-if="isModalVisible">
                <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-1 float-right h-full w-full"></div>
                <div
                    class="w-full max-w-lg h-[600px] p-3 absolute mx-auto my-auto rounded-xl shadow-lg bg-white flex justify-end items-center left-0 right-0">
                    <div class="mx-auto w-full h-[800px]">
                        <div class="text-center p-3 flex-auto justify-center leading-6">
                            <h2 class="text-lg text-left pl-20">Kullancı Bilgileri</h2>
                            <input type="text" name="" id="" placeholder="Adı Soyadı"
                                class="border-2 w-2/3 p-2 rounded-lg my-2">
                            <input type="password" name="" id="" placeholder="Şifre"
                                class="border-2 w-2/3 p-2 rounded-lg my-2">
                        </div>
                        <div class="p-3 mt-2 text-center space-x-4 md:block">
                            <button
                                class="mb-2 md:mb-0 bg-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 text-white rounded-md hover:shadow-lg hover:bg-green-600">
                                Kaydet
                            </button>
                            <button @click="onToggle"
                                class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600">
                                Kapat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },

    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },

    methods: {
        onToggle() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>
  