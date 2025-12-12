<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import WavesBackground from '@/components/WavesBackground.vue';
</script>

<template>
    <WavesBackground >
    <Navbar class="sticky top-0 z-50" />
    <main class="z-index-10">
        <slot />
    </main>
    <Footer class="bottom-0 z-50" />
    </WavesBackground>
</template>

<style scoped>

</style>
