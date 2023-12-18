<template>
    <div>
        <div v-for="notes in notess" :key="notes.id">
            <p>{{ notes.notedetail }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoteDetails'
}
</script>

<style scoped></style>