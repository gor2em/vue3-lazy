<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Spinner from '../components/Spinner.vue'; // yüklenirken gösterilecek

const ListItem = defineAsyncComponent({
    loader: () => import("../components/ListItem.vue"),
    //loadingComponent: yükleme anında gösterilecek component
    //erorComponent: hata varsa gösterilecek component
    delay: 200,
    timeout: 3000,
    suspensible: true, //default: true
})

const show = ref(false); // component gösteriminde tetiklenecek.
</script>
<template>
    <div class="my-4">
        <h2 class="font-bold text-8xl text-center text-cyan-400">görseller</h2>
    </div>

    <div>
        <div class="flex justify-between mb-2">
            <h2 class="text-left text-slate-200 font-bold text-lg">popüler görseller</h2>

            <!--butona tıklanıldığında component aktif olacak-->
            <span v-if="!show" @click="show = !show" class="bg-cyan-500 px-4 rounded-full text-white cursor-pointer hover:bg-cyan-700">
                component yükle
            </span>

        </div>

        <Suspense v-if="show">

            <template #default>
                <ListItem :size=250 /> <!--resim boyutu componente gönderildi-->
            </template>

            <template #fallback>
                <Spinner /> <!--yükleme anında spinner gözükecek-->
            </template>

        </Suspense>

    </div>

</template>
<style scoped>

</style>