<template src="./home-page.html">
</template>

<script>

export default {
  name: 'HomePage',
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

<style scoped lang="scss" src="./home-page.scss">
</style>
