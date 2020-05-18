<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider collapsible v-model="collapsed">
        <div class="logo">
          <MenuIcon
            type="icon-nav_tushuguan"
            style="font-size: 32px"
          ></MenuIcon>
        </div>
        <SiderMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #545652; padding: 0; height: 30px">
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 30px 50px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
      <a-back-top />
    </a-layout>
  </div>
</template>
<script>
import Header from './Header';
import Footer from './Footer';
import SiderMenu from './SiderMenu';
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 23px;
}
</style>
