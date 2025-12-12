<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import Logo from '@/Icon/logo.png';
import WavesBackground from "@/components/WavesBackground.vue";
import Back from "@/Icon/Back.vue";
import Button from "@/components/Button.vue";

const router = useRouter();

const form = ref({
  username: '',
  password: ''
});

const handleLogin = () => {

  const validUsername = "admin@example.com";
  const validPassword = "admin123";

  if (form.value.username === validUsername && form.value.password === validPassword) {
    router.push('/404');
  } else {
    alert('username atau password salah');
  }
};
</script>

<template>
  <WavesBackground>
    <div class="min-h-screen flex items-center justify-center p-4 relative font-sans">

      <div class="absolute top-6 left-6 md:top-10 md:left-10 flex flex-col gap-1 z-10">
        <RouterLink to="/" class="text-gray-400 hover:text-white hover:scale-110 transition-all">
          <Back/>
        </RouterLink>
      </div>

      <div class="w-full max-w-md bg-[#1E1E1E] p-8 md:p-10 rounded-3xl shadow-2xl z-0">

        <div class="text-center mb-8">
          <img :src="Logo" alt="Logo" class="h-20 mx-auto mb-4 object-contain" />

          <h1 class="text-white font-bold tracking-[0.15em] text-lg md:text-xl mb-3">
            AKADEMI ARSITEK
          </h1>

          <div class="flex justify-center items-center gap-3 text-[11px] md:text-xs text-gray-400 font-medium">
            <RouterLink to="/Daftar" class="hover:text-[#00B2FF] transition-colors">Daftar ?</RouterLink>
            <span class="text-gray-600">|</span>
            <RouterLink to="/404" class="hover:text-sky-500 transition-colors">Lupa Password ?</RouterLink>
          </div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">

          <div>
            <label class="block text-white text-sm font-medium mb-2 pl-2">Username :</label>
            <input
                v-model="form.username"
                type="text"
                placeholder="masukkan Username anda ..."
                class="w-full bg-white text-black text-sm rounded-full py-3.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#00B2FF] transition-all placeholder-gray-500 shadow-inner"
            />
          </div>

          <div>
            <label class="block text-white text-sm font-medium mb-2 pl-2">Password :</label>
            <input
                v-model="form.password"
                type="password"
                placeholder="Ketik Password ...."
                class="w-full bg-white text-black text-sm rounded-full py-3.5 px-6 focus:outline-none focus:ring-2 focus:ring-[#00B2FF] transition-all placeholder-gray-500 shadow-inner"
            />
          </div>

          <div class="pt-6">
            <Button class="w-full text-white rounded-full" type="submit">
              Masuk <span>&rarr;</span>
            </Button>
          </div>

        </form>
      </div>

    </div>
  </WavesBackground>
</template>