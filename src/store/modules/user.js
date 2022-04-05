import axios from 'axios';
import LocalStorage from '../../utils/storage/local-storage';

const user = {
  namespaced: true,
  state: {
    accessToken: null
  },
  actions: {
    loginUser({ commit }, userData) {
      return axios.post('http://localhost:8000/signin', userData)
        .then((response) => {
          commit('setAccessToken', response.data.accessToken);
        })
        .catch((error) => {
          console.log(error);
          // throw new Error(error);
          // if (error.response.status === 401) {
          //   this.$router.push({
          //     name: 'LoginPage'
          //   });
          // }
        });
    },
    registerUser({ commit }, userData) {
      return axios.post('http://localhost:8000/signup', userData)
        .then((response) => {
          commit('setAccessToken', response.data.accessToken);
        })
        .catch((error) => { console.error(error); });
    }
  },
  mutations: {
    setAccessToken: (state, token) => {
      state.accessToken = token;
      LocalStorage.setItem('Auth', token);
    }
  },
  getters: {
    getAccessToken: (state) => state.accessToken || LocalStorage.getItem('Auth')
  }
};

export default user;
