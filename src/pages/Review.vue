<template>
    <ContainerPage :title="$t('review.title')">
        <template #context>
            <DivContainer>
                <template #frame>
                    <Frame :frame="review1" class="img-left" />
                </template>
                <template #text>
                    <p class="font-paragraph">{{ $t('review.paragraph1') }}</p>
                </template>
            </DivContainer>
            <DivContainer :reverse="true">
                <template #frame>
                    <div class="container-frame-img">
                        <Frame :frame="review2" class="img-right"/>
                        <Frame :frame="review3" class="img-left margin-left"/>
                    </div>
                </template>
                <template #text>
                    <p class="font-paragraph">{{ $t('review.paragraph2') }}</p>
                </template>
            </DivContainer>
            <DivContainer>
                <template #frame>
                    <Frame :frame="review4" class="img-right"/>
                </template>
                <template #text>
                    <p class="font-paragraph">{{ $t('review.paragraph3') }}</p>
                </template>
            </DivContainer>
            <DivContainer :reverse="true">
                <template #frame>
                    <div style="display: block;">
                        <div class="container-frame-img">
                            <Frame :frame="review5" class="img-right" />
                            <Frame :frame="review6" class="img-left margin-left"/>
                        </div>
                        <div class="container-frame-img">
                            <Frame :frame="review7" class="img-left" />
                            <Frame :frame="review8" class="img-right margin-left"/>
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

import review1 from '@/images/review/review1.png';
import review2 from '@/images/review/review2.png';
import review3 from '@/images/review/review3.png';
import review4 from '@/images/review/review4.png';
import review5 from '@/images/review/review5.png';
import review6 from '@/images/review/review6.png';
import review7 from '@/images/review/review7.png';
import review8 from '@/images/review/review8.png';
import Frame from '@/components/Frame.vue';
import DivContainer from '@/components/DivContainer.vue';
import ContainerPage from '@/components/ContainerPage.vue';

</script>

<style scoped>


</style>