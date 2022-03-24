import axios from 'axios';

const task = {
  namespaced: true,
  state: {
    allTasks: null
  },
  actions: {
    getAllTasks({ state }, id) {
      const config = {
        method: 'get',
        url: `http://localhost:8000/user/${id}/tasks`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const request = axios(config);
      return request
        .then((result) => {
          state.allTasks = result.data;
        })
        .catch((error) => { console.error(error); throw error; });
    }
  }
};

export default task;
