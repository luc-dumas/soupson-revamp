<template>
  <div class="container">
    <div class="item logo">
      <RouterLink to="/">
        <div class="item-text">
          Soupcon Salon
        </div>
      </RouterLink>
    </div>
    <div class="item">
      <RouterLink to="/">
        <div class="item-text">
          NavButton 1
        </div>  
      </RouterLink>
    </div>
    <div class="item">
      <RouterLink to="/about">
        <div class="item-text">
          NavButton 2
        </div>
      </RouterLink>
    </div>
    <div class="item">
      <RouterLink to="/">
        <div class="item-text">
          NavButton 3
        </div>
      </RouterLink>
    </div>
    <div class="item">
      <RouterLink to="/about">
        <div class="item-text">
          NavButton 4
        </div>
      </RouterLink>
    </div>
  </div>
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
 
  .container {
    /* background-color: red; */
    display: flex;
    /* flex-wrap: wrap;  */
    padding: 8px 12px 0px 12px;
    gap: 4px;
    height: 35px;
  }

  .item {
    text-decoration: none;
    /* background-color:blue; */
    /* border: 1px dotted black; */
  }

  .item-text {
    /* background-color: green; */
  }

  .logo {
    /* background-color: green; */
    flex-grow: 1;
    font-size: 1.5rem;
    /* font-family: "Averia Serif Libre" !important; */
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