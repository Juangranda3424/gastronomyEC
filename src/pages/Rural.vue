<template>
    <ContainerPage :title="$t('parishes.rural.title')">
        <template #context>
            <ContainerParish>
                <template #context>
                    <Frame :frame="frameImg" class="img-right"/>
                </template>
                <template #option>
                    <div>
                       <ButtonOption :label="$t('parishes.rural.parish1.title')" :fun="()=>{}"/>
                    </div>
                    <div>
                       <ButtonOption :label="$t('parishes.rural.parish2.title')" :fun="()=>{}"/>
                    </div>
                    <div>
                       <ButtonOption :label="$t('parishes.rural.parish3.title')" :fun="()=>{}"/>
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

</script>

<style scoped>

</style>