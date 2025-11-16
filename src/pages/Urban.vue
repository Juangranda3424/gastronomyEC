<template>
    <ContainerPage :title="$t('parishes.urban.title')">
        <template #context>
            <ContainerParish style="margin-top: -2rem;">
                <template #context>
                    <Frame :frame="frameImg" class="img-right"/>
                </template>
                <template #option>
                    <div>
                       <ButtonOption :label="$t('parishes.urban.parish1.title')" :fun="items[0].command"/>
                    </div>
                    <div>
                       <ButtonOption :label="$t('parishes.urban.parish2.title')" :fun="items[1].command"/>
                    </div>
                    <div>
                       <ButtonOption :label="$t('parishes.urban.parish3.title')" :fun="items[2].command"/>
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
            router.push('/parishes/urban/sangolqui');
        },
    },
    {
        command: () => {
            router.push('/parishes/urban/sanrafael');
        },
    },
    {
        command: () => {
            router.push('/parishes/urban/sanpedrotaboada');
        },
    }
]


</script>

<style scoped>

</style>