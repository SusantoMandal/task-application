<template src="./header.html">
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState('header', ['showSignButtons'])
  },
  methods: {
    goToLoginPage() {
      this.$router.push({
        name: 'LoginPage'
      });
    },
    goToRegisterPage() {
      this.$router.push({
        name: 'RegisterPage'
      });
    }
  }
};
</script>

<style scoped lang="scss" src="./header.scss">
</style>
