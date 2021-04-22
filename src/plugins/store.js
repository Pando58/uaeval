import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    'login': () => {
      console.log('mutation login');
    }
  },
  actions: {
    'login': ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit('login');
        api.post('/login', user)
        .then(resp => {
          /* const token = resp.data.token
          localStorage.setItem('user-token', token) // store the token in localstorage
          commit(AUTH_SUCCESS, token)
          // you have your token, now log in your user :)
          dispatch(USER_REQUEST)
          resolve(resp) */
        })
        .catch(err => {
          /* commit(AUTH_ERROR, err)
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err) */
        });
      });
    }
  },
  getters : {
    autenticado: state => !!state.token,
    estadoAuth: state => state.status
  }
});