<script setup>
import star from "../assets/imgs/estrella.png"

const props = defineProps(["name", "photo", "arreglo", "price" ])
</script>

<template>

<div class=" flex border-b-2 border-color-secundario justify-center items-center border-dashed py-8 px-2 relative">

    <div class="absolute right-4 bottom-[-6%] flex items-center  justify-center bg-color-secundario px-10 py-2 rounded-full">
        <span class="text-xl font-poppins text-white font-bold">${{ price }}</span>
    </div>

    <div class=" h-full max-w-[50%] px-2 relative">
        <img :src="`https://storage.googleapis.com/prod-images-lndl/taller_de_licores/${photo}.png`" class="w-full z-50 relative" alt="">
        <div class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-48 bg-color-secundario/40 blur-lg rounded-full z-10 "></div>
    </div>

    <div class="">
        <h1 class="text-white font-h1 text-2xl mb-1">{{ name }}</h1>

        <div class="text-white flex flex-col gap-2">
            
            <div class="flex gap-1" v-for="a in arreglo" :key="a">
                <div class="items-center  flex justify-center">
                    <img :src="star" alt="" class=" max-w-4 max-h-4">
                </div>
                <p class="text-sm">
                   {{ a }}
                </p>
            </div>

        </div>
    </div>

</div>

</template>