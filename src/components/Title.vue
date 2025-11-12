<template>
    <div class="title-container">
        <div class="title-container-button">
            <Button @click="goBack" icon="pi pi-arrow-left" severity="danger" style="width: 60%"/>
        </div>
        <div class="title-container-text">
            <h1>{{ title }}</h1>
        </div>
        <div class="title-container-button">
            <Button @click="goHome" icon="pi pi-home" severity="danger" style="width: 60%"/>
        </div>
    </div>
</template>

<script setup>

import  Button from 'primevue/button';
import router from '@/router/router';

defineProps({
    title: {
        type: String,
        required: true
    }
});

const goBack = () => {
  window.history.back();
}

const goHome = () => {
    router.push('/home');
}


</script>

<style scoped>

.title-container-button {
    width: 20%;
    display: flex; 
    justify-content: center; 
    align-items: center;
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
    display: flex;
    width: 100%;
    align-items: center;
    background-color: black;

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

</style>