<template>
    <div>
        <img class="img-frame" :src="frame" alt="Frame Image"/>
    </div>
</template>

<script setup>

defineProps({
    frame: {
        type: String,
        required: true
    }
})

</script>

<style scoped>

.img-frame{
    width: 100%;
    height: auto;
    border-radius: 5rem;
}


</style>