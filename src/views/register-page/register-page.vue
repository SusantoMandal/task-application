<template src="./register-page.html"></template>

<script>

export default {
  name: 'RegisterPage',
  data() {
    return {
      userName: '',
      password: '',
      isNameValid: true
    };
  },
  methods: {
    async registerUser() {
      const payload = {
        name: this.userName,
        password: this.password
      };
      await this.$store.dispatch('user/registerUser', payload);
      this.$router.push({
        name: 'TaskPage'
      });
    }
  }
};

</script>

<style scoped lang="scss" src="./register-page.scss">
</style>
