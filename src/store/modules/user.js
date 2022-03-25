import axios from 'axios';
import LocalStorage from '../../utils/storage/local-storage';

const user = {
  namespaced: true,
  state: {
    userId: null
  },
  actions: {
    loginUser({ commit }, userData) {
      return axios.post('http://localhost:8000/signin', userData)
        .then((response) => {
          commit('setUserId', response.data.id);
        });
    },
    registerUser({ commit }, userData) {
      return axios.post('http://localhost:8000/signup', userData)
        .then((response) => {
          commit('setUserId', response.data.id);
        })
        .catch();
    }
  },
  mutations: {
    setUserId: (state, id) => {
      state.userId = id;
      LocalStorage.setItem('Auth', id);
    }
  },
  getters: {
    getUserId: (state) => state.userId || LocalStorage.getItem('Auth')
  }
};

export default user;
