<script setup>
const defindeprops = defineProps(['id','name'])
</script>

<template>
   
<div class="bg-red-800 max-w-28 rounded-lg overflow-hidden p-1">
    <div class="flex rounded-lg bg-white overflow-hidden">
        <img :src="`https://storage.googleapis.com/prod-images-lndl/${id}.png`" class="max-w-full" alt="">
    </div >
    <p class="text-white font-medium text-center">{{ name }}</p>
    
</div>
</template>