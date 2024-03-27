<template>
  <lux-grid-container class="grid-container">
    <lux-grid-item><RouterLink to="/"><p>Soupcon Salon</p></RouterLink></lux-grid-item>
    <lux-grid-item><RouterLink to="/">NavButton 1</RouterLink></lux-grid-item>
    <lux-grid-item><RouterLink to="/about">NavButton 2</RouterLink></lux-grid-item>
    <lux-grid-item><RouterLink to="/">NavButton 3</RouterLink></lux-grid-item>
    <lux-grid-item><RouterLink to="/about">NavButton 4</RouterLink></lux-grid-item>

  </lux-grid-container>
 
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'NavBar',
  components: {
  },
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  async created() {
  },
};
</script>

<style>
  .grid-container {
    /* background-color: violet;  */
    /* width: 100%; */
  }
  /* nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  } */

  @media (min-width: 1024px) {
  }

</style>