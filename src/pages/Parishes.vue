<template>
    <ContainerPage :title="$t('parishes.title')">
        <template #context>
                <FrameButton 
                    :onPressRight="items[0].command" 
                    :onPressLeft="items[1].command"
                    :displayMode="'block'"
                />
        </template>
    </ContainerPage>
</template>

<script setup>

import ContainerPage from '@/components/ContainerPage.vue';
import FrameButton from '@/components/FrameButton.vue';
import router from '@/router/router';

const items = [
    {
        command: () => {
            router.push('/parishes/urban');
        },
    },
    {
        command: () => {
            router.push('/parishes/rural');
        },
    }
];

</script>

<style scoped>

.container-page {
  background-color: transparent !important;
  
}

</style>