import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import P404 from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    component: () =>
      import(/* webpackChunkName: "about" */ '../layouts/BasicLay')
  },
  {
    path: '/user',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '/',
        redirect: '/user/login'
      },
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '../views/Login')
      },
      {
        path: '/user/register',
        name: 'register',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/Register')
      },
      {
        path: '/user/forgot',
        name: 'forgot',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/Forgot')
      },
      {
        path: '/user/agreement',
        name: 'agreement',
        component: () => import('../views/agreement')
      }
    ]
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "BasicLayout" */ '../layouts/BasicLay'),
    children: [
      {
        path: '/',
        redirect: '/books/like'
      },
      {
        path: '/books',
        name: 'book',
        redirect: '/books/like',
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/books/like',
            name: 'like',
            component: () =>
              import(/* webpackChunkName: "BasicLayout" */ '../views/Like')
          },
          {
            path: '/books/history',
            name: 'history',
            component: () =>
              import(/* webpackChunkName: "BasicLayout" */ '../views/History')
          },
          {
            path: '/books/tags',
            name: 'tags',
            component: () =>
              import(/* webpackChunkName: "BasicLayout" */ '../views/Tag')
          },
          {
            path: '/books/tag/:tagname',
            name: 'tag',
            component: () =>
              import(/* webpackChunkName: "BasicLayout" */ '../views/OneTag')
          },
          {
            path: '/books/search/:key',
            name: 'search',
            component: () =>
              import(/* webpackChunkName: "BasicLayout" */ '../views/Search')
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    component: P404
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    NProgress.start();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
