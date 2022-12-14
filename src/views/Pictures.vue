<script setup>
import Spinner from '../components/Spinner.vue';
import ListItem from '../components/ListItem.vue';
</script>
<template>
    <div class="my-4">
        <h2 class="font-bold text-8xl text-center text-cyan-400">görseller</h2>
    </div>

    <div>
        <div class="flex justify-between mb-2">
            <h2 class="text-left text-slate-200 font-bold text-lg">popüler görseller</h2>

            <!-- <span v-if="!show" @click="show = !show" class="bg-cyan-500 px-4 rounded-full text-white cursor-pointer hover:bg-cyan-700">
                component yükle
            </span> -->

        </div>

        <Suspense>

            <template #default>
                <ListItem :size=250 /> 
            </template>

            <template #fallback>
                <Spinner /> 
            </template>

        </Suspense>

    </div>

</template>
<style scoped>

</style>