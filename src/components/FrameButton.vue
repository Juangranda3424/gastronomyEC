<template>
  <div 
    class="frame-container"
    :style="{
      display: displayMode,
      justifyContent: justify,
      alignItems: align
    }"
  >
      <Button @click="onPressLeft">
        <Frame :frame="FrameImg" class="img-left" />
      </Button>

      <Button @click="onPressRight">
        <Frame :frame="FrameImg" class="img-right" />
      </Button>
  </div>
</template>

<script setup>
import { Button } from 'primevue';
import FrameImg from '@/assets/frame.png';
import Frame from './Frame.vue';

// Props configurables
defineProps({
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
</style>
