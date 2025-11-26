<script setup>
import { UseProductStore } from "~/store/productos";

const ProductStore = UseProductStore()


const defindeprops = defineProps(['id','name','x'])
</script>

<template>
   
<div class="bg-red-800 max-w-28 rounded-lg overflow-hidden p-1">
    <div class="flex rounded-lg bg-white overflow-hidden">
        <img :src="`https://storage.googleapis.com/prod-images-lndl/${id}.png`" class="max-w-full" alt="">
    </div >
    <p class="text-white font-medium text-center">{{ name }}</p>
    
    <button @click="ProductStore.add_to_car_prod(x)" class="  flex items-center  justify-center bg-color-secundario w-full rounded-md">
        <span class=" font-poppins text-white font-bold">al carrito</span>
    </button>

</div>
</template>