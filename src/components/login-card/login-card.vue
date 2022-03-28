<template src="./login-card.html">
</template>

<script>
export default {
  name: 'LoginCard',
  data() {
    return {
      userId: '',
      password: '',
      confirmPassword: ''
    };
  },
  props: {
    mode: String
  },
  methods: {
    emitToParent() {
      this.$emit('onFromSubmit', this.userId, this.password);
    }
  }
};
</script>

<style scoped lang="scss" src="./login-card.scss">
</style>
