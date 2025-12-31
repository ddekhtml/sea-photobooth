<script setup>
import LigthAnimation from './components/LigthAnimation.vue';
import Background from './components/Background.vue';

</script>

<template>
    <!-- <Animation />  -->
    <div class="relative flex w-screen h-screen">
        <div class="flex">
            <Background class="absolute z-0" />
            <LigthAnimation class="absolute z-20" />
            <div  style="text-shadow: 4px 4px 10px #005b80;" class="flex top-2/7 left-0 right-0 items-center justify-center absolute z-10 text-white text-shadow-red-900 text-shadow-6xl lg:text-9xl text-8xl font-bold">
                <p class="">
                    Univday 11.0
                </p>
            </div>
            <router-link :to="{ name: 'photo' }" class="absolute z-0">
                <div class="relative w-screen h-screen">
                    <p class="absolute lg:text-5xl text-3xl flex items-center justify-center right-0 left-0 z-20 text-brown-text hover:text-yellow-900 font-bold translate-y-115 lg:translate-y-101 xl:translate-y-98 xl:text-6xl">start</p>
                    <img src="./assets/bg/UNIVDAY 11.0 (1).png" class="absolute z-10 translate-y-45 lg:translate-y-0 xl:-translate-y-35">
                </div>
            </router-link>
        </div>
    </div>
    
</template>