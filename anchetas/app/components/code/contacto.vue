<script setup>
import { useVentaStore } from '~/store/venta';
import card_contacto from './card_contacto.vue';

const {vendedores} = useVentaStore()

</script>

<template>

<div class="flex flex-col items-center p-2 mb-10">



    <img src="https://storage.googleapis.com/prod-images-lndl/taller_de_licores/titulos/COTIZA.png" class="xl:px-64">
<p class=" text-center text-white mb-2">Contáctate con tu vendedor para finalizar tu compra navideña.</p>
<div class="flex flex-col gap-3 border-2 border-dashed border-color-secundario mx-6 w-full md:w-[60%] justify-center items-center rounded-lg p-3">
    <card_contacto v-for="vend in vendedores" :key="vend"
    :name="vend.name"
    :number="vend.number"
    ></card_contacto>
</div>

</div>


</template> 