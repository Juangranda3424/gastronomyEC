<template>
  <div class="video-background">
    <video autoplay muted loop playsinline class="video-bg">
      <source :src="video" type="video/mp4">
    </video>

    <div class="content">
      <img :src="FooterWhite" alt="footer" style="width: 80%; margin-bottom: -80%;">
    
        <div class="title-container-button-welcome" style="margin-bottom: 4rem;">
            <Button @click="$router.push('/home')" severity="danger" style="width: 100%">
                <img :src="ButtonStart" alt="start" class="img-buttonstart-welcome"/>
                <p class="font-button-welcome">{{ $t('button.label4') }}</p>
            </Button>
        </div>
    </div>
    <img :src="UbiImg" alt="ubi" style="width: 50%; position: absolute; bottom: 5%; left: 5%;"/>
  </div>
</template>

<script setup>

import video from '@/assets/welcome/welcome.mp4';
import FooterWhite from '@/assets/footerwhite.svg';
import ButtonStart from '@/assets/buttonstart.svg';
import Button from 'primevue/button';
import UbiImg from '@/assets/welcome/ubi.svg';

</script>

<style scoped>
.video-background {
  position: relative;
  width: 100%;
  height: 100vh; /* Pantalla completa */
  overflow: hidden;
}

.video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: fill;
  z-index: -1;
}

.content {
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  padding-top: 4rem;
  justify-content: center;
  justify-items: end;
  width: 100%;
  height: 100%;
}

.font-button-welcome{
    font-size:4.5rem;
    color: rgb(213,142,26);
    position: absolute;
    left: 30%;
    bottom: -25%;
    font-weight: 500;
}

.img-buttonstart-welcome{
    width: 50%;
}

.title-container-button-welcome {
    width: 100%;
    margin-top:20%;
}


:deep(.p-button){
    height: auto;
    background-color: transparent !important;
    border: none;
}

</style>
