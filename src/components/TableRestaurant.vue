<template>
    <DataTable :value="restaurantData" showGridlines style="width: 100%;">
        <template #header>
            <h1 class="font-title color-title">
                {{ restaurantName }}
            </h1>
        </template>
        <Column field="name">
            <template #header>
                <h1 class="font-title color-text">{{ t('restaurants.title1') }} </h1>
            </template>
            <template #body="slotProps">
                <p class="font-paragraph">{{ slotProps.data.name }}</p>
            </template>
        </Column>
        <Column field="price">
            <template #header>
                <h1 class="font-title color-text">{{ t('restaurants.title2') }}</h1>   
            </template>
            <template #body="slotProps">
                <p class="font-paragraph">{{ formatCurrency(slotProps.data.price) }}</p>
            </template>
        </Column>
        <Column field="description">
            <template #header>
                <h1 class="font-title color-text">{{ t('restaurants.title3') }}</h1>   
            </template>
            <template #body="slotProps">
                <p class="font-paragraph">{{ formatCurrency(slotProps.data.description) }}</p>
            </template>        
        </Column>
    </DataTable>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()

const props = defineProps({
  name: String
})

const formatCurrency = (value) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

const restaurantData = computed(() => tm(`restaurants.${props.name}.restaurant`))
const restaurantName = computed(() => t(`restaurants.${props.name}.name`))

</script>

<style scoped>

.color-text{
    color: black;
}

.color-title{
    color: white;
}


:deep(.p-datatable-header) {
    background-color: black;
}

.font-paragraph{
    font-size: 2rem;
}

.font-title{
    font-size: 3rem;
}

</style>

