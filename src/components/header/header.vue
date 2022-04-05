<template src="./header.html">
</template>

<script>
import { mapState } from 'vuex';
import localStorage from '../../utils/storage/local-storage';

export default {
  name: 'Header',
  computed: {
    ...mapState('header', ['showSignButtons']),
    showSignOutButton() {
      const auth = localStorage.getItem('Auth');
      console.log('auth', auth);
      if (auth && auth !== null) {
        return true;
      }
      return false;
    }
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
      await localStorage.removeItem('Auth');
      this.$store.commit('user/setAccessToken', null);
      this.$router.push({
        name: 'LoginPage'
      });
    }
  }
};
</script>

<style scoped lang="scss" src="./header.scss">
</style>
