<script setup >
import Coral from './Coral.vue';

</script>

<template>
    <div class="flex relative h-screen w-screen overflow-hidden">
        <img
        src="../assets/bg/full.png"
        alt=""
        class="absolute object-[25%_75%] w-full h-full object-cover z-0"
        />
        <img class="object-cover object-bottom w-full h-full absolute z-2" src="../assets/bg/half.png" alt="">
        <Coral class="absolute z-10" />
    </div>
    
</template>