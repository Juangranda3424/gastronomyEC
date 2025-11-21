<template>
  <div>
    <div id="map" style="width: 100%; margin-bottom: 1rem;"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

onMounted(() => {
  // Crear mapa
  const map = L.map("map",{attributionControl: false}).setView([-0.34, -78.45], 12);

  // Capa base
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap",
  }).addTo(map);
});
</script>
