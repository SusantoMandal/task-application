import axios from 'axios';

const task = {
  namespaced: true,
  state: {
    allTasks: null
  },
  actions: {
    getAllTasks({ commit }, userId) {
      const config = {
        method: 'get',
        url: `http://localhost:8000/user/${userId}/tasks`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const request = axios(config);
      return request
        .then((result) => {
          commit('setTasks', result.data);
        })
        .catch((error) => { console.error(error); throw error; });
    },
    updateTask(_, { userId, taskId }) {
      const config = {
        method: 'put',
        url: `http://localhost:8000/user/${userId}/tasks/${taskId}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const request = axios(config);
      request.catch((error) => { console.error(error); throw error; });
    },
    addTask({ dispatch }, { userId, description }) {
      const data = {
        description
      };
      const config = {
        method: 'post',
        url: `http://localhost:8000/user/${userId}/tasks`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        data
      };
      const request = axios(config);
      return request
        .then(async () => {
          await dispatch('getAllTasks', userId);
        })
        .catch((error) => { console.error(error); });
    },
    deleteTask({ dispatch }, { userId, taskId }) {
      const config = {
        method: 'delete',
        url: `http://localhost:8000/user/${userId}/tasks/${taskId}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const request = axios(config);
      return request
        .then(async () => {
          await dispatch('getAllTasks', userId);
        })
        .catch((error) => { console.error(error); throw error; });
    }
  },
  mutations: {
    setTasks: (state, data) => {
      state.allTasks = data;
    }
  }
};

export default task;
