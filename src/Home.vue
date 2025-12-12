<script setup>
import latar from '@/Icon/LatarHome.jpg'
import logo from '@/Icon/Logo.vue'
import Button from "@/components/Button.vue";
import plane from "@/Icon/Send.vue";
import Applayout from "@/components/Applayout.vue";
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
      <logo class="w-48 h-48 md:w-96 md:h-96"/>
    </div>
  </div>

  <div class="px-6 gap-y-6 text-center">
    <h1 class="pt-8 font-RedHat text-neutral-200 text-xl md:text-4xl max-w-3xl mx-auto tracking-widest leading-loose">
      Platform Pembelajaran Arsitektur Berbasis Komunitas
    </h1>

    <p class="mt-8 md:mt-12 text-neutral-300 text-justify text-sm md:text-xl max-w-5xl mx-auto tracking-wider leading-relaxed drop-shadow-md">
      "Akademi Arsitek adalah platform yang dirancang untuk membantu mahasiswa dan pemula menguasai desain, teknis bangunan, dan software arsitektur secara praktis. Bersama kami, Anda akan siap membangun portofolio dan meniti karier di dunia arsitektur dengan lebih percaya diri"
    </p>
  </div>

  <h1 class="text-center text-neutral-100 font-RobotoMono font-bold text-lg md:text-3xl max-w-xl mx-auto tracking-wider py-10 md:py-20 px-4">
    Mengapa Memilih <br class="md:hidden"> Akademi Arsitek ?
  </h1>

  <div class="max-w-4xl mx-auto pb-10 md:pb-20 px-6">
    <ul class="list-disc text-neutral-400 text-sm md:text-base space-y-6">
      <li>
        Mentor Berpengalaman Pembelajaran didampingi oleh Studio Mentor berpengalaman yang siap membimbing Anda secara aplikatif dan relevan dengan dunia profesional.
      </li>
      <li>
        Waktu & Tempat Fleksibel Proses belajar dirancang agar nyaman dan mudah diakses, menyesuaikan dengan kesepakatan waktu dan tempat Anda.
      </li>
      <li>
        Garansi Pasti Bisa Kami memberikan jaminan uang kembali 100% jika mentor tidak menjalankan perannya secara profesional.
      </li>
      <li>
        Gratis Mengulang Seumur Hidup Jika Anda merasa belum sepenuhnya memahami materi, Anda dapat mengikuti kembali kelas terjadwal hanya dengan membayar biaya administrasi.
      </li>
      <li>
        Komunitas Solid Lebih dari sekadar tempat belajar, kami adalah komunitas untuk memperluas koneksi dengan sesama arsitek muda di seluruh Indonesia.
      </li>
    </ul>
  </div>

  <div class="max-w-3xl mx-auto px-6 pb-10">
    <h1 class="text-center text-neutral-100 font-RobotoMono font-bold text-sm md:text-xl tracking-widest leading-loose">
      “ Kami menyediakan tiga kelas progresif—Core, Build,
      dan Pro—yang dirancang sesuai kebutuhan dan tingkat kemampuan Anda. ”
    </h1>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 max-w-xl mx-auto px-10 pb-20 gap-y-4 md:gap-x-8 font-mono">

    <div class="justify-start">
      <ul class="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2">
        <li>SketchUp Program</li>
        <li>AutoCAD Program</li>
      </ul>
    </div>

    <div class="justify-start">
      <ul class="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2">
        <li>Revit & BIM Program</li>
        <li>Render Program</li>
      </ul>
    </div>
  </div>

  <div class="mt-8 md:mt-12 w-full px-6 flex justify-center mb-20">

      <Button class="w-full max-w-3xl py-3 md:py-4 rounded-lg transform transition hover:scale-105 flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
        <RouterLink to="/Daftar" class="text-white">
          <span class="text-lg md:text-xl text-neutral-100 font-bold tracking-wide font-mono">
          Berlangganan
          </span>
          <plane class="w-5 h-5 md:w-6 md:h-6 inline-block ml-2 text-white"/>
        </RouterLink>
      </Button>

  </div>

  </Applayout>
</template>