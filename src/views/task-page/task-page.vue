<template src="./task-page.html">
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { required } from 'vuelidate/lib/validators/index';

export default {
  name: 'TaskPage',
  data() {
    return {
      taskData: {
        taskDescription: ''
      },
      taskID: '',
      hideModalFooter: true,
      hideModalheader: true,
      userId: null,
      tasks: []
    };
  },
  validations: {
    taskData: {
      taskDescription: {
        required
      }
    }
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
        description: this.taskData.taskDescription
      };
      this.$store.dispatch('pageLoader/show');
      await this.$store.dispatch('task/addTask', payload);
      this.taskData.taskDescription = '';
      this.allTask();
      this.$store.dispatch('pageLoader/hide');
      this.$bvToast.toast(this.taskData.taskDescription, {
        title: 'Task added successfully!!',
        autoHideDelay: 5000,
        variant: 'success',
        solid: true,
        appendToast: true,
        toaster: 'b-toaster-bottom-right'
      });
    },
    async changeTaskStatus(taskId) {
      const payload = {
        userId: this.userId,
        taskId
      };
      this.$store.dispatch('pageLoader/show');
      await this.$store.dispatch('task/updateTask', payload);
      this.task = this.allTasks;
      this.$store.dispatch('pageLoader/hide');
    },
    async deleteTask() {
      this.$refs['delete-task-modal'].hide();
      const payload = {
        userId: this.userId,
        taskId: this.taskID
      };
      this.$store.dispatch('pageLoader/show');
      await this.$store.dispatch('task/deleteTask', payload);
      this.allTask();
      this.$store.dispatch('pageLoader/hide');
      this.$bvToast.toast(this.taskData.taskDescription, {
        title: 'Task deleted successfully!!',
        autoHideDelay: 5000,
        variant: 'danger',
        solid: true,
        appendToast: true,
        toaster: 'b-toaster-bottom-right'
      });
    },
    activeTask() {
      this.tasks = this.allTasks.filter((task) => task.completed === false);
    },
    allTask() {
      this.tasks = this.allTasks;
    },
    doneTask() {
      this.tasks = this.allTasks.filter((task) => task.completed === true);
    },
    touchPopulatedFields() {
      const modelFields = [
        'taskDescription'
      ];
      Object.keys(this.$v.taskData).forEach((key) => {
        if (modelFields.includes(key) && this.$v.taskData[key].$model) {
          this.$v.taskData[key].$touch();
        }
      });
    }
  },
  async created() {
    this.$store.dispatch('pageLoader/show');
    this.$store.commit('header/setShowSignButtons', false);
    this.userId = this.getUserId;
    if (this.userId == null) {
      this.$router.push({
        name: 'LoginPage'
      });
    }
    await this.$store.dispatch('task/getAllTasks', this.userId);
    this.tasks = this.allTasks;
    this.$store.dispatch('pageLoader/hide');
  },
  mounted() {
    this.touchPopulatedFields();
  }
};
</script>

<style scoped lang="scss" src="./task-page.scss">
</style>
