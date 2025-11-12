<template>
    <ContainerPage :title="$t('monuments.title')">
        <template #context>
            <DivContainer>
                <template #frame>
                    <Frame :frame="frameImg" class="img-left" />
                </template>
                <template #text>
                    <div>
                        <p class="font-title">{{ $t('monuments.monuments1') }}</p>
                        <p class="font-paragraph">{{ $t('monuments.paragraph1') }}</p>
                    </div>
                </template>
            </DivContainer>
            <DivContainer :reverse="true">
                <template #frame>
                    <Frame :frame="frameImg" class="img-left" />
                </template>
                <template #text>
                    <div>
                        <p class="font-title">{{ $t('monuments.monuments2') }}</p>
                        <p class="font-paragraph">{{ $t('monuments.paragraph2') }}</p>
                    </div>
                </template>
            </DivContainer>
            <DivContainer>
                <template #frame>
                    <Frame :frame="frameImg" class="img-left" />
                </template>
                <template #text>
                    <div>
                        <p class="font-title">{{ $t('monuments.monuments3') }}</p>
                        <p class="font-paragraph">{{ $t('monuments.paragraph3') }}</p>
                    </div>
                </template>
            </DivContainer>
            <DivContainer :reverse="true">
                <template #frame>
                    <Frame :frame="frameImg" class="img-left" />
                </template>
                <template #text>
                    <div>
                        <p class="font-title">{{ $t('monuments.monuments4') }}</p>
                        <p class="font-paragraph">{{ $t('monuments.paragraph4') }}</p>
                    </div>
                </template>
            </DivContainer>
        </template>
    </ContainerPage>
</template>

<script setup>

import frameImg from '@/assets/frame.png';
import Frame from '@/components/Frame.vue';
import DivContainer from '@/components/DivContainer.vue';
import ContainerPage from '@/components/ContainerPage.vue';

</script>

<style scoped>


</style>