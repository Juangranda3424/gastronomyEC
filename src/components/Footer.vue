<template>
    <div class="footer">
            <img :src="footer" alt="Footer Image"/>
    </div>
</template>

<script setup>

defineProps({
    footer: {
        type: String,
        required: true
    }
})

</script>

<style scoped>

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.footer img {
    width: 30%;
    height: auto;
}

</style>