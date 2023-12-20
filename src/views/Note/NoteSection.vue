<template>
    <div>

        <div class="w-full text-black m-2 rounded-md flex flex-col p-5">
            <ModalnewNote>
                <h2>modal</h2>
            </ModalnewNote>

            <h2 class="text-left py-1 text-xl font-semibold">Notlarım</h2>
            <table class="table-fixed border-separate">
                <thead>
                    <tr class="border p-3 bg-white text-left">
                        <th class="border p-2 border-slate-400">id</th>
                        <th class="border p-2 border-slate-400">Not Başlığı</th>
                        <th class="border p-2 border-slate-400">Notunuz</th>
                        <th class="border p-2 border-slate-400">Kaydetme Tarihi</th>
                        <th class="border p-2 border-slate-400">Düzenleme</th>
                    </tr>
                </thead>
                <tbody v-for="notes in notess" :key="notes.id">
                    <tr class="border p-3 border-white text-white">
                        <td class="bg-gray-900 p-2 text-left border px-5 w-1/6">{{ notes.id }}</td>
                        <td class="bg-gray-900 p-2 text-left border w-1/6">{{ notes.title }}</td>
                        <td class="bg-gray-900 p-2 text-left border w-3/6">{{ notes.notedetail }} ...</td>
                        <td class="bg-gray-900 p-2 text-left border w-1/6">{{ notes.notedate }}</td>
                        <td class="bg-gray-900 p-2 text-left border flex items-center justify-between space-x-1 w-6/6">
                            <DelNote />
                            <EditNote />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ModalnewNote from '../Note/component/ModalnewNote.vue'
import EditNote from '../Note/component/EditNote.vue'
import DelNote from '../Note/component/DelNote.vue'
export default {
    name: 'NoteSection',
    components: {
        ModalnewNote,
        EditNote,
        DelNote,
    },
    data() {
        return {
            notess: [
                {
                    "id": 1,
                    "title": "Okul notlarım",
                    "notedetail": "tarih perfonmansı yapılcak , proje ödevlerine bak",
                    "notedate": "13:12:2023",
                    "complete": true
                },
                {
                    "id": 2,
                    "title": "Ofis Yapılacaklar",
                    "notedetail": "Temizlik yapılcak",
                    "notedate": "13:12:2023",
                    "complete": true
                },
                {
                    "id": 3,
                    "title": "Hayat notlarım",
                    "notedetail": "Yaşamaya bak takma kafana",
                    "notedate": "13:12:2023",
                    "complete": true
                },
                {
                    "id": 4,
                    "title": "bilgisayar notlarım",
                    "notedetail": "steam ets discord",
                    "notedate": "13:12:2023",
                    "complete": true
                },

            ]
        }
    },
    methods: {
        openModal() {
            this.$refs.ModalnewNote.open();
        },
    },
};

</script>

<style scoped></style>