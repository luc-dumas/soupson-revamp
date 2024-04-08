<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="whole-page">
    <!-- <Transition> -->
      <NavBar class="nav-bar"/>
    <!-- </Transition> -->
    <Transition>
      <RouterView />
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // show: false
    };
  },
  methods: {
    // toggle() {
    //   this.show = !this.show;
    // }
  },
  mounted() {
    // setTimeout(() => {
    //   this.toggle();
    // }, 500);
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

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
  }
</style>
