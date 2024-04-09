<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="whole-page">
    <div class="nav-bar-placeholder">
      <NavBar class="nav-bar"/>
    </div> 
    <Transition>
      <RouterView />
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>


<style scoped>
.v-enter-active {
  transition: opacity 0.75s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

  .whole-page {
    /* background-color: orange; */
  }
  .nav-bar-placeholder {
    height: 32px;
  }
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
  }
</style>
