<script setup>
const props = defineProps({
    size: Number,
})
</script>
<template>
    <div class="flex justify-between gap-4 pb-12">
        <div class="flex flex-col gap-2" v-for="i in 6" :key="i">
            <img :src="`https://picsum.photos/${props.size}/${props.size}`" />
            <p class="text-cyan-400 text-center font-medium">resim {{ i }}</p>
        </div>
    </div>
</template>
<style scoped>

</style>