<template src="./task-page.html">
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TaskPage',
  computed: {
    ...mapState('user', ['userId']),
    ...mapState('task', ['allTasks'])
  },
  async created() {
    await this.$store.dispatch('task/getAllTasks', this.userId);
    console.log(this.allTasks);
  }
};
</script>

<style scoped lang="scss" src="./task-page.scss">
</style>
