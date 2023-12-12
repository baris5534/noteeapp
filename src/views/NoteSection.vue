<template>
    <div>
        <NavbarApp />
        <div class="container mx-auto">
            <div class="grid grid-cols-10">
                <header class="col-span-8 w-10/12 flex flex-col items-center mx-auto">
                    <div class=" w-10/12 max-h-80 text-black m-2 rounded-md flex flex-col p-5">
                        <ModalnewNote>
                            <h2>modal</h2>
                        </ModalnewNote>
                        
                        <h2 class="text-left text-xl font-semibold">Notlarım</h2>
                        
                        <div class="w-2/3 border-2 rounded-lg p-3 flex flex-col justify-between">
                            <AccordionMenu class="mb-4 border-2 mt-2 rounded-xl">
                            <template v-slot:title>
                                <span class="font-semibold">{{ baslik }}</span>
                            </template>
                            <template v-slot:content>
                                <p class="p-3 border-t-2 text-left">
                                    {{notIcerigi}}<br/>
                                    <span class="float-right">{{ kaydedilenTarih }}</span>
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
import ModalnewNote from '@/components/ModalnewNote.vue'
import AccordionMenu from '@/components/AccordionMenu.vue'
export default {
    name: 'NoteSection',
    components: {
        NavbarApp,
        SideBar,
        ModalnewNote,
        AccordionMenu,
    },
    data(){
        return{
            notbasligi:'not1',
            noticerigi:'bhbjhvjhvk',
            nottarihi:'12:12:2023',
        }
    },
    methods: {
        openModal() {
            this.$refs.ModalnewNote.open();
        },
        bugununTarihiniKaydet(){
            const bugununTarihi = new Date();
            const tarihFormati = {day:'numeric',mont:'long',year:'numeric'};
            const formatliTarih = bugununTarihi.toLocaleDateString('tr-TR',tarihFormati);
            this.kaydedilenTarih = formatliTarih
        },
    },
};

</script>

<style scoped></style>