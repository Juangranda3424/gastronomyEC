<template>
  <div class="container-page" :style="{ background: bg }">
    <div class="container-tc">
      <div class="page-context">
        <slot name="context"></slot>
      </div>
      <div class="title-sticky">                    
        <Title :title="title"/>
      </div>
    </div>
  </div>
</template>


<script setup>

import Title from '@/components/Title.vue';

defineProps({
    title:{
        type: String,
        required: true
    },
    bg: {
    type: String,
    default: null
  }

})

</script>

<style scoped>

.font-page {
  width: 100%;
  font-size: 4rem;
}

.container-tc{
    display: block;
}

.page-context{
    display: block !important;
    padding: 2rem;

}


</style>