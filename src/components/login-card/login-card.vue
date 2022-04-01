<template src="./login-card.html">
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators/index';

export default {
  name: 'LoginCard',
  data() {
    return {
      userData: {
        userId: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  validations: {
    userData: {
      userId: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(5)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  props: {
    mode: String
  },
  computed: {
    isSubmitDisable() {
      if (this.mode === 'register') {
        return this.userData.userId.length < 0
        || this.userData.password.length < 0 || this.userData.confirmPassword.length < 0;
      }
      return this.userData.userId.length < 0 || this.userData.password.length < 0;
    }
  },
  methods: {
    emitToParent() {
      this.$emit('onFromSubmit', this.userData.userId, this.userData.password);
    },
    touchPopulatedFields() {
      const modelFields = [
        'userId',
        'password',
        'confirmPassword'
      ];
      Object.keys(this.$v.userData).forEach((key) => {
        if (modelFields.includes(key) && this.$v.userData[key].$model) {
          this.$v.userData[key].$touch();
        }
      });
    }
  },
  mounted() {
    this.touchPopulatedFields();
  }
};
</script>

<style scoped lang="scss" src="./login-card.scss">
</style>
