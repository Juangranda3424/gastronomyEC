<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import L, { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()


const props = defineProps({
    name: {
        type: String
    }
})

const restaurantData = computed(() => tm(`restaurants.${props.name}.restaurant`))

// Para corregir iconos de Leaflet en Vue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

onMounted(async () => {


  // Inicializa el mapa
  const map = L.map('map',{attributionControl: false}).setView([-0.316, -78.44], 14)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map)

  //Iniciacion de icono personalizado

  const restaurantIcon = L.icon({
    iconUrl: 'iconmap.png',   // debe estar en /public
    iconSize: [40, 40],                 // tamaño del icono
    shadowSize: [50, 50],               // tamaño de la sombra
    iconAnchor: [20, 40],               // centro inferior del icono
    popupAnchor: [0, -40]               // popup se abre arriba
  });
  // Cargar tus restaurantes desde JSON
  const data = restaurantData.value

  data.forEach(rest => {
    L.marker([rest.lat, rest.lng], {icon: restaurantIcon})
      .addTo(map)
      .bindPopup(`
        <b>${rest.name}</b><br>
        📍 ${rest.direction}<br>
        ☎️ ${rest.cell}
      `)
  })
})
</script>

<style scoped>

</style>
