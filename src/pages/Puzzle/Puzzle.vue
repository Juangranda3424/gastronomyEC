<template>
    <ContainerPage :title="`${$t('label.label2')} - ${puzzleTitle}`">
        <template #context>
            <JigsawPuzzle
            :image="img"
            />
        </template>
    </ContainerPage>  
</template>

<script setup>

import ContainerPage from '@/components/ContainerPage.vue';
import JigsawPuzzle from "@/components/JigsawPuzzle.vue";
import { useRoute } from 'vue-router';
import { ref } from 'vue';

//Paso la ruta de la imagen dinamicamente con el query
const route = useRoute();
const puzzleName = route.query.name;
const puzzleTitle = route.query.title;
const img = ref(new URL(`../../images/meals/${puzzleName}.jpg`, import.meta.url).href);

</script>

<style scoped>

</style>