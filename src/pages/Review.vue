<template>
    <ContainerPage :title="$t('review.title')">
        <template #context>
            <DivContainer>
                <template #frame>
                    <Frame :frame="frameImg" class="img-left" />
                </template>
                <template #text>
                    <p class="font-paragraph">{{ $t('review.paragraph1') }}</p>
                </template>
            </DivContainer>
            <DivContainer :reverse="true">
                <template #frame>
                    <div class="container-frame-img">
                        <Frame :frame="frameImg" class="img-right"/>
                        <Frame :frame="frameImg" class="img-left margin-left"/>
                    </div>
                </template>
                <template #text>
                    <p class="font-paragraph">{{ $t('review.paragraph2') }}</p>
                </template>
            </DivContainer>
            <DivContainer>
                <template #frame>
                    <Frame :frame="frameImg" class="img-right"/>
                </template>
                <template #text>
                    <p class="font-paragraph">{{ $t('review.paragraph3') }}</p>
                </template>
            </DivContainer>
            <DivContainer :reverse="true">
                <template #frame>
                    <div style="display: block;">
                        <div class="container-frame-img">
                            <Frame :frame="frameImg" class="img-right" />
                            <Frame :frame="frameImg" class="img-left margin-left"/>
                        </div>
                        <div class="container-frame-img">
                            <Frame :frame="frameImg" class="img-left" />
                            <Frame :frame="frameImg" class="img-right margin-left"/>
                        </div>
                    </div>
                </template>
                <template #text>
                    <p class="font-paragraph">{{ $t('review.paragraph4') }}</p>
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