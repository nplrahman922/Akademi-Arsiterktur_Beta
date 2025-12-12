<script setup>
import latar from "@/Icon/LatarPaketKelas.png";
import CardConntent from "@/components/CardConntent.vue";
import Photosop from "@/Icon/Photosop.vue";
import Revit from "@/Icon/Revit.vue";
import Skechup from "@/Icon/Skechup.vue";
import Content1 from "@/Icon/Content1.png";
import Content2 from "@/Icon/Content2.png";
import Content3 from "@/Icon/Content3.png";
import Applayout from "@/components/Applayout.vue";

const pricingDataReguler = [
  {
    title: "SketchUp & AutoCAD 🛠️",
    details: [
      "✅ 6 Jam (± 3 Hari): Rp 299.000 (Core & Build) / Rp 399.000 (Pro)",
      "✅ 8 Jam (± 4 Hari): Rp 380.000 (Core & Build) / Rp 520.000 (Pro)",
      "✅ 10 Jam (± 5 Hari): Rp 460.000 (Core & Build) / Rp 630.000 (Pro)"
    ]
  },
  {
    title: "Revit & BIM 🗼",
    details: [
      "✅ 6 Jam (± 3 Hari): Rp 375.000 (Core & Build) / Rp 450.000 (Pro)",
      "✅ 8 Jam (± 4 Hari): Rp 480.000 (Core & Build) / Rp 575.000 (Pro)",
      "✅ 10 Jam (± 5 Hari): Rp 575.000 (Core & Build) / Rp 680.000 (Pro)"
    ]
  },
  {
    title: "Rendering & Photoshop 📷",
    details: [
      "✅ 6 Jam (± 3 Hari): Rp 450.000 (Core & Build) / Rp 570.000 (Pro)",
      "✅ 8 Jam (± 4 Hari): Rp 599.000 (Core & Build) / Rp 750.000 (Pro)",
      "✅ 10 Jam (± 5 Hari): Rp 750.000 (Core & Build) / Rp 950.000 (Pro)"
    ]
  }
];

const pricingDataPrivat = [
  {
    title: "Semua Materi (SketchUp, AutoCAD, Revit, Rendering) 📖",
    details: [
      "☑️ 6 Jam (± 3 Hari): Rp 599.000 (Core & Build) / Rp 689.000 (Pro)",
      "☑️ 8 Jam (± 4 Hari): Rp 780.000 (Core & Build) / Rp 899.000 (Pro)",
      "☑️ 10 Jam (± 5 Hari): Rp 950.000 (Core & Build) / Rp 1.150.000 (Pro)"
    ]
  }
];

