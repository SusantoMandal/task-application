<template>
  <div id="app" class="app-container">
  <Header />
  <main>
    <router-view/>
  </main>
  </div>
</template>

<script>
import Header from './components/header/header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style lang="scss" src="./assets/styles/index.scss">
</style>
