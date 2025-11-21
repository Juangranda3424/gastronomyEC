<!-- <ButtonLenguage
    style="margin-top: 0.5rem; margin-bottom: 2rem; margin-left: 0.5rem;"
/> -->
<template>
    <p class="title-home">
        <span>{{ $t('title.label1') }}</span><br/>
        <span>{{ $t('title.label2') }}&nbsp;</span>
        <span style="font-family: 'Gadey';">{{ $t('title.label3') }}</span>
    </p>
    <div class="container-home center-ripple">
        
        <!-- círculos expansivos -->
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <FrameButton 
            :img1="meaningImg"
            :img2="monumentsImg"
            :onPressRight="items[0].command" 
            :onPressLeft="items[1].command"
            :text1="$t('meaning.title')"
            :text2="$t('monuments.title')"
        />

        <MapImage />

        <FrameButton 
            :img1="parishesImg"
            :img2="reviewImg"
            :onPressLeft="items[2].command" 
            :onPressRight="items[3].command"
            :text1="$t('parishes.title')"
            :text2="$t('review.title')"
            :reverse="true"
        />

        <FooterComponent :footer="Footer" />
</div>
</template>


<script setup>
import ButtonLenguage from '@/components/ButtonLanguage.vue';
import FrameButton from '@/components/FrameButton.vue';
import router from '@/router/router';
import meaningImg from '@/images/home/meaning.png';
import monumentsImg from '@/images/home/monument.png';
import parishesImg from '@/images/home/parishes.png';
import reviewImg from '@/images/home/review.png';
import Footer from '@/assets/footer.svg';
import FooterComponent from '@/components/Footer.vue';
import MapImage from '@/components/MapImage.vue';


const items = [
    {
        command: () => {
            router.push('/monuments');
        },
    },
    {
        command: () => {
            router.push('/meaning');
        },
    },    
    {
        command: () => {
            router.push('/parishes');
        },
    },
    {
        command: () => {
            router.push('/review');
        },
    },
];

</script>

<style scoped>

.container-home{
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    align-content: space-between;

}

.center-ripple {
  position: relative;
  overflow: hidden;
}

.center-ripple span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 4px solid rgba(80, 60, 150, 0.25);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 10s infinite;
}

/* Animación de onda */
@keyframes ripple {
  0% {
    width: 20px;
    height: 20px;
    opacity: 0.9;
  }
  100% {
    width: 1400px;  /* qué tan lejos llega */
    height: 1400px;
    opacity: 0;
  }
}

/* delays para tener muchas ondas */
.center-ripple span:nth-child(1)  { animation-delay: 0s; }
.center-ripple span:nth-child(2)  { animation-delay: 2s; }
.center-ripple span:nth-child(3)  { animation-delay: 4s; }
.center-ripple span:nth-child(4)  { animation-delay: 6s; }
.center-ripple span:nth-child(5)  { animation-delay: 8s; }
.center-ripple span:nth-child(6)  { animation-delay: 10s; }
.center-ripple span:nth-child(7)  { animation-delay: 12s; }
.center-ripple span:nth-child(8)  { animation-delay: 14s; }
.center-ripple span:nth-child(9)  { animation-delay: 16s; }
.center-ripple span:nth-child(10) { animation-delay: 17s; }




.title-home{
    color: rgb(213,142,26); 
    font-size: 4rem; 
    text-align: start; 
    margin-left: 2rem; 
    font-weight:500;
    margin-top: 0px;
    margin-bottom: 0px;
}

</style>