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
import sangolqui1 from '@/images/parishes/Sangolqui/sangolqui1.png';
import sangolqui2 from '@/images/parishes/Sangolqui/sangolqui2.png';
import sangolqui3 from '@/images/parishes/Sangolqui/sangolqui3.png';
import sangolqui4 from '@/images/parishes/Sangolqui/sangolqui4.png';
import ContainerParishUR from '@/components/ContainerParishUR.vue';
import { goRouter } from '@/helpers/utils';

const imgs = [
    sangolqui1,
    sangolqui2,
    sangolqui3,
    sangolqui4
]


</script>

<style scoped>

</style>