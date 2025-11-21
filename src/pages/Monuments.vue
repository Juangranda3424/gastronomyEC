<template>
    <ContainerPage :title="$t('monuments.title')">
        <template #context>
            <DivContainer>
                <template #frame>
                    <Frame :frame="monuments1" class="img-right" />
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
                    <Frame :frame="monuments2" class="img-left" />
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
                    <Frame :frame="monuments3" class="img-left" />
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
                    <Frame :frame="monuments4" class="img-right" />
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

import monuments1 from '@/images/monuments/monument1.png';
import monuments2 from '@/images/monuments/monument2.png';
import monuments3 from '@/images/monuments/monument3.png';
import monuments4 from '@/images/monuments/monument4.png';
import Frame from '@/components/Frame.vue';
import DivContainer from '@/components/DivContainer.vue';
import ContainerPage from '@/components/ContainerPage.vue';

</script>

<style scoped>


</style>