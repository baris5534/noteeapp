<template>
    <div id="app">
        <div class="flex flex-col items-center justify-start float-left py-3 min-h-full">
            <button @click="onToggle"
                class="bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm flex items-center font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
                Yeni Not
            </button>
        </div>
        <transition name="fade">
            <div v-if="isModalVisible">
                <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-1 float-right h-full w-full"></div>
                <div
                    class="w-[750px] h-4/6  absolute mx-auto my-auto rounded-xl shadow-lg bg-white flex justify-end items-center left-0 right-0">

                    <div class="mx-auto w-full h-full flex flex-col">
                        <div class="w-full">
                            <button @click="onToggle"
                            class="mb-2 md:mb-0  p-5 float-right text-sm  font-medium tracking-wider text-black rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clip-rule="evenodd" />
                            </svg>

                        </button>
                    </div>

                        
                        <div class="p-3 flex-auto justify-center leading-6">
                            <h2 class="text-lg text-left pl-10 bg-red-200">Notunuz</h2>
                            <div class="flex flex-row space-x-5">
                                <input v-model="baslik" type="text" name="" id="baslik" placeholder="Not Başlığı"
                                class="border-2 w-2/3 px-2 py-4 rounded-lg my-2">
                                <input type="date" name="" id="" class="border-2 px-3 rounded-lg">
                            </div>
                            
                            <input v-model="notIcerigi" type="text" name="" id="notIcerigi" placeholder="Notunuz.."
                                class="border-2 w-full h-4/6 placeholder:text-left placeholder:absolute placeholder:top-0 pl-4 pt-4 top-0  left-0 relative p-2 rounded-lg my-2 text-ellipsis">
                        </div>
                        <div class="p-3 mt-2 text-center space-x-4 md:block">
                            <button @click="notuKaydet" type="submit"
                                class="mb-2 md:mb-0 bg-green-500 px-8 py-2 text-sm shadow-sm float-right font-medium tracking-wider border-2 text-white rounded-md hover:shadow-lg hover:bg-green-600">
                                Kaydet
                            </button>

                            <span>{{ notIcerigi }}</span>
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
            title: '',
            notedetail: '',
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
        },
        notuKaydet() {

        },

    },
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
  