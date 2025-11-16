<template>
    <Button  severity="contrast" :label="label" @click="fun" />
</template>

<script setup>

import Button from 'primevue/button';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    fun: {
        type: Function,
        required: true
    }

})

</script>

<style scoped>

.p-button{
    width: 100% !important;
    height: 100% !important;
    padding: 2rem;
    font-size: 5rem;
    border-radius: 2rem;
    background-color: black;
}

</style>