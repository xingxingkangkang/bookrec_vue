import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    nickname: '',
    username: ''
  },
  mutations: {
    setUsername(state, val) {
      state.isLogin = true;
      state.username = val;
    },
    setNickname(state, val) {
      state.nickname = val;
    },
    loginOut(state) {
      state.isLogin = false;
      state.username = '';
      state.nickname = '';
    }
  },
  actions: {},
  modules: {}
});
