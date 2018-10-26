<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';

  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    created () {
      this.$store.dispatch('tryAutoLogin');
    }
  };
</script>

<style>

</style>
