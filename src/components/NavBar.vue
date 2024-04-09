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
    <!-- <lux-icon-base  width="22" height="22" icon-name="person" style="
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
      <dialog ref="userDialog">This is an open dialog window</dialog>  -->
  </div>
</template>



<script>

export default {
  name: 'NavBar',
  components: {
  },
  props: {
  },
  data() {
    return {
      dialogOpen: false,
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
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
  async created() {
  },
  watch: {
  }
};
</script>

<style>
 
  .container {
    height: 32px !important; 
    display: flex;
    padding: 0px 12px 0px 0px;
    margin: 0px 0px 3px 0px;
    align-items: center;
    background-color: black;
    opacity: 0.9;
    -webkit-box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.45);
    box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.45);
  }

  .item {
    text-decoration: none;
    color: white;
  }

  .item-text {
    line-height: 18px;
    font-size: 16px;
    opacity: 1;
    cursor: pointer;
    text-decoration: none;
    font-family: "Averia Serif Libre", Georgia, Times, Times New Roman, serif;
    font-weight: 700;
  }

  .logo {
    flex-grow: 1;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 5px;
    color: black;
    background-color: white;
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
    font-family: "Averia Serif Libre", Georgia, Times, Times New Roman, serif;
    line-height: 18px;
    font-weight: 900;
    font-size: 25px;
  }


  .nav-items {
    display: flex;
    gap: 16px;
    height: 32px !important; 
    margin-right: 4px;
    padding: 7px 10px 7px 10px;
    border-left: 5px solid #ffffff;
    border-top: 0px;
    border-bottom: 0px;
  }

  @media (min-width: 1024px) {
  }

</style>