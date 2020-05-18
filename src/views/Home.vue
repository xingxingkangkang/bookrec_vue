<template>
  <div class="home">
    <a-button @click="onClick" style="">欢迎使用</a-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    onClick() {
      console.log('click me');
    }
  }
};
</script>

<style lang="less" scoped></style>
