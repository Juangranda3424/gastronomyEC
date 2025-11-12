<template>
  <SpeedDial :model="items" direction="right" :transitionDelay="80"class="container-speed" >
    <template #button="{ toggleCallback }">
            <Button icon="pi pi-language" @click="toggleCallback"  rounded severity="contrast"  style="width: 5rem; height: 5rem;"/>
    </template>

    <template #item="{ item, toggleCallback }">
        <div class="item-speedDial" @click="toggleCallback">
            <span :class="item.icon" />
            <span>
                {{ item.label }}
            </span>
        </div>
    </template>
  </SpeedDial>
</template>

<script setup>
import { ref } from 'vue';
import SpeedDial from 'primevue/speeddial';
import Button from 'primevue/button';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const cambiarIdioma = (idioma) => {
  locale.value = idioma
}



const items = ref([
  { 
    label: 'Español',
    icon: 'pi pi-flag-fill', 
    command: () => {
      cambiarIdioma('es')
    }},
  { 
    label: 'Inglés', 
    icon: 'pi pi-globe', 
    command: () => {
      cambiarIdioma('en')
    }},
  { 
    label: 'Kichwa', 
    icon: 'pi pi-sun', 
    command: () => {
      cambiarIdioma('qu')
    }}
]);
</script>

<style scoped>

.item-speedDial{
  background-color: rgb(0, 0, 0);
  border-radius: 2rem;
  font-size: 2rem;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  color: white;
}

.container-speed{
  position: absolute;
}

:deep(.p-speeddial) {
  position: fixed !important;
  inset: auto !important;
}

:deep(.p-button-icon) {
  font-size: 2rem; /* tamaño del ícono */
}


</style>
