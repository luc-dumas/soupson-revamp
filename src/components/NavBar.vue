<template>
  <div class="container">
    <div class="item logo">
      SOUPCON SALON
    </div>
    <div class="nav-items">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        class="item"
        @click="navigate(item.path)"
      >
        <div class="item-text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>



<script>
// import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'NavBar',
  components: {
  },
  props: {
  },
  data() {
    return {
      // navItems: ['WHO WE ARE', 'CALENDAR', 'ZINE', 'PORCHFEST', 'LOGIN'],
      navItems: [
        // { text: 'Home', path: '/' },
        { text: 'WHO WE ARE', path: '/about' },
        { text: 'CALENDAR', path: '/calendar' },
        { text: 'ZINE', path: '/zine' },
        { text: 'PORCHFEST', path: '/porchfest' },
        { text: 'LOGIN', path: '/login' },
      ],
    }
  },
  computed: {
    // navItems() {
    //   return [
    //     {
    //       text: `Edit ${this.termForBulb.toLowerCase()}`,
    //       // icon: 'mdi-lightbulb-outline',
    //       // action: ({ bulb } = {}) => {
    //       //     this.openPanel({
    //       //       name: 'createEditLmb',
    //       //       location: 'modal',
    //       //       data: {
    //       //         mode: 'edit',
    //       //         bulb,
    //       //       },
    //       //     });
    //       // },
    //       // permissions: [1, 2],
    //     },
    //   ];
    // },
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
  async created() {
  },
};
</script>

<style>
 
  .container {
    /* height: 35px; */
    display: flex;
    padding: 0px 12px 0px 12px;
    margin: 0px 0px 3px 0px;
    align-items: center;
    border-bottom: 5px solid #FFFFFF;
    background-color: black;
  }

  .item {
    text-decoration: none;
    /* background-color:blue; */
    /* border: 1px dotted black; */
    color: white  ;
    
  }

  .item-text {
    line-height: 18px;
    font-size: 16px;
    opacity: 1;
    cursor: pointer;
    text-decoration: none;
    /* font-family: 'Roboto'; */
    font-family: "Averia Serif Libre", Georgia, Times, Times New Roman, serif;
    font-weight: 700;
    /* background-color: green; */
  }

  .logo {
    line-height: 18px;
    font-size: 25px;
    opacity: 1;
    cursor: pointer;
    text-decoration: none;
    /* font-family: 'Roboto'; */
    font-weight: 900;
    /* background-color: green; */
    color: #ffffff;
    flex-grow: 1;
    /* font-size: 1.5rem; */
    /* font-size: 1.6rem; */
    font-family: "Averia Serif Libre", Georgia, Times, Times New Roman, serif;
    
    /* letter-spacing: 3px; */
    /* box-shadow: 50px; */
    /* -webkit-text-stroke-width: .3px; */
    /* -webkit-text-stroke-color: #01004E; */
    
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

  .nav-items {
    border-left: 5px solid #ffffff;
    border-top: 0px;
    border-bottom: 0px;
    display: flex;
    gap: 16px;
    padding: 5px 10px 5px 10px;
  }


  @media (min-width: 1024px) {
  }



</style>