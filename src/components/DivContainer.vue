<template>
  <div
    class="container-divreview"
    :class="{ reverse: reverse }"
  >
    <div class="animate-frame">
      <slot name="frame"></slot>
    </div>
    <div class="animate-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reverse: {
    type: Boolean,
    default: false, // false = Frame a la izquierda | true = Frame a la derecha
  },
})
</script>

<style scoped>
.container-divreview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

/*Invierte el orden de los elementos cuando reverse=true */
.container-divreview.reverse {
  flex-direction: row-reverse;
}

.container-divreview div {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
}



</style>
