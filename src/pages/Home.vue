<template>
    <div class="container-home">
        <ButtonLenguage
            style="margin-top: 0.5rem; margin-bottom: 2rem;"
        />
        <FrameButton 
            :onPressRight="items[0].command" 
            :onPressLeft="items[1].command"
        />
        <FrameButton 
            :onPressLeft="items[2].command" 
            :onPressRight="items[3].command"
        />
    </div>
</template>

<script setup>
import ButtonLenguage from '@/components/ButtonLanguage.vue';
import FrameButton from '@/components/FrameButton.vue';
import router from '@/router/router';

const items = [
    {
        command: () => {
            router.push('/monuments');
        },
    },
    {
        command: () => {
            router.push('/meaning');
        },
    },    
    {
        command: () => {
            router.push('/parishes');
        },
    },
    {
        command: () => {
            router.push('/review');
        },
    },
];

</script>

<style scoped>

.container-home{
    padding: 0px;
}

</style>