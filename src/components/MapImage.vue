<template>
    <div class="mapimage-container">
        <img :src="mapimage" alt="" class="button-container-bottom-left">      
    </div>
</template>

<script setup>

import mapimage from '@/assets/mapimage.svg';

</script>

<style scoped>

img {
    width: 8%;
    height: auto;
}

.mapimage-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    z-index: 1;
}

</style>