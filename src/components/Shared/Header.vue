<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand">Vox wallet</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
    </ul>

    <ul class="navbar-nav" v-if="!isAuthenticated">
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register" class="nav-link">Register</router-link>
      </li>
    </ul>

    <ul class="navbar-nav" v-else>
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <a @click="onLogout" class="nav-link">Logout</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
</template>

<script>
  export default {
    computed: {
      isAuthenticated () {
        console.log('this.$store.getters.user', this.$store.getters.user);
        if (this.$store.getters.user) {
          return true;
        }
        return false;
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout');
      }
    }
  };
</script>

<style>

</style>
