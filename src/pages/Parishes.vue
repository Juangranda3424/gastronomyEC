<template>
    <ContainerPage :title="$t('parishes.title')">
        <template #context>
                <FrameButton 
                    :img1="ruralimg"
                    :img2="urbanimg"
                    :onPressRight="items[0].command" 
                    :onPressLeft="items[1].command"
                    :displayMode="'block'"
                    class="margin-context"
                    :text1="$t('parishes.rural.title')"
                    :text2="$t('parishes.urban.title')"
                />
        </template>
    </ContainerPage>
</template>

<script setup>
import ruralimg from '@/images/parishes/rural.png';
import urbanimg from '@/images/parishes/urban.png';
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

.margin-context{
    margin-top: 3rem;

}


</style>