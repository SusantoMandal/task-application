<template src="./login-page.html"></template>

<script>
import LoginCard from '../../components/login-card/login-card.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginCard
  },
  methods: {
    async loginUser(userName, userPassword) {
      const payload = {
        name: userName,
        password: userPassword
      };
      await this.$store.dispatch('user/loginUser', payload);
      this.$router.push({
        name: 'TaskPage'
      });
    }
  },
  created() {
    this.$store.commit('header/setShowSignButtons', false);
  }
};
</script>

<style scoped lang="scss" src="./login-page.scss">
</style>
