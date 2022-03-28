<template src="./task-page.html">
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'TaskPage',
  data() {
    return {
      taskDescription: '',
      taskID: '',
      hideModalFooter: true,
      hideModalheader: true,
      userId: null
    };
  },
  computed: {
    ...mapGetters('user', ['getUserId']),
    ...mapState('task', ['allTasks']),
    completedTask() {
      let count = 0;
      this.allTasks.forEach((element) => {
        if (element.completed === true) {
          count += 1;
        }
      });
      return count;
    }
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
      // this.$refs['add-task-modal'].hide();
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
    this.$store.commit('header/setShowSignButtons', false);
    this.userId = this.getUserId;
    if (this.userId == null) {
      this.$router.push({
        name: 'LoginPage'
      });
    }
    await this.$store.dispatch('task/getAllTasks', this.userId);
  }
};
</script>

<style scoped lang="scss" src="./task-page.scss">
</style>
