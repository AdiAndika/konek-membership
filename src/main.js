// src/main.js

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // <-- Impor router

createApp(App)
  .use(router) // <-- Gunakan router
  .mount('#app')