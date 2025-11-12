<template>
    <div class="container-parish-ru">
        <div class="container-img">
            <slot name="context"></slot>
        </div>
        <div class="container-option">
            <slot name="option"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.container-option{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 0.5rem;
}

.container-img{
    padding: 3rem;
    margin-bottom: -3rem;
}

</style>