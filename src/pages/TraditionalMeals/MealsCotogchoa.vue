<template>
    <ContainerMeals
        :image="list"
        :title="$t('parishes.rural.parish1.title')"
        :meals="$tm('parishes.urban.parish1.meals')"
        :titlemeals="$t('parishes.urban.parish1.titlemeals')"
        :mealsname="mealsname"
    />
</template>

<script setup>

import ContainerMeals from '@/components/ContainerMeals.vue';
import frameImg from '@/assets/frame.png';

//Es la lista de imagenes de los productos
const list = [
    frameImg,
    frameImg,
    frameImg,
    frameImg,
    frameImg,
    frameImg,
    frameImg,
    frameImg,
    frameImg,
    frameImg
]

//Se envia el nombre de la imagen para encontrar en el la carpeta y hacer el puzzle
const mealsname = [
    'locropapa',
    'locropapa',
    'locropapa',
    'locropapa',
    'locropapa',
    'locropapa',
    'locropapa',
    'locropapa',
    'locropapa',
    'locropapa',
]

</script>

<style scoped>

</style>


