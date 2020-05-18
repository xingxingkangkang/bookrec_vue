<template>
  <div style="text-align: center">
    <br /><br /><br /><br />\
    <MenuIcon type="icon-zhongzhijiaoyimima" style="font-size: 200px;" />
    <br /><br />
    <h3>
      如果您忘记了密码，请发送您的手机号码到管理员的邮进行找回密码：
    </h3>
    <h1>
      ruikang_Y@163.com
    </h1>
    <br /><br />
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
