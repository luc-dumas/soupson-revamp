<template>
  <h1> ZINE </h1>
  <!-- <card>sss
    qsqsqsq
  </card> -->

      <lux-card 
        v-for="(item, index) in zines"
        :key="index"
      >
      <lux-card-header>
        <!-- Hyperlink is the text screen readers would read, we don't want to wrap the entire card -->
        <lux-heading level="h2" size="h3">Zine #1</lux-heading> 
        <lux-text-style>Jan 9, 2019</lux-text-style>
      </lux-card-header>
      <lux-card-content>
        <!-- <lux-tag type="tag" :tag-items="[
          {name: 'Pending', color: 'yellow', style: 'pill'}
          ]"
          horizontal="end"
          size="small"/> -->
        <lux-text-style type="span" variation="small">Last Updated on Dec 15, 2018</lux-text-style>
      </lux-card-content>
    </lux-card>
</template>

<script>

export default {
  name: 'Zine',
  components: {
  },
  props: {
  },
  data() {
    return {
      // navItems: ['WHO WE ARE', 'CALENDAR', 'ZINE', 'PORCHFEST', 'LOGIN'],
      zines: [
        // { text: 'Home', path: '/' },
        { title: 'WHO WE ARE', date: '/about', lastUpdated: '' },
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
  },
  async created() {
  },
};
</script>


<style>
/* @media (min-width: 1024px) {} */
</style>
