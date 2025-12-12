<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center">

    <div class="mb-4 select-none">
      <h1 class="font-RubikB text-white text-[120px] md:text-[200px] leading-none tracking-wide">
        404
      </h1>
    </div>

    <div class="space-y-4 max-w-lg mx-auto z-10 relative">
      <h2 class="text-sky-500 text-lg md:text-xl font-medium tracking-wide">
        404 Page Not Found
      </h2>

      <p class="text-gray-300 text-sm md:text-base leading-relaxed font-mono">
        Pages Not Found , Admin Sedang Turu , Ayo bantu support Admin <br class="hidden md:block" />
        dalam pengembangan pages - pages baru
      </p>

      <div class="pt-6">
        <RouterLink
            to="/"
            class="text-gray-400 hover:text-white transition-all duration-300 text-sm border-b border-transparent hover:border-white pb-1"
        >
          Kembali Ke halaman-utama
        </RouterLink>
      </div>
    </div>

  </div>
</template>

<style scoped>


</style>