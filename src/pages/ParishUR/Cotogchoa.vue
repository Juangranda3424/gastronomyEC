<template>
    <ContainerParishUR
        :title="$t('parishes.rural.parish1.title')" 
        :img="imgs" 
        :titlelimits="$t('parishes.rural.parish1.data.title2')" 
        :titleubi="$t('parishes.rural.parish1.data.title1')" 
        :ubi="$t('parishes.rural.parish1.data.ubi')" 
        :data="$tm('parishes.rural.parish1.data.limits')"
        :titleactivities="$t('parishes.rural.parish1.data.title3')" 
        :dataactivities="$t('parishes.rural.parish1.data.data3')"
        :fun="() => goRouter('/parishes/rural/meals-cotogchoa')"

    />
</template>

<script setup>
import frameImg from '@/assets/frame.png';
import ContainerParishUR from '@/components/ContainerParishUR.vue';
import { goRouter } from '@/helpers/utils';


const imgs = [
    frameImg,
    frameImg,
    frameImg,
]

</script>

<style scoped>

</style>