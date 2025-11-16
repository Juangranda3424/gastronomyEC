<template>
    <ContainerMeals
        :image="list"
        :title="$t('parishes.urban.parish3.title')"
        :meals="$tm('parishes.urban.parish1.meals')"
        :titlemeals="$t('parishes.urban.parish1.titlemeals')"
        :mealsname="mealsname"
    />
</template>

<script setup>

import ContainerMeals from '@/components/ContainerMeals.vue';
import frameImg from '@/assets/frame.png';

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