<script setup lang="ts">
import Applayout from "@/components/Applayout.vue";
import Logo from "@/Icon/Logo.vue";
import Card from "@/components/Card.vue";

const pricingDataReguler = [
  {
    title: "Skill 1🛠️",
    details: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    ]
  },
  {
    title: "Skill 2 🗼",
    details: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    ]
  },
  {
    title: "Skill 3  📷",
    details: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    ]
  }
];
</script>

<template>
<Applayout>
<div class="my-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="sm:block  md:grid grid-cols-2 mx-5">
    <div>
      <h1 class="font-mono text-white text-4xl my-5">
        Naufal RIfqi Rahman
      </h1>
      <h2 class="font-mono text-white text-md my-5">
        11241071-Informatika-Institut Teknologi Kalimantan
      </h2>
      <p class="font-mono text-white text-sm my-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <Logo class="w-100 h-100"/>
  </div>

  <div class="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-5">

    <div
        v-for="(paket, index) in pricingDataReguler"
        :key="index"
        class="mx-4"
    >
      <Card>
        <h3 class="text-md md:text-xl font-bold text-white mb-6 tracking-wide ">
          • {{ paket.title }}
        </h3>

        <ul class="space-y-4 text-stone-300 text-sm md:text-base leading-relaxed mx-6">
          <li v-for="(detail, idx) in paket.details" :key="idx" class="flex items-start gap-1">
            <span>{{ detail }}</span>
          </li>
        </ul>
      </Card>

    </div>
  </div>

</div>
</Applayout>
</template>

<style scoped>

</style>