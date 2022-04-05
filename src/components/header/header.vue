<template src="./header.html">
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState('header', ['showSignButtons']),
    ...mapState('user', ['accessToken'])
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
    },
    async signOutUser() {
      await this.$store.commit('user/setAccessToken', null);
      this.$router.push({
        name: 'LoginPage'
      });
    }
  }
};
</script>

<style scoped lang="scss" src="./header.scss">
</style>