const pricingDataBimbingan = [
  {
    title: "Bimbingan Privat (1-on-1) 👥",
    details: [
      "Sprint (1 Bulan): Rp 2.000.000",
      "Marathon (2 Bulan): Rp 3.800.000",
      "Semester (3 Bulan): Rp 5.500.000"
    ]
  },
  {
    title: "Bimbingan Kelompok (2-4 Anak) 🏛️",
    details: [
      "Sprint (1 Bulan): Rp 4.000.000",
      "Marathon (2 Bulan): Rp 7.300.000",
      "Semester (3 Bulan): Rp 10.000.000"
    ]
  }
];
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

      <div class="absolute inset-0 flex max-w-3xl mx-auto items-center justify-center gap-x-4 gap-y-2 text-center">
        <h1 class="text-6xl font-Reenie text-neutral-100 tracking-wider"> Temukan Paket yang Tepat
          Untuk Anda </h1>
      </div>

    </div>
    <div class="px-4 gap-y-6 text-center pb-20">
      <p class="mt-12 text-neutral-300 text-justify text-lg md:text-xl max-w-5xl mx-auto tracking-wider leading-relaxed drop-shadow-md">
        Kami menawarkan tiga jenis kelas yang dapat disesuaikan dengan gaya dan tujuan belajar Anda: Reguler, Privat, dan Bimbingan.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto px-6 pb-20">

      <CardConntent class="flex items-center justify-center aspect-square bg-neutral-800  hover:bg-neutral-700 transition-colors cursor-pointer group">
        <Photosop class="w-25 h-25 md:w-30 md:h-30 group-hover:scale-110 transition-transform duration-300" />
      </CardConntent>

      <CardConntent class="flex items-center justify-center aspect-square bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer group">
        <Revit class="w-25 h-25 md:w-30 md:h-30 group-hover:scale-110 transition-transform duration-300" />
      </CardConntent>

      <CardConntent class="flex items-center justify-center aspect-square bg-neutral-800  hover:bg-neutral-700 transition-colors cursor-pointer group">
        <skechup class="w-25 h-25 md:w-30 md:h-30 group-hover:scale-110 transition-transform duration-300" />
      </CardConntent>

    </div>

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <h1 class="text-xl lg:text-2xl text-white font-bold ">1. Kelas Reguler</h1>
      <p class="text-md lg:text-lg text-white text-left">Kelas berkelompok (3-4 orang) yang dirancang untuk belajar bersama secara interaktif dan kolaboratif. Cocok untuk Anda yang ingin berkembang sambil berdiskusi dengan peserta lain.</p>
    </div>

    <div class="relative w-full h-auto flex justify-center pb-20">
      <div class="p-1 rounded-[25px] hover:border-blue-500 transition-colors duration-300">

        <img
            :src="Content1"
            alt="Kelas Reguler"
            class="w-full max-w-3xl mx-auto h-auto object-cover rounded-[20px] grayscale hover:grayscale-0 transition-all duration-500"
        />

      </div>
    </div>

    <div class="w-full max-w-4xl mx-auto space-y-8 pb-20">

      <div
          v-for="(paket, index) in pricingDataReguler"
          :key="index"
          class="bg-neutral-800/80 rounded-3xl p-8 hover:bg-neutral-800 transition-colors shadow-lg hover:scale-105 transition-transform duration-300"
      >

        <h3 class="text-xl md:text-2xl font-bold text-white mb-6 tracking-wide">
          • {{ paket.title }}
        </h3>

        <ul class="space-y-4 text-stone-300 text-sm md:text-base leading-relaxed mx-6">
          <li v-for="(detail, idx) in paket.details" :key="idx" class="flex items-start gap-1">
            <span>{{ detail }}</span>
          </li>
        </ul>

      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <h1 class="text-xl lg:text-2xl text-white font-bold ">2. Kelas Privat</h1>
      <p class="text-md lg:text-lg text-white text-left">Kelas berkelompok (3-4 orang) yang dirancang untuk belajar bersama secara interaktif dan kolaboratif. Cocok untuk Anda yang ingin berkembang sambil berdiskusi dengan peserta lain.</p>
    </div>

    <div class="relative w-full h-auto flex justify-center pb-20">
      <div class="p-1 rounded-[25px] hover:border-blue-500 transition-colors duration-300">

        <img
            :src="Content2"
            alt="Kelas Reguler"
            class="w-full max-w-3xl mx-auto h-auto object-cover rounded-[20px] grayscale hover:grayscale-0 transition-all duration-500"
        />

      </div>
    </div>

    <div class="w-full px-4 font-mono my-8 pb-20">

      <div
          v-for="(paket, index) in pricingDataPrivat"
          :key="index"
          class="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-[25px] p-8 md:p-12 shadow-2xl border border-cyan-700 relative overflow-hidden group hover:scale-105 transition-transform duration-300 mb-8"
      >

        <div class="relative z-10 mb-8">
          <h3 class="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
            • {{ paket.title }}
          </h3>
        </div>

        <ul class="relative z-10 space-y-5">
          <li
              v-for="(detail, idx) in paket.details"
              :key="idx"
              class="space-y-4 text-neutral-200 text-sm md:text-base leading-relaxed mx-6"
          >
            <span>{{ detail }}</span>
          </li>
        </ul>

      </div>

    </div>

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <h1 class="text-xl lg:text-2xl text-white font-bold ">2. Kelas Bimbingan</h1>
      <p class="text-md lg:text-lg text-white text-left">Layanan mentorship privat berbasis langganan bulanan yang dirancang 100% untuk membantu penyelesaian tugas akademis atau proyek profesional Anda.</p>
    </div>

    <div class="relative w-full h-auto flex justify-center pb-20">
      <div class="p-1 rounded-[25px] hover:border-blue-500 transition-colors duration-300">

        <img
            :src="Content3"
            alt="Kelas Reguler"
            class="w-full max-w-3xl mx-auto h-auto object-cover rounded-[20px] grayscale hover:grayscale-0 transition-all duration-500"
        />

      </div>
    </div>

    <div class="w-full px-4 font-mono my-12 pb-20">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div
            v-for="(paket, index) in pricingDataBimbingan"
            :key="index"
            class="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-[35px] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col justify-center"
        >

          <h3 class="text-lg md:text-xl font-bold text-white mb-8 drop-shadow-md">
            {{ paket.title }}
          </h3>

          <ul class="space-y-4 text-white text-md font-medium">
            <li
                v-for="(detail, idx) in paket.details"
                :key="idx"
                class="flex items-center gap-2"
            >
              <span>  • {{ detail }}</span>
            </li>
          </ul>

        </div>

      </div>

    </div>
  </Applayout>
</template>

<style scoped>
</style>