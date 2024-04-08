<template>
  <div class="container">
    <div class="item logo">
      <!-- SOUPCON SALON -->
      Soupcon Salon
    </div>
    <div class="nav-items">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        class="item"
        @click="navigate(item.path)"
      > 
        <div v-if="item.text" class="item-text">{{ item.text }}</div>
      </div>
    </div>
    <!-- <div
      @click="openUser()"
    >  -->
      <lux-icon-base  width="22" height="22" icon-name="person" style="
      padding-bottom: 5px; padding-left: 6px;color: white;
      "
            @click="openUser()"

      >
        <lux-icon-person></lux-icon-person>
      </lux-icon-base>
      <lux-icon-base width="12" height="12" icon-name="Arrow Down" style="padding-bottom: 3px; margin-left: -2px; color: white; margin-right: -1px;
      "
            @click="openUser()"

      >
      <lux-icon-arrow-down></lux-icon-arrow-down>
      </lux-icon-base>
          <!-- </div> -->
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
    openUser() {
      // this.$router.push('/login');
      console.log('openUser');
    },
  },
  async created() {
  },
};
</script>

<style>
 
  .container {
    height: 28px !important; 
    display: flex;
    padding: 0px 12px 0px 12px;
    margin: 0px 0px 3px 0px;
    align-items: center;
    /* border-bottom: 5px solid #FFFFFF; */
    background-color: black;
      opacity: 0.9;
      -webkit-box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.45);
-moz-box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.45);
box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.45);



  }

  .item {
    text-decoration: none;
    /* background-color:blue; */
    /* border-left: 5px  white; */
    /* padding-left: 8px; */
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
    background-color: white;
    color: black;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 5px;
    flex-grow: 1;
    /* font-size: 1.5rem; */
    /* font-size: 1.6rem; */
    font-family: "Averia Serif Libre", Georgia, Times, Times New Roman, serif;
    /* opacity: 2; */
    
    
    
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
        height: 28px !important; 

    border-left: 5px solid #ffffff;
    border-right: 5px solid #ffffff;
    border-top: 0px;
    border-bottom: 0px;
    display: flex;
    gap: 16px;
    padding: 5px 10px 5px 10px;
  }




  @media (min-width: 1024px) {
  }



</style>