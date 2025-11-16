<template>
    <ContainerPage
        :title="
            props.title
            .replace(/^Parroquia\s+/i, '')
            .replace(/^Parish\s+/i, '')
            .replace(/^Llakta\s+/i, '')
            + (props.titlemeals ? ' - ' + props.titlemeals : '')
        "     
    >
        <template #context>
                <div style="width: 100%;">
                    <DataView :value="props.meals" layout="list">
                        <template #list="slotProps">
                            <div class="container-grid">
                                <div v-for="(item, index) in slotProps.items" :key="index" class="container-column">
                                    <div style="height: auto;">
                                        <div class="font-title-meals">{{ item.name }}</div>
                                    </div>
                                    <div>
                                        <div>
                                            <img :src="props.image[index]" style="width: 100%"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <ButtonOption :label="$t('button.label1')" :fun="()=>goRouter(`/puzzle?name=${props.mealsname[index]}&title=${item.name}`)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </DataView>
                </div>
        </template>
    </ContainerPage>

</template>

<script setup>

import DataView from 'primevue/dataview';
import ButtonOption from '@/components/ButtonOption.vue';
import ContainerPage from '@/components/ContainerPage.vue';
import { goRouter } from '@/helpers/utils';


const props = defineProps({
    meals: {
        type: Array,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    titlemeals: {
        type: String,
        required: true
    },
    mealsname: {
        type: Array
    }
})


</script>

<style scoped>

.container-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    width: 100%;
    gap: 2rem;
}

.container-column {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 10px;
    border: 1px solid #00000042;
    border-radius: 20px;
}

.p-button{
    font-size: 3rem;
}

.font-title-meals{
    font-family: 'Pink Chicken' !important; 
    text-align: center !important; 
    font-size: 3rem; 
    color: black;
}

.container-font-paragraph-meals{
    display: flex; 
    justify-content: center;
}

</style>

