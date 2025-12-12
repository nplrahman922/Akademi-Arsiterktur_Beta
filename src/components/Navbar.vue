<script setup>
import logoSrc from '@/Icon/logo.png';
import Hamburger from '@/Icon/Hamburger.vue';
import login from '@/Icon/login.vue';


import { ref } from 'vue';

const isMenuMobileOpen = ref(false);
function toggleMenuMobile() {
    isMenuMobileOpen.value = !isMenuMobileOpen.value;
}
</script>

<template>
    <div class="bg-stone-950 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 font-alan-sans font-bold text-lg relative z-10">

        <nav class="flex justify-between items-center py-4">
            <div>
                <RouterLink to="/">
                    <img :src="logoSrc" alt="logo" class="w-20">
                </RouterLink>
            </div>

            <div class="hidden md:flex items-center gap-10 font-red-hat-mono font-normal tracking-wider">
                <RouterLink
                    to="/Home"
                    class="transition-transform text-neutral-100 hover:text-amber-300 hover:scale-110"
                    >
                    Home
                </RouterLink>
                <RouterLink
                    to="/TentangKami"
                    class="transition-transform text-neutral-100 hover:text-amber-300 hover:scale-110"
                    >
                  Tentang Kami
                </RouterLink>
                <RouterLink
                    to="/PaketKelas"
                    class="transition-transform text-neutral-100 hover:text-amber-300 hover:scale-110"
                    >
                  Paket Kelas
                </RouterLink>
                <RouterLink
                  to="/AbouthMe"
                  class="transition-transform text-neutral-100 hover:text-amber-300 hover:scale-110">
                  About Me
                </RouterLink>

            </div>
            <div>
                <RouterLink  to="/Login" class="hidden md:block text-neutral-300 hover:text-white hover:scale-110 transition-transform">
                    <login/>
                </RouterLink>
                <button @click="toggleMenuMobile" class="md:hidden text-stone-300 hover:text-white">
                    <Hamburger/>
                </button>
            </div>

        </nav>

      <div
          v-if="isMenuMobileOpen"
          @click="toggleMenuMobile"
          class="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
      ></div>

      <div
          class="fixed top-0 right-0 h-full w-64 bg-stone-950 border-l border-stone-800 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden"
          :class="isMenuMobileOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex justify-end p-5">
          <button @click="toggleMenuMobile" class="text-stone-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex flex-col px-6 gap-6 mt-2 font-red-hat-mono text-lg tracking-wide">
          <RouterLink to="/Home" class="block pb-2 text-stone-300 hover:text-amber-300 border-b border-stone-800 transition-colors">
            Home
          </RouterLink>
          <RouterLink to="/Tentangkami" class="block pb-2 text-stone-300 hover:text-amber-300 border-b border-stone-800 transition-colors">
            Tentang Kami
          </RouterLink>
          <RouterLink to="/PaketKelas" class="block pb-2 text-stone-300 hover:text-amber-300 border-b border-stone-800 transition-colors">
            Paket Kelas
          </RouterLink>
          <RouterLink to="/Daftar" class="block pb-2 text-stone-300 hover:text-amber-300 border-b border-stone-800 transition-colors">
            Log In
          </RouterLink>
          <RouterLink to="/AbouthMe" class="block pb-2 text-stone-300 hover:text-amber-300 border-b border-stone-800 transition-colors">
            Abouth Me
          </RouterLink>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
