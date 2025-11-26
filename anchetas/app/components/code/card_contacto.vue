<script setup>
import {useVentaStore} from "~/store/venta"
import { UseProductStore } from "~/store/productos";

const {car_anchetas,car_prod} = UseProductStore()
 
const props = defineProps(["name","number"])



const {send_message} = useVentaStore()

</script>

<template>
<div class=" flex justify-between bg-white rounded-full py-2 px-2 w-full items-center">
        <p class="ml-2">{{ name }}</p>
        <button class="text-white bg-color-principal px-2 py-1 rounded-full" @click="send_message(car_anchetas,car_prod,number) "> cotizar pedido </button>
    </div>
</template>