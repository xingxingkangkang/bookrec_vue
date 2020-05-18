<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0
      }"
    >
      <div class="logo">
        <MenuIcon type="icon-nav_tushuguan" style="font-size: 32px"></MenuIcon>
      </div>
      <SiderMenu />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#24292e', padding: 0 }">
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 30px 50px">
        <router-view v-if="isRouterAlive"></router-view>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from './Header';
import Footer from './Footer';
import SiderMenu from './SiderMenu';
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      style: '',
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  },
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  margin: 20px;
  margin-left: 40px;
}
</style>
