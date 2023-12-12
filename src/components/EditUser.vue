<template>
    <div id="app">
        <div class="">
            <button @click="onToggle"
                class="bg-blue-500 border border-blue-500 px-3 py-2 text-sm shadow-sm flex items-center font-medium tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-blue-600">
                Düzenle
            </button>
        </div>
        <transition name="fade">
            <div v-if="isModalVisible">
                <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-1 float-right h-full w-full"></div>
                <div
                    class="w-full max-w-lg p-3 absolute mx-auto my-auto rounded-xl shadow-lg bg-white flex justify-end items-center left-0 right-0">
                    <div class="mx-auto w-full">
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
            isOpen: false
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
  