<template>
    <ContainerPage :title="$t('meaning.title')">
        <template #context>
            <DivContainer :reverse="true">
                <template #frame>
                    <div class="container-frame-img">
                        <Frame :frame="frameImg" class="img-right"/>
                        <Frame :frame="frameImg" class="img-left margin-left"/>
                    </div>
                </template>
                <template #text>
                        <Frame :frame="frameImg" class="img-left"/>
                        <Frame :frame="frameImg" class="img-right margin-left"/>
                </template>
            </DivContainer>
            <DivContainer>
                <template #frame>
                    <div>
                        <Frame :frame="frameImg" class="img-left" />
                        <div>
                            <p class="font-title">{{ $t('meaning.elements.title3') }}</p>
                            <p class="font-paragraph">{{ $t('meaning.elements.rumiñahui') }}</p>    
                        </div>
                    </div>
                </template>
                <template #text>
                    <div>
                        <p class="font-title">{{ $t('meaning.elements.title1') }}</p>
                        <p class="font-paragraph">{{ $t('meaning.elements.rumi') }}</p>
                        <p class="font-title">{{ $t('meaning.elements.title2') }}</p>
                        <p class="font-paragraph">{{ $t('meaning.elements.ñahui') }}</p>
                        <p class="font-title">{{ $t('meaning.languagetitle') }}</p>
                        <p class="font-paragraph">{{ $t('meaning.language') }}</p>
                    </div>
                </template>
            </DivContainer>
            <DivContainer :reverse="true">
                <template #frame>
                    <div class="container-frame-img">
                        <Frame :frame="frameImg" class="img-right"/>
                        <Frame :frame="frameImg" class="img-left margin-left" />
                    </div>
                </template>
                <template #text>
                        <Frame :frame="frameImg" class="img-left"/>
                        <Frame :frame="frameImg" class="img-right margin-left"/>
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