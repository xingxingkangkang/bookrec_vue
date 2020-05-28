import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    nickname: '请先登录',
    username: '请先登录',
    read: 0,
    readall: 0
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
    },
    setCount(state, count) {
      state.read = count;
    },
    setCountAll(state, countall) {
      state.readall = countall;
    }
  },
  actions: {},
  modules: {}
});
