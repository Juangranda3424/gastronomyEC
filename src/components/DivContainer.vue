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

/* Animaciones */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-frame {
  animation: slideInLeft 1.5s ease;
}

.animate-text {
  animation: slideInRight 1.5s ease;
}

/* Para invertir animación cuando es reverse */
.reverse .animate-frame {
  animation: slideInRight 1.5s ease;
}

.reverse .animate-text {
  animation: slideInLeft 1.5s ease;
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
