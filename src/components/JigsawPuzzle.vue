<template>
  <div class="puzzle-container">
    <div class="container-text">
          <h1 class="font-paragraph" style="color: white;">{{ $t('label.label3') }}</h1>
    </div>
    <div class="container-img-puzzle">
        <img :src="game" width="50%"  height="50%">
    </div>
        <div :id="id" class="puzzle-area container-puzzle" ></div>
    </div>
    <div v-if="solved" style="display: flex; justify-content: center; align-items: center; background-color: gold; border-radius: 2rem; margin-top: 2rem; padding: 2rem;">
        <h1 class="font-title">{{ $t('label.label4') }}</h1>
        <i class="pi pi-verified" style="font-size: 10rem; color: purple;"></i>
    </div>
</template>

<script setup>
import headbreaker from "headbreaker";
import game from "@/assets/chef.png";
import { onMounted, ref } from "vue";

const solved = ref(false);

const props = defineProps({
  image: { type: String, required: true },
  id: { type: String, default: "puzzle" },
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

</style>
