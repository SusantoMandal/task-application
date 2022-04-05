<template src="./login-page.html"></template>

<script>
import LoginCard from '../../components/login-card/login-card.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginCard
  },
  methods: {
    async loginUser(userEmail, userPassword) {
      const payload = {
        email: userEmail,
        password: userPassword
      };
      this.$store.dispatch('pageLoader/show');
      await this.$store.dispatch('user/loginUser', payload);
      this.$store.dispatch('pageLoader/hide');
      this.$router.push({
        name: 'TaskPage'
      });
      // try {
      //   const payload = {
      //     email: userEmail,
      //     password: userPassword
      //   };
      //   this.$store.dispatch('pageLoader/show');
      //   await this.$store.dispatch('user/loginUser', payload);
      //   this.$store.dispatch('pageLoader/hide');
      //   this.$router.push({
      //     name: 'TaskPage'
      //   });
      // } catch (e) {
      //   console.log(e);
      //   // this.$router.push({
      //   //   name: 'LoginPage'
      //   // });
      // }
    }
  },
  created() {
    this.$store.commit('header/setShowSignButtons', false);
    this.$store.dispatch('pageLoader/hide');
  }
};
</script>

<style scoped lang="scss" src="./login-page.scss">
</style>
