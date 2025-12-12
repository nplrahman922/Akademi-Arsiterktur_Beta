<script setup>
import logoSrc from '@/Icon/logo.png';
import Instagram from '@/Icon/Instagram.vue';
import Mail from '@/Icon/Mail.vue';
import Whatsapp from '@/Icon/Whatsapp.vue';
</script>

<template>
  <footer class="bg-neutral-950 text-neutral-400 font-mono border-t border-neutral-900">
    <div class="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-12">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div class="flex flex-col items-start">
          <a href="#">
            <img :src="logoSrc" class="w-24 md:w-28" alt="Logo Akademi Arsitektur">
          </a>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-widest text-sm mb-4">Navigasi</h3>
          <ul class="space-y-3 text-sm">
            <li><RouterLink to="/Home" class="hover:text-amber-500 transition-colors">Home</RouterLink></li>
            <li><RouterLink to="/TentangKami" class="hover:text-amber-500 transition-colors">Tentang Kami</RouterLink></li>
            <li><RouterLink to="/PaketKelas" class="hover:text-amber-500 transition-colors">Paket Kelas</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-widest text-sm mb-4">Legal</h3>
          <ul class="space-y-3 text-sm">
            <li><RouterLink to="/404" class="hover:text-amber-500 transition-colors">Kebijakan Privasi</RouterLink></li>
            <li><RouterLink to="/404" class="hover:text-amber-500 transition-colors">Syarat & Ketentuan</RouterLink></li>
            <li><RouterLink to="/404" class="hover:text-amber-500 transition-colors">Pusat Bantuan</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-widest text-sm mb-4">Hubungi Kami</h3>
          <ul class="space-y-4 text-sm">

            <li class="flex items-center gap-3">
              <Instagram class="w-5 h-5 text-white" />
              <a href="https://instagram.com/akademiarsitek.id" target="_blank" class="hover:text-amber-500 transition-colors">
                : akademiarsitek.id
              </a>
            </li>

            <li class="flex items-center gap-3">
              <Mail class="w-5 h-5 text-white" />
              <a href="mailto:akademiarsitek@gmail.com" class="hover:text-amber-500 transition-colors break-all">
                : akademiarsitek@gmail.com
              </a>
            </li>

            <li class="flex items-center gap-3">
              <Whatsapp class="w-5 h-5 text-white" />
              <a href="https://wa.me/6285804069705" target="_blank" class="hover:text-amber-500 transition-colors">
                : 085804069705
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2025 Akademi Arsitektur ID. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>