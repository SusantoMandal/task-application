<template src="./login-page.html"></template>

<script>

export default {
  name: 'LoginPage',
  data() {
    return {
      userName: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      const payload = {
        name: this.userName,
        password: this.password
      };
      await this.$store.dispatch('user/loginUser', payload);
      this.$router.push({
        name: 'TaskPage'
      });
    }
  }
};
</script>

<style scoped lang="scss" src="./login-page.scss">
</style>
