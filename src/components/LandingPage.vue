// src/components/LandingPage.vue

<script setup>
import { ref } from 'vue'

// Untuk mengelola status item FAQ yang aktif/terbuka
const openFaq = ref(null);

// Fungsi untuk membuka/menutup item FAQ
const toggleFaq = (index) => {
  if (openFaq.value === index) {
    openFaq.value = null; // Tutup jika item yang sama diklik lagi
  } else {
    openFaq.value = index; // Buka item yang baru
  }
};

// Data untuk FAQ, agar lebih mudah dikelola
const faqs = [
  {
    question: 'Apa itu Konek Plus Membership?',
    answer: 'Konek Plus Membership adalah paket langganan yang memberikan Anda akses ke berbagai aplikasi premium hiburan seperti Netflix, Spotify, dan lainnya dengan sekali bayar setiap bulan.'
  },
  {
    question: 'Apa keuntungan menggunakan Konek Plus Membership dibanding langganan sendiri-sendiri?',
    answer: 'Anda akan menghemat lebih banyak uang, proses pembayaran lebih simpel hanya sekali per bulan, dan semua langganan terkelola dalam satu platform yang mudah diakses.'
  },
  {
    question: 'Bagaimana cara berlangganan?',
    answer: 'Cukup klik tombol "Langganan Sekarang", selesaikan pembayaran, dan akun untuk semua aplikasi akan segera diaktifkan dan dikirimkan kepada Anda.'
  },
  {
    question: 'Bagaimana jika saya mengalami kendala atau masalah akses?',
    answer: 'Tim customer service kami siap membantu Anda 24/7 melalui live chat atau email untuk menyelesaikan segala kendala yang mungkin Anda hadapi.'
  },
  {
    question: 'Apakah saya bisa membatalkan membership kapan saja?',
    answer: 'Tentu saja. Anda bisa membatalkan langganan kapan saja tanpa biaya tambahan. Akses Anda akan tetap aktif hingga akhir periode penagihan berjalan.'
  }
];
</script>

<template>
  <div class="bg-white font-sans text-gray-800">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <img src="../assets/images/logo-konek-biru.png" alt="Konek.id Logo" class="h-8">
        </div>
          <router-link to="/login" class="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
            LOGIN
          </router-link>
      </nav>
    </header>

    <main>
      <section class="container mx-auto px-6 py-16 text-center">
        <div class="inline-flex items-center bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.707 3.293a1 1 0 0 0-1.414 0L15 4.586V2a1 1 0 0 0-2 0v2.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L12.586 7H10a1 1 0 0 0 0 2h2.586l-2.293 2.293a1 1 0 1 0 1.414 1.414L14 10.414V13a1 1 0 0 0 2 0v-2.586l1.293 1.293a1 1 0 0 0 1.414-1.414L16.414 8H19a1 1 0 0 0 0-2h-2.586l2.293-2.293a1 1 0 0 0 0-1.414Z M3.5 6a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1Z"/></svg>
            Bundling premium terjangkau
        </div>
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Paket Bundling Aplikasi<br>Premium Satu Klik untuk<br>Semua Hiburanmu
        </h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Bayar sekali, langsung dapat akses Netflix, Spotify, WeTV, Viu, hingga ChatGPT Plus siap dipakai kapan saja.
        </p>
        <div class="mt-8">
          <img src="../assets/images/hero-image.png" alt="Bundling Aplikasi Premium" class="max-w-xl mx-auto">
        </div>
        <div class="mt-12">
          <h2 class="text-2xl md:text-4xl font-bold">Langganan Sekarang!</h2>
          <p class="text-4xl md:text-5xl font-extrabold text-blue-600 mt-2">Cuma Rp.99.000 per bulan</p>
        </div>
      </section>

      <section class="bg-gradient-to-b from-blue-50 to-white py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 opacity-90 rounded-3xl"></div>
            
            <div class="relative p-8 md:p-10 text-white">
              <h3 class="text-2xl font-bold">Konek Entertainment</h3>
              <p class="text-5xl font-extrabold mt-2">Rp. 99<span class="text-2xl font-semibold">.000</span><span class="text-lg font-normal">/bulan</span></p>

              <ul class="mt-8 space-y-4">
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="ml-3 font-semibold">Netflix Premium</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="ml-3 font-semibold">Spotify Premium</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="ml-3 font-semibold">Chat GPT Plus</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="ml-3 font-semibold">WeTV Premium</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="ml-3 font-semibold">VIU Premium</span>
                </li>
              </ul>

              <button class="mt-8 w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-700 transition-transform transform hover:scale-105">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <span>Langganan Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="container mx-auto px-6 py-20">
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="border-b">
            <button @click="toggleFaq(index)" class="w-full text-left py-4 focus:outline-none">
              <div class="flex justify-between items-center">
                <span class="text-lg font-medium">{{ faq.question }}</span>
                <svg
                  class="w-6 h-6 transform transition-transform"
                  :class="{'rotate-180': openFaq === index}"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div v-if="openFaq === index" class="pb-4 pr-10 text-gray-600">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="bg-white border-t">
      <div class="container mx-auto px-6 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-blue-600">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.91 10.836c-2.43.1-4.363 2.05-4.363 4.506 0 2.454 1.933 4.404 4.363 4.506 2.43-.1 4.363-2.052 4.363-4.506 0-2.454-1.933-4.404-4.363-4.506zm0 7.428c-1.593-.067-2.866-1.353-2.866-2.954 0-1.6 1.273-2.886 2.866-2.953 1.593.067 2.866 1.353 2.866 2.953 0 1.6-1.273 2.887-2.866 2.954z M17.96 5.282c-1.012.04-1.832.86-1.832 1.872s.82 1.832 1.832 1.872c1.01.04 1.832-.86 1.832-1.872s-.822-1.832-1.832-1.872z M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.818c-5.417 0-9.818-4.4-9.818-9.818S6.583 2.182 12 2.182s9.818 4.4 9.818 9.818-4.4 9.818-9.818 9.818z M19.742 16.5c.34-.14.576-.43.576-.786V8.286c0-.358-.236-.647-.576-.787-.41-.17-1.15-.1-1.638.16-.487.26-.74.74-.74 1.21v5.717c0 .47.253.95.74 1.21.488.26 1.228.33 1.638.16z"></path></svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-blue-600">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.99 22 12z"></path></svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-blue-600">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 2.2c-1.3-1-3.1-1.5-5-1.5s-3.7.5-5 1.5c-2.3 1.8-3.5 4.7-3.5 7.8 0 3.1 1.2 6 3.5 7.8 1.3 1 3.1 1.5 5 1.5s3.7-.5 5-1.5c2.3-1.8 3.5-4.7 3.5-7.8 0-3.1-1.2-6-3.5-7.8zM12 18.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z"></path><path d="M12 8.2c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8-1.7-3.8-3.8-3.8zm0 6c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zM18.8 6.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"></path></svg>
            </a>
             <a href="#" class="text-gray-500 hover:text-blue-600">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 18H6.5v-7h2v7zM7.5 9.8c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zM18 18h-2v-3.5c0-.8-.2-1.4-.9-1.4s-1.1.6-1.1 1.4V18h-2v-7h2v1c.3-.6 1-1.2 2-1.2 1.5 0 2.9 1 2.9 3.1V18z"></path></svg>
            </a>
          </div>
          <p class="text-sm text-gray-500">Copyright © 2024 - Konek Market</p>
          <div class="text-sm text-gray-600 flex space-x-4">
            <a href="#" class="hover:underline">Syarataf & Ketentuan</a>
            <a href="#" class="hover:underline">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>

    <div class="fixed bottom-5 right-5">
      <button class="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110">
        <img src="../assets/images/chatbot.svg" alt="Chatbot" class="w-8 h-8">
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Path untuk gambar sekarang relatif terhadap folder 'components' */
img {
  /* contoh jika perlu penyesuaian path dari css */
}
</style>