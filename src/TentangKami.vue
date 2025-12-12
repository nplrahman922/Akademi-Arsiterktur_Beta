<script setup>
import latar from "@/Icon/LatarTentangKami.png";
import Button from "@/components/Button.vue";
import Whatsapp from "@/Icon/Whatsapp.vue";
import Send from "@/Icon/Send.vue";
import Applayout from "@/components/Applayout.vue";

const openWhatsApp = () => {
  const phoneNumber = '6285804069705';
  const pesan = 'Halo, Saya ingin mencari tahu tentang Akademi Arsitektur!!';
  const encodedMessage = encodeURIComponent(pesan);
  const waURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waURL, '_blank');
}

</script>

<template>

  <Applayout>
    <div class="relative">

      <img
          :src="latar"
          alt="banner"
          class="w-screen h-[50vh] object-cover
               [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"
      >

      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-4xl font-Spirax text-neutral-100 tracking-wider"> Tentang Akademi Arsitek </h1>
      </div>

    </div>

    <div class="px-4 gap-y-6 text-center pb-20">
      <p class="mt-12 text-neutral-300 text-justify text-lg md:text-xl max-w-5xl mx-auto tracking-wider leading-relaxed drop-shadow-md">
        Akademi Arsitek adalah sebuah platform pembelajaran arsitektur yang didirikan berbasis komunitas. Misi kami adalah membantu mahasiswa dan para pemula untuk menguasai berbagai keahlian penting dalam dunia arsitektur, mulai dari desain konseptual, pemahaman teknis bangunan, hingga penguasaan software arsitektur secara praktis dan aplikatif.
      </p>
      <p class="mt-12 text-neutral-300 text-justify text-lg md:text-xl max-w-5xl mx-auto tracking-wider leading-relaxed drop-shadow-md">
        Kami percaya bahwa proses belajar harus fleksibel, relevan, dan mendukung pertumbuhan setiap individu. Oleh karena itu, kami menyediakan tiga tingkatan kelas yang progresif (Core, Build, dan Pro) untuk memastikan materi sesuai dengan tingkat kemampuan peserta. Dengan bimbingan dari Studio Mentor yang berpengalaman, Akademi Arsitek menjadi tempat yang tepat untuk mengasah skill, membangun portofolio yang kuat, dan mempersiapkan karier arsitektur dengan penuh percaya diri.
      </p>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-12">
      <h1 class="font-Annie text-white text-5xl text-center leading-snug">Cara Belajar</h1>
      <h1 class="font-Annie text-white text-5xl text-center"> Kami ?</h1>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 pb-20">
      <ul class="list-disc pl-5 text-neutral-400 text-md md:text-base space-y-4">
        <li>Praktis dan Aplikatif: Materi dirancang agar langsung bisa diterapkan untuk kebutuhan tugas kuliah maupun proyek profesional.</li>
        <li>Fleksibilitas Tinggi: Peserta dapat menyepakati jadwal dan lokasi belajar bersama mentor, menciptakan suasana belajar yang nyaman dan personal.</li>
        <li>Berbasis Komunitas: Kami mendorong interaksi dan kolaborasi antar peserta untuk saling bertukar ide dan memperluas jaringan profesional.</li>
      </ul>
      <div class="flex flex-col gap-10 items-center lg:items-end mt-4 lg:mt-0 font-mono">

        <div class="w-full max-w-sm text-center">
          <h3 class="text-lg text-neutral-100 font-bold mb-4 tracking-wider underline">Ingin Mendaftar?</h3>

          <Button class="flex items-center justify-center gap-2 w-full" >
            <RouterLink to="/Daftar" class="text-white">
              <div class="flex items-center gap-2">
                <span class="font-bold text-white tracking-wide">Daftar</span>
                <Send class="w-5 h-5 text-white"/>
              </div>
            </RouterLink>
          </Button>
        </div>

        <div class="w-full max-w-sm text-center">
          <h3 class="text-lg text-neutral-100 font-bold mb-4 tracking-wider underline">Hubungi Admin!</h3>

          <Button color="green" class="flex items-center justify-center gap-2 w-full" @click="openWhatsApp">
            <span class="font-bold text-white tracking-wide">Click</span>
            <Whatsapp class="w-5 h-5 text-white"/>
          </Button>
        </div>

      </div>
    </div>
  </Applayout>
</template>

<style scoped>

</style>