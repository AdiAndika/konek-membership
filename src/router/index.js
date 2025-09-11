// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../view/LandingPage.vue';
import LoginPage from '../view/LoginPage.vue';
import RegisterPage from '../view/RegisterPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;