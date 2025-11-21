<template>
    <ContainerPage :title="$t('meaning.title')" :bg="`url(${meaningbackground})`" >
        <template #context>
            <DivContainer>
                <template #frame>
                    <div style="margin-left: -10%;">
                        <div>
                            <p class="title1-meaning">&nbsp;{{ $t('meaning.parttitle.title1') }}&nbsp;</p>
                            <p class="title2-meaning">{{ $t('meaning.parttitle.title2') }}</p>    
                        </div>
                    </div>
                </template>
            </DivContainer>
            <DivContainer>
                <template #frame>
                    <div  style="margin-top: 40%;">
                        <div>
                            <p class="title2-meaning title2-meaning-color">{{ $t('meaning.partsubtitle.title1') }}</p>
                            <p class="title2-meaning title-meaning-start" style="font-size: 6.7rem;">{{ $t('meaning.partsubtitle.title2') }}</p>
                            <p class="title2-meaning title2-meaning-color" >{{ $t('meaning.partsubtitle.title3') }}</p>
                            <p class="title2-meaning title-meaning-start">{{ $t('meaning.partsubtitle.title4') }}</p>
                        </div>
                    </div>
                </template>
            </DivContainer>
            <div class="container-description animate-text">
                <p class="description-meaning">{{ $t('meaning.description') }}</p>
            </div>
            <div class="container-meaning-img">
                <div class="img-meaning">
                    <div>
                        <img :src="faceimg" alt="rock" style="width: 70%;" class="animate-text">
                    </div>
                    <div>
                        <img :src="plusimg" alt="plus" style="width: 40%;">
                    </div>
                    <div>
                        <img :src="faceimg" alt="face" style="width: 70%;" class="animate-frame">
                    </div>
                </div>
                <div class="container-text-meaning">
                    <div>
                        <p class="title2-meaning text-meaning-img animate-text">{{ $t('meaning.elements.rumi') }}</p>
                    </div>
                    <div>
                        <p class="title2-meaning text-meaning-img animate-frame">{{ $t('meaning.elements.ñahui') }}</p>
                    </div>
                </div>
            </div> 
        </template>
    </ContainerPage>
</template>

<script setup>
import meaningbackground from '@/assets/background/meaning.jpg';
import DivContainer from '@/components/DivContainer.vue';
import ContainerPage from '@/components/ContainerPage.vue';
import faceimg from '@/assets/meaning/face.svg';
import plusimg from '@/assets/meaning/plus.svg';
</script>

<style scoped>

.title1-meaning {
    color: white; 
    background-color: rgb(213,142,26); 
    margin: 0; 
    font-size: 2.5rem;
    text-align: center;
}

.title2-meaning{
    color: white; 
    font-size: 4rem; 
    margin: 0;
    text-align: center;

}

.title2-meaning-color{
    color: rgb(213,142,26); 
    text-align: start;
    font-weight: 500;
    margin-top: -3rem;
    font-size: 6rem; 
}

.title-meaning-start{
    text-align: start;
    font-weight: 500;
    margin-top: -2.5rem;
    font-size: 4.5rem;
}

.description-meaning{
    color: white; 
    font-size: 2rem; 
    margin: 0;
    text-align: center;
    margin-top: 5rem;
}

.container-meaning-img{
    text-align: center; 
    margin-top: 7.5rem; 
    margin-bottom: 7.5rem;
}

.img-meaning{
    display: flex; 
    justify-content: center; 
    align-items: center;
}

.container-text-meaning{
    display: flex; 
    justify-content: space-evenly; 
    gap: 30%;
}

.text-meaning-img{
    font-family: 'Gadey' !important;
}

</style>