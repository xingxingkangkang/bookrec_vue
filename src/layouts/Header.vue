<template>
  <div style="font: 15px Helvetica,Arial,sans-serif;">
    <div id="shih">
      <ul>
        <li>
          <a-input-search
            id="search"
            placeholder="请输入想查询的图书名字"
            @search="onSearch"
            enterButton
          ></a-input-search>
        </li>
        <li style="color: #fff"></li>
        <li style="color: #fff"></li>
        <li style="text-align: right; color: #fff">
          欢迎您：{{ this.$store.state.nickname }}
          <a-button ghost @click="onClick">切换用户</a-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
      this.$router.push('/books/search/' + value);
    },
    onClick() {
      this.$store.commit('loginOut');
      this.$router.push('/user/login');
    }
  }
};
</script>
<style lang="less" scoped>
ul {
  list-style: none;
  margin-top: 10px;
}
li {
  display: inline-block;
  width: 25%;
  text-align: center;
}
</style>
