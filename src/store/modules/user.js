import axios from 'axios';

const user = {
  namespaced: true,
  state: {
    userId: null
  },
  actions: {
    loginUser({ commit }, userData) {
      return axios.post('http://localhost:8080/signin', userData)
        .then((response) => {
          commit('setUserId', response.data.id);
        });
    },
    registerUser({ commit }, userData) {
      return axios.post('http://localhost:8080/signup', userData)
        .then((response) => {
          commit('setUserId', response.data.id);
        })
        .catch();
    }
  },
  mutations: {
    setUserId: (state, id) => {
      state.userId = id;
    }
  }
};

export default user;
