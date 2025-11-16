<template>
    <ContainerPage :title="$t('parishes.rural.title')">
        <template #context>
            <ContainerParish>
                <template #context>
                    <Frame :frame="frameImg" class="img-right"/>
                </template>
                <template #option>
                    <div>
                       <ButtonOption :label="$t('parishes.rural.parish1.title')" :fun="items[0].command"/>
                    </div>
                    <div>
                       <ButtonOption :label="$t('parishes.rural.parish2.title')" :fun="items[1].command"/>
                    </div>
                </template>
            </ContainerParish>
        </template>
    </ContainerPage>
</template>

<script setup>

import ContainerPage from '@/components/ContainerPage.vue';
import ContainerParish from '@/components/ContainerParish.vue';
import frameImg from '@/assets/frame.png';
import ButtonOption from '@/components/ButtonOption.vue';
import Frame from '@/components/Frame.vue';
import router from '@/router/router';


const items = [
    {
        command: () => {
            router.push('/parishes/rural/cotogchoa');
        },
    },
    {
        command: () => {
            router.push('/parishes/rural/rumibamba');
        },
    }
]
</script>

<style scoped>

</style>