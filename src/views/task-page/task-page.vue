<template src="./task-page.html">
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TaskPage',
  data() {
    return {
      taskDescription: '',
      taskID: '',
      hideModalFooter: true,
      hideModalheader: true
    };
  },
  computed: {
    ...mapState('user', ['userId']),
    ...mapState('task', ['allTasks'])
  },
  methods: {
    setTaskId(taskId) {
      this.taskID = taskId;
    },
    closeModal() {
      this.$refs['delete-task-modal'].hide();
    },
    async addTask() {
      const payload = {
        userId: this.userId,
        description: this.taskDescription
      };
      await this.$store.dispatch('task/addTask', payload);
      this.taskDescription = '';
      this.$refs['add-task-modal'].hide();
    },
    async changeTaskStatus(taskId) {
      const payload = {
        userId: this.userId,
        taskId
      };
      await this.$store.dispatch('task/updateTask', payload);
    },
    async deleteTask() {
      const payload = {
        userId: this.userId,
        taskId: this.taskID
      };
      await this.$store.dispatch('task/deleteTask', payload);
      this.$refs['delete-task-modal'].hide();
    }
  },
  async created() {
    await this.$store.dispatch('task/getAllTasks', this.userId);
  }
};
</script>

<style scoped lang="scss" src="./task-page.scss">
</style>
