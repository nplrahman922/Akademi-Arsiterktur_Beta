<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import Logo from '@/Icon/logo.png';
import WavesBackground from "@/components/WavesBackground.vue";
import Back from "@/Icon/Back.vue";
import Button from "@/components/Button.vue";
import Whatsapp from "@/Icon/Whatsapp.vue";

const submitResult = ref(null);

const validationSchema = toTypedSchema(
    z.object({
      name: z.string().min(1, 'Nama wajib diisi'),
      email: z.string().min(1, 'Email wajib diisi').email('Format email tidak valid'),
      kursus: z.string().min(1, 'Silakan pilih kursus'),
      paket: z.string().min(1, 'Silakan pilih paket'),
    })
);


const { handleSubmit, defineField, isSubmitting, resetForm, errors } = useForm({
  validationSchema,
});


  const [name, nameProps] = defineField('name');
  const [email, emailProps] = defineField('email');
  const [kursus, kursusProps] = defineField('kursus');
  const [paket, paketProps] = defineField('paket');

  const onSubmit = handleSubmit((values) => {
    submitResult.value = null;

  const messageText = `Halo, Saya ingin Mendaftar di Akademi Arsitektur!
      \nNama : *${values.name}*
      Email : *${values.email}*
      Kursus : *${values.kursus}*
      Paket : *${values.paket}*
      \nMohon informasi untuk pembayaran dan pendaftaran lebih lanjut.`;

  const encodeMessage = encodeURIComponent(messageText.trim());
  const phoneNumber = '6281385266775';
  const waURL = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;

  try {
    window.open(waURL, '_blank');
    resetForm();
    submitResult.value = 'SUCCESS: Pesan siap! Cek WhatsApp Anda.';

    setTimeout(() => {
      if (submitResult.value && submitResult.value.indexOf('SUCCESS') === 0) {
        submitResult.value = null;
      }
    }, 10000);

  } catch (error) {
    console.error(error);
    submitResult.value = 'ERROR: Gagal membuka WhatsApp.';
  }
});
</script>

<template>
  <WavesBackground>

    <div class="min-h-screen flex items-center justify-center p-4 relative font-sans">

      <div class="absolute top-6 left-6 md:top-10 md:left-10 flex flex-col gap-1 z-10">
        <RouterLink to="/" class="text-gray-400 hover:text-white hover:scale-110 transition-all">
          <Back/>
        </RouterLink>
      </div>

      <div class="w-full max-w-xl bg-[#1E1E1E] p-8 md:p-10 rounded-3xl shadow-2xl z-0 border border-gray-800/50">

        <div class="text-center mb-6">
          <img :src="Logo" alt="Logo" class="h-20 mx-auto mb-4 object-contain" />

          <h1 class="text-white font-bold tracking-[0.15em] text-lg md:text-xl mb-1">
            AKADEMI ARSITEK
          </h1>
          <p class="text-white text-md font-medium">Form Pendaftaran</p>
        </div>

        <form @submit="onSubmit" class="space-y-4">

          <div>
            <label class="block text-white text-sm font-medium mb-2 pl-4">Isi Nama Lengkap :</label>
            <input
                v-model="name"
                v-bind="nameProps"
                type="text"
                placeholder="masukkan nama anda ..."
                class="w-full bg-white text-black text-sm rounded-full py-3.5 px-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder-gray-500 shadow-inner"
                :class="{ 'ring-2 ring-red-500': errors.name }"
            />
            <span v-if="errors.name" class="text-red-400 text-xs pl-6 mt-1 block">{{ errors.name }}</span>
          </div>

          <div>
            <label class="block text-white text-sm font-medium mb-2 pl-4">Email :</label>
            <input
                v-model="email"
                v-bind="emailProps"
                type="email"
                placeholder="masukkan email anda ..."
                class="w-full bg-white text-black text-sm rounded-full py-3.5 px-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder-gray-500 shadow-inner"
                :class="{ 'ring-2 ring-red-500': errors.email }"
            />
            <span v-if="errors.email" class="text-red-400 text-xs pl-6 mt-1 block">{{ errors.email }}</span>
          </div>

          <div>
            <label class="block text-white text-sm font-medium mb-2 pl-4">Pilih Kelas :</label>
            <div class="relative">
              <select
                  v-model="kursus"
                  v-bind="kursusProps"
                  class="w-full bg-white text-black text-sm rounded-full py-3.5 px-6 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all shadow-inner cursor-pointer"
                  :class="{ 'text-gray-500': !kursus, 'ring-2 ring-red-500': errors.kursus }"
              >
                <option value="" disabled selected>Pilih Kelas Anda ..</option>
                <option class="text-black" value="Revit">Revit Architecture</option>
                <option class="text-black" value="AutoCAD">AutoCAD Drafting</option>
                <option class="text-black" value="Photoshop">Photoshop Rendering</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <span v-if="errors.kursus" class="text-red-400 text-xs pl-6 mt-1 block">{{ errors.kursus }}</span>
          </div>

          <div>
            <label class="block text-white text-sm font-medium mb-2 pl-4">Pilih Paket :</label>
            <div class="relative">
              <select
                  v-model="paket"
                  v-bind="paketProps"
                  class="w-full bg-white text-black text-sm rounded-full py-3.5 px-6 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all shadow-inner cursor-pointer"
                  :class="{ 'text-gray-500': !paket, 'ring-2 ring-red-500': errors.paket }"
              >
                <option value="" disabled selected>Pilih Paket ..</option>
                <option class="text-black" value="Basic">Basic (Reguler)</option>
                <option class="text-black" value="Pro">Pro (Privat)</option>
                <option class="text-black" value="Ultimate">Ultimate</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <span v-if="errors.paket" class="text-red-400 text-xs pl-6 mt-1 block">{{ errors.paket }}</span>
          </div>

          <div class="pt-6">
            <Button color="green" class="w-full text-white rounded-full " type="submit" :disabled="isSubmitting">
              <div class="flex items-center justify-center gap-2">
                <span v-if="isSubmitting">Memproses...</span>
                <span v-else class="flex items-center gap-2">
                    Submit
              </span>
                <Whatsapp class="h-5 w-5"/>
              </div>
            </Button>

            <p class="text-center text-[10px] text-yellow-500 mt-3 font-mono">
              *pembayaran dilakukan setelah submit via WA
            </p>
          </div>

          <div class="text-center mt-4">
            <span class="text-gray-400 text-xs">Sudah punya akun? </span>
            <RouterLink to="/login" class="text-[#00B2FF] text-xs hover:underline font-bold">
              Login disini
            </RouterLink>
          </div>

          <div
              v-if="submitResult"
              class="rounded-xl p-3 text-sm font-medium text-center mt-4 transition-all"
              :class="submitResult.startsWith('ERROR') ? 'bg-red-500/20 text-red-200 border border-red-500/50' : 'bg-green-500/20 text-green-200 border border-green-500/50'"
          >
            {{ submitResult.replace('SUCCESS: ', '').replace('ERROR: ', '') }}
          </div>

        </form>
      </div>

    </div>
  </WavesBackground>
</template>