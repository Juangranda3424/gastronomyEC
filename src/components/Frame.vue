<template>
    <div>
        <img :src="frame" alt="Frame Image"/>
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

img{
    width: 96%;
    height: auto;
}


</style>