<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  created() {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      console.log('loading...');
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem('store'))
        )
      );
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      console.log('storing...');
      sessionStorage.setItem('store', JSON.stringify(this.$store.state));
    });
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
  }
};
</script>
<style lang="less" scoped></style>
