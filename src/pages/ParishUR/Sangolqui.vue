<template>
    <ContainerParishUR
        :title="$t('parishes.urban.parish1.title')" 
        :img="imgs"
        :titlelimits="$t('parishes.urban.parish1.data.title2')" 
        :titleubi="$t('parishes.urban.parish1.data.title1')" 
        :ubi="$t('parishes.urban.parish1.data.ubi')" 
        :data="$tm('parishes.urban.parish1.data.limits')"
        :titleactivities="null" 
        :dataactivities="null"
        :fun="() => goRouter('/parishes/urban/meals-sangolqui')"
    />
</template>

<script setup>
import frameImg from '@/assets/frame.png';
import ContainerParishUR from '@/components/ContainerParishUR.vue';
import { goRouter } from '@/helpers/utils';

const imgs = [
    frameImg,
    frameImg,
]


</script>

<style scoped>

</style>