<script setup>
import card_producto from "../components/code/card_ancheta.vue"
import card_p from "../components/code/car_product.vue"
import {UseProductStore} from "../store/productos"
import header from "../components/assets/imgs/header.png"
import { computed, ref } from "vue";


const {products} = UseProductStore()



const search_value = ref('')

const search = computed( ()=> products.productos.filter(p => p.full_name.toLowerCase().includes(search_value.value.toLowerCase())) )


const fn = ref(0)
const ln = ref(6)

const sumar = ()=> {
    fn.value+=6 
    ln.value+=6
   
}

const restar = ()=> {
    fn.value-=6 
    ln.value-=6
    
}



</script>

<template>
 

  
<main class="flex">
    <img :src="header" alt="">
    <img src="" alt="">
</main>

<div class="pb-3  px-3 border-b-2 border-color-secundario border-dashed">
    <h2 class="text-center text-white font-h1 text-4xl"> ANCHETAS TIPO COFRES</h2>
</div>


<card_producto v-for="product in products.cofres" key="product"
:name="product.name"
:photo="product.id"
:arreglo="product.products"
:price="product.price"
:x="product"
></card_producto>

<div class="pb-3 mt-9 px-3 border-b-2 border-color-secundario border-dashed">
    <h2 class="text-center text-white font-h1 text-4xl"> ANCHETAS TIPO MALETIN</h2>
</div>

<card_producto v-for="product in products.maletines" key="product"
:name="product.name"
:photo="product.id"
:arreglo="product.products"
:price="product.price"
></card_producto>

<div class="flex flex-col justify-center items-center">
    <div class="pb-3 mt-9  px-3   border-dashed">
        <h2 class="text-center text-white font-h1 text-4xl">PERSONALIZA TU ANCHETA</h2>
    </div>

    <input v-model="search_value" class=" border-color-secundario border-2 border-double  w-[80%] rounded-full h-10 text-center text-color-principal" placeholder="Encuentra productos para tu ancheta" type="text" name="" id="">
</div>

<div class="flex flex-wrap justify-center gap-2 mt-5"> 
<card_p v-for="p in search.slice(fn,ln)" :key="p"
:id="p.id"
:name="p.name"
></card_p>

</div>

<div class=" flex gap-3 items-center justify-center w-full p-4 mb-10">
    <button v-if="fn>1" @click="restar" class="bg-color-secundario px-3 rounded-full">
        Atras
    </button>
    <button v-if="ln<search.length" @click="sumar" class="bg-color-secundario px-3 rounded-full">
        Siguiente
    </button>
</div>


</template>

<style>
body{
    background: #2b0008;
}
</style>