<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/Footer.vue'

// Dapatkan informasi rute saat ini
const route = useRoute()

// Daftar nama rute yang TIDAK akan menampilkan footer
const routesWithoutFooter = ['Login', 'Register']

// Cek apakah footer harus ditampilkan
// computed property ini akan otomatis update saat halaman berpindah
const shouldShowFooter = computed(() => {
  return !routesWithoutFooter.includes(route.name)
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    
    <Footer v-if="shouldShowFooter" />
  </div>
</template>