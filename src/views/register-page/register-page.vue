<template src="./register-page.html"></template>

<script>
import LoginCard from '../../components/login-card/login-card.vue';

export default {
  name: 'RegisterPage',
  components: {
    LoginCard
  },
  methods: {
    async registerUser(userName, userPassword, userEmail) {
      const payload = {
        name: userName,
        password: userPassword,
        email: userEmail
      };
      this.$store.dispatch('pageLoader/show');
      await this.$store.dispatch('user/registerUser', payload);
      this.$store.dispatch('pageLoader/hide');
      this.$router.push({
        name: 'TaskPage'
      });
    }
  },
  created() {
    this.$store.commit('header/setShowSignButtons', false);
    this.$store.dispatch('pageLoader/hide');
  }
};

</script>

<style scoped lang="scss" src="./register-page.scss">
</style>
