<script setup>
import Header from './views/header.vue'
import { useRoute } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/vue"

const route = useRoute()
</script>

<template>
  <!-- Header aparece apenas em algumas rotas -->
  <Header v-if="route.path !== '/login' && route.path !== '/regulamento'" />

  <!-- Container principal -->
  <div :class="{
      'login-container': route.path === '/login',
      'regulamento-container': route.path === '/regulamento',
      'main-container': route.path !== '/login' && route.path !== '/regulamento'
    }"
  >
    <router-view></router-view>
  </div>
  <SpeedInsights></SpeedInsights>
</template>

<style scoped>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Login ocupa a tela inteira */
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #081e6a, #0d3b9d, #4b6cb7);
}

/* Regulamento centralizado */
.regulamento-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* permite rolagem se o conteúdo for grande */
  padding: 2rem 1rem; /* espaço interno para o card */
  background: linear-gradient(135deg, #081e6a, #0d3b9d, #4b6cb7);
  overflow-y: auto;
}

/* Outras telas com header */
.main-container {
  padding-top: 1vh; /* espaço para o header fixo */
}

</style>
