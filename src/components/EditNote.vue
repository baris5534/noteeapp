<template>
    <div id="app">
        <div class="flex">
            <button @click="onToggle" class="hover:scale-125 transition-all fill-white text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
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
                    class="w-[750px] h-4/5 max-w-lg p-3 absolute mx-auto m-auto rounded-xl shadow-lg bg-white flex items-center justify-end top-0 bottom-0 left-0 right-0">
                    <div class="mx-auto w-full h-full flex flex-col">
                        <div class="w-full">
                            <button @click="onToggle"
                            class="mb-2 md:mb-0  p-5 float-right text-sm  font-medium tracking-wider text-red-700 rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                            </button>
                        </div>
                        <div class="text-center p-3 flex-auto justify-center leading-6">
                            <h2 class="text-lg text-left">Not Bilgileri</h2>
                            <div class="flex flex-row space-x-5 items-center">
                                <input type="text" name="" id="" placeholder="Not Başlığı" value="Okul Notlarım"
                                class="border-2 w-2/3 px-2 py-4 rounded-lg my-2">
                                <input type="date" name="" id="" class="border-2 w-1/3 px-3 h-14 rounded-lg"  value="13.12.2023"> 
                            </div>
                            
                            <input  type="text" name="" id="" placeholder="Notunuz.." value="tarih perfonmansı yapılcak , proje ödevlerine bak ..."
                                class="border-2 w-full h-4/6 placeholder:text-left placeholder:absolute placeholder:top-0 pl-4 pt-4 top-0  left-0 relative p-2 rounded-lg my-2 text-ellipsis">
                        </div>
                        <div class="p-3 mt-2 text-center space-x-4 md:block">
                            <button
                                class="mb-2 md:mb-0 bg-green-500 px-16 py-2 text-sm shadow-sm font-medium tracking-wider border-2 text-white rounded-md hover:shadow-lg hover:bg-green-600">
                                Kaydet
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
  