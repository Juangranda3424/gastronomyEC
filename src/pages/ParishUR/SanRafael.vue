<template>
    <ContainerParishUR
        :title="$t('parishes.urban.parish2.title')" 
        :img="imgs" 
        :titlelimits="$t('parishes.urban.parish2.data.title2')" 
        :titleubi="$t('parishes.urban.parish2.data.title1')" 
        :ubi="$t('parishes.urban.parish2.data.ubi')" 
        :data="$tm('parishes.urban.parish2.data.limits')"
        :titleactivities="null" 
        :dataactivities="null"
        :fun="() => goRouter('/parishes/urban/meals-sanrafael')"
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