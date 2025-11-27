<script setup>
import { UseProductStore } from '~/store/productos';
const {car_anchetas,car_prod} = UseProductStore()

const visible = ref(false)

const productstore = UseProductStore()

const isvisibleactive = ()=>{
     
    !visible.value ? visible.value = true : visible.value  = false
    console.log(visible.value)

}



</script>

<template>
<div class="flex fixed bottom-5 right-5 gap-2  items-end z-50">

    <Transition name="visible">

         

        <div class="bg-color-principal p-3 rounded-md flex flex-col border-2 border-white" v-if="visible">
            
            <div class="w-60 h-60 flex justify-center items-center" v-if="car_anchetas.length < 1 && car_prod.length < 1 ">
                <p class="text-white text-center text-3xl">Carrito vácio</p>
            </div>

            <ul class="flex gap-2 flex-col justify-center  ">
                <li class="bg-white flex justify-center items-center rounded-full px-3 py-1 gap-2" v-for="a in car_anchetas"
                :key="a">
                     <p class=" text-center">{{ a.name }}</p>
                     <!-- <button @click="productstore.remove_from_car(a.id , productstore.car_anchetas )" class="bg-color-principal text-white px-3 rounded-full ">eliminar</button> -->
                </li>
            </ul>

            <ul class="flex gap-2 flex-col justfy-betwecenter  ">
                <li class="bg-white flex justify-center items-center  rounded-full px31 py-1 gap-2" v-for="a in car_prod"
                :key="a">
                     <p class=" text-center">{{ a.name }}</p>


                     <!-- <button @click="" class="bg-color-principal text-white px-3 rounded-full ">eliminar</button> -->
                </li>
            </ul>
        </div>

    
        
    </Transition>

   

    <button @click="isvisibleactive" class=" z-10 bg-color-secundario  rounded-full  p-3 flex w-16 h-16 justify-center items-center">
        
     <img src="https://images.icon-icons.com/1097/PNG/512/1485477061-cart_78585.png" class=" saturate-200 grayscale brightness-200" alt="">
    </button>

</div>
</template>

<style>

.visible-enter-from{
opacity: 0;
transform: translateX(50px);
}

.visible-enter-to{
opacity: 1;
transform: translateX(0px);
}



.visible-leave-from{
opacity: 1;
transform: translateX(0px);
}

.visible-leave-to{
opacity: 0;
transform: translateX(50px);
}


.visible-enter-active,
.visible-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
</style>