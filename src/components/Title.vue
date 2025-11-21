<template>
    <div class="title-container">
        <div class="title-container-button" style="margin-bottom: 4rem;">
            <Button @click="goBack" severity="danger" style="width: 100%">
                <img :src="ButtonBack" alt="Back" class="img-buttonback"/>
                <p class="font-button">{{ $t('button.label3') }}</p>
            </Button>
        </div>
        <div class="title-container-button">
            <Footer :footer="FooterImg"/>
        </div>
    </div>
</template>

<script setup>

import  Button from 'primevue/button';
import Footer from '@/components/Footer.vue';
import FooterImg from '@/assets/footerwhite.svg';
import ButtonBack from '@/assets/buttonback.svg';

defineProps({
    title: {
        type: String,
        required: true
    }
});

const goBack = () => {
  window.history.back();
}

</script>

<style scoped>

.title-container-button {
    width: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin-bottom: 3rem;
}

.title-container-text{
    width: 60%;
    display: flex; 
    justify-content: center; 
    align-items: center;
}

.p-button{
    height: auto;
    background-color: transparent;
    border: none;
}

.title-container{
    display: block;
    width: 100%;
    align-items: center;
}

.title-container h1{
    font-size: 7rem;
    font-weight: bold;
    text-align: center;
    margin: 20px 0px 20px 0px;
    padding: 0%;
    color: white;
}

:deep(.p-button-icon) {
  font-size: 2rem; /* tamaño del ícono */
}

:deep(.p-button){
    font-size: 2rem;
    padding: 2px;
}

.img-buttonback{
    width: 30%;
}

.font-button{
    font-size:3rem;
    color: #180063;
    position: absolute;
    left: 39%;
    font-weight: 500;
}

</style>