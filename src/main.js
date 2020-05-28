import Vue from 'vue';
import antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.less';
import { Icon } from 'ant-design-vue';

Vue.config.productionTip = false;

Vue.use(antd);
Vue.use(Icon);

const LoginIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1759869_16r6w69cpdq.js' // 一个登录的图标
});

const RegistIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1759869_thnobj59edl.js' // 一个注册的图标
});

const Icon404 = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1759869_asqd9zie74t.js' // 一个404的图标
});

const MenuIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1759869_6g4vi8nkvkt.js'
});

Vue.component('LoginIcon', LoginIcon);
Vue.component('RegistIcon', RegistIcon);
Vue.component('Icon404', Icon404);
Vue.component('MenuIcon', MenuIcon);

// router.beforeEach((to, from, next) => {
//   console.log(store.state.isLogin, 'store.state');
//   if (
//     store.state.isLogin ||
//     to.path == '/user/login' ||
//     to.path == '/user/register' ||
//     to.path == '/user/forgot'
//   ) {
//     next();
//   } else {
//     next({
//       path: '/user/login'
//     });
//   }
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
