<template>
  <div>
    <a-descriptions title="用户个人信息" bordered>
      <a-descriptions-item label="用户名">
        {{ this.$store.state.username }}
      </a-descriptions-item>
      <a-descriptions-item label="昵称" :span="2">
        {{ this.$store.state.nickname }}
      </a-descriptions-item>
      <a-descriptions-item label="今日阅读数" :span="3">
        {{ this.$store.state.read }}
      </a-descriptions-item>
      <a-descriptions-item label="累计阅读数" :span="3">
        {{ this.$store.state.readall }}
      </a-descriptions-item>
      <a-descriptions-item label="读书座右铭">
        高尔基曾说过，书是人类进步的阶梯。
        <br />
        有了它，我们可以使知识共享，情感得到抒发。
        <br />
        在琳琅满目的书海里寻找一本启迪思想的书籍，收获的喜悦将会影响我们的一生。
        <br />
        古人云：登高而望，臂非加长也，而见着远；
        <br />
        顺风而呼，声非加沉也，而闻着彰。
        <br />
        好书就恰如高山、顺风一样，能起到因势利导的催化剂作用，给人思想赋予内涵，灵魂赋予活力，智慧赋予开启。
        <br />
        要让自己做到多读书，读好书，好读书的境界
        <br />
      </a-descriptions-item>
    </a-descriptions>
    <a-button icon="setting" @click="onClick">
      修改个人信息
    </a-button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      axios
        .get('/book/count', {
          params: {
            username: this.$store.state.username
          }
        })
        .then(res => {
          this.$store.commit('setCount', res.data.read);
          this.$store.commit('setCountAll', res.data.readall);
        });
    },
    onClick() {
      this.$router.push('/books/modify');
    }
  }
};
</script>
