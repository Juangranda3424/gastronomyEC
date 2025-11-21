<template>
  <div 
    class="frame-container"
    :style="{
      display: displayMode,
      justifyContent: justify,
      alignItems: align
    }"
  >
      <Button v-if="props.reverse" @click="onPressLeft" >
        <Frame :frame="props.img1" />
        <p class="text-container-bottom-tall text-margin-left">{{ props.text1 }}</p>
        <img :src="marker" class="marker-container-top-right"/>
        <img :src="buttonblue" alt="" class="button-container-bottom-left-tall">
        <p class="text-container-bottom-left-tall">{{ $t("label.label9") }}</p>
      </Button>

      <Button v-if="props.reverse" @click="onPressRight">
        <Frame :frame="props.img2" style="width: 27rem; margin-bottom: 8rem;"/>
        <p class="text-container-bottom-small text-margin-right">{{ props.text2 }}</p>
        <img :src="marker" alt="Frame Image" class="marker-container-top-left"/>
        <img :src="buttonyellow" alt="" class="button-container-bottom-left-small">
        <p class="text-container-bottom-left-small">{{ $t("label.label9") }}</p>
      </Button>

      <Button v-if="props.reverse === false" @click="onPressLeft" style="width: 27rem; margin-bottom: -8rem;">
        <Frame :frame="props.img1" />
        <p class="text-container-top-tall text-margin-left">{{ props.text1 }}</p>
        <img :src="marker" alt="Frame Image" class="marker-container-buttom-right"/>
        <img :src="buttonyellow" alt="" class="button-container-bottom-left-tall">
        <p class="text-container-top-left-tall">{{ $t("label.label9") }}</p>
      </Button>

      <Button v-if="props.reverse == false" @click="onPressRight">
        <Frame :frame="props.img2" />
        <p class="text-container-top-small text-margin-right">{{ props.text2 }}</p>
        <img :src="marker" alt="Frame Image" class="marker-container-buttom-left"/>
        <img :src="buttonblue" alt="" class="button-container-top-left-small">
        <p class="text-container-top-left-small">{{ $t("label.label9") }}</p>
      </Button>
  </div>
</template>

<script setup>
import { Button } from 'primevue';
import Frame from './Frame.vue';
import marker from '@/assets/marker.svg';
import buttonblue from '@/assets/buttonblue.svg';
import buttonyellow from '@/assets/buttonyellow.svg';


// Props configurables
const props = defineProps({
  onPressLeft: Function,
  onPressRight: Function,

  displayMode: {
    type: String,
    default: 'flex' // 'block', 'grid', etc.
  },

  justify: {
    type: String,
    default: 'center'
  },
  align: {
    type: String,
    default: 'center'
  },
  img1: {
    type: String,
  },
  img2: {
    type: String,
  },
  text1: {
    type: String,
  },
  text2: {
    type: String,
  },
  reverse: {
    type: Boolean,
    default: false
  }
  
});
</script>

<style scoped>
.frame-container {
  text-align: center;
  width: 100%;
}

.p-button {
  background: none;
  border: none;
  box-shadow: none;
  margin: 0 10px;
  padding: 0;
}

.p-button:active,
.p-button:not(:disabled):hover {
  background: none;
  border: none;
  box-shadow: none;
}

.text-container-bottom-small{
  font-size: 3.5rem;
  position: absolute;
  bottom: 11rem;
  color: white;
  width: 90%;
  text-align: start;
}

.text-container-bottom-tall{
  font-size: 3.5rem;
  position: absolute;
  bottom: 5rem;
  color: white;
  width: 90%;
  text-align: start;
}


.text-container-top-small{
  font-size: 3.5rem;
  position: absolute;
  bottom: 4rem;
  color: white;
  width: 90%;
  text-align: start;
}

.text-container-top-tall{
  font-size: 3.5rem;
  position: absolute;
  bottom: 4rem;
  color: white;
  width: 90%;
  text-align: start;
}

.text-margin-left{
  margin-left: 2rem ;
}

.text-margin-right{
  margin-right: -2rem ;
}

.marker-container-top-right{
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12%;
}

.marker-container-buttom-right{
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 12%;
}

.marker-container-buttom-left{
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 12%;
}

.marker-container-top-left{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 12%;
}

.button-container-bottom-left-tall{
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  width: 60%;
}

.button-container-bottom-left-small{
  position: absolute;
  bottom: 10.5rem;
  left: 3rem;
  width: 60%;
}

.text-container-bottom-left-tall{
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 60%;
  font-size: 2.5rem;
  color: #e7b537;
  font-weight: 500;
}

.text-container-bottom-left-small{
  position: absolute;
  bottom: 9rem;
  left: 1rem;
  width: 60%;
  font-size: 2rem;
  font-weight: 500;
  color: #180063;
}


.button-container-bottom-left-tall{
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  width: 60%;
}

.button-container-top-left-small{
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  width: 60%;
}

.text-container-top-left-tall{
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;
  width: 60%;
  font-size: 2rem;
  color: #180063;
  font-weight: 500;
}

.text-container-top-left-small{
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 60%;
  font-size: 2.5rem;
  font-weight: 500;
  color: #e7b537;
}

</style>
