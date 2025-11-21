<template>
  <div class="puzzle-container">
    <div class="container-text">
          <p class="font-paragraph" style="color: white;">{{ $t('label.label3') }}</p>
    </div>
    <div class="container-img-puzzle">
        <img :src="game" class="chef-img">
    </div>
        <div :id="id" class="puzzle-area container-puzzle" ></div>
    </div>
    <div v-if="solved" class="container-verficated">
        <h1 class="font-title">{{ $t('label.label4') }}</h1>
        <i class="pi pi-verified verified"></i>
    </div>
    <div v-if="solved" class="container-table">
      <TableRestaurant
        :name="props.name"
      />
    </div>
    <div v-if="solved" style="text-align: center;">
          <h1 class="font-paragraph title-instruction">{{ $t('label.label5') }}</h1>
        <div class="container-instruction">
          <img :src="ChefIntruction" class="chef-img">
          <div style="text-align: center;">
          <p class="font-paragraph">{{ $t('label.label6') }}</p>
          <p class="font-paragraph" >{{ $t('label.label7') }}</p>
          <p class="font-paragraph">{{ $t('label.label8') }}</p>
          </div>
        </div>
    </div>
    <div v-if="solved" class="container-table">
      <MapRestaurant
        :name="props.name"
      />
    </div>
</template>

<script setup>
import headbreaker from "headbreaker";
import ChefIntruction from "@/assets/chefinstruction.png"
import TableRestaurant from "@/components/TableRestaurant.vue";
import MapRestaurant from "@/components/MapRestaurant.vue";
import game from "@/assets/chef.png";
import { onMounted, ref } from "vue";

const solved = ref(false);

const props = defineProps({
  image: { type: String, required: true },
  id: { type: String, default: "puzzle" },
  name: { type: String, required: true}
});

let canvas;

const drawPuzzle = () => {
  const img = new Image();
  img.src = props.image;

  img.onload = () => {
    const container = document.getElementById(props.id);

    const createCanvas = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Determinar tamaño de piezas dinámicamente
      const desiredPieceSize = Math.floor(Math.min(width, height) / 2.5); // 4 piezas por dimensión aprox
      const cols = Math.floor(width / desiredPieceSize);
      const rows = Math.floor(height / desiredPieceSize);

      if (canvas) {
        container.innerHTML = ""; // limpiar canvas anterior
      }

      if(width < 768){
        canvas = new headbreaker.Canvas(props.id, {
            width,
            height,
            pieceSize: desiredPieceSize,
            proximity: 30, //La distancia que debe estar una pieza para se encajada con otra 
            borderFill: 10, //Borde de la pieza
            strokeWidth: 1.5,
            lineSoftness: 0.18,
            image: img,
            painter: new headbreaker.painters.Konva(),
        });
      }else{
        canvas = new headbreaker.Canvas(props.id, {
            width,
            height,
            pieceSize: desiredPieceSize,
            proximity: 30,
            borderFill: 30,
            strokeWidth: 1.5,
            lineSoftness: 0.18,
            image: img,
            painter: new headbreaker.painters.Konva(),
        });
      }

      canvas.adjustImagesToPuzzleHeight();
      canvas.autogenerate({
        horizontalPiecesCount: cols,
        verticalPiecesCount: rows
      });

      canvas.shuffle(0.8);
      canvas.attachSolvedValidator();
      canvas.onValid(() => {
        solved.value = true;
      });

      canvas.draw();
    };

    createCanvas();

    window.addEventListener("resize", () => {
      createCanvas();
    });
  };
};

onMounted(drawPuzzle);
</script>

<style>
.puzzle-container {
  width: 100%;
  display: block;
  text-align: center;
  margin-top: -2rem;
}

.puzzle-area {
  width: 100%;
  max-width: 100%;
  aspect-ratio: 4 / 3;
}

.container-text{

    background-color: black; 
    border-radius: 1rem; 
    padding: 1rem; 
    margin: 2rem;

}

.container-img-puzzle{
    width: 100%; 
    display: flex; 
    justify-content: start; 
    align-items: center; 
    margin-top: -8rem; 
}

.container-puzzle{
    width: 100%; 
    border: solid; 
    border-radius: 1rem; 
    background-color: grey;
}

.container-verficated{
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: gold; 
  border-radius: 2rem; 
  margin-top: 2rem; 
  padding: 2rem;
}

.container-table{
  display: flex; 
  align-items: center;
  width: 100%;
  margin-top: 3rem;
}

.container-instruction{
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border-radius: 1rem; 
  border: solid 2px; 
  padding: 0.5rem; 
}

.title-instruction{
  background-color: black; 
  color: white; 
}

.chef-img{
  height: 50%;
  width: 50%;
}

</style>
