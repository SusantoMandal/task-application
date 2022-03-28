<template src="./register-page.html"></template>

<script>
import LoginCard from '../../components/login-card/login-card.vue';

export default {
  name: 'RegisterPage',
  components: {
    LoginCard
  },
  methods: {
    async registerUser(userName, userPassword) {
      const payload = {
        name: userName,
        password: userPassword
      };
      await this.$store.dispatch('user/registerUser', payload);
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

<style scoped lang="scss" src="./register-page.scss">
</style>
