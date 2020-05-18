<template>
  <div style="text-align: center">
    <br /><br /><br /><br />
    <h1>您访问的页面走丢啦</h1>
    <Icon404 type="icon-404" style="font-size: 200px;" />
    <br /><br /><br /><br />
    <a-button type="primary" @click="onClick">点击返回登录页</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push('/user');
    }
  }
};
</script>

<style></style>
