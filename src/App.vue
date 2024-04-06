<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="whole-page">
    <NavBar class="nav-bar"/>
    <RouterView />
  </div>
</template>

<style scoped>


  .whole-page {
  }
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
  }
</style>
