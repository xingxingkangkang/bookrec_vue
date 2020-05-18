<template>
  <a-list
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        {{ item.time }}<br />
        <a-rate
          :defaultValue="item.show"
          disabled
          style="font-size: 15px"
          allowHalf
        />
        {{ item.score }} <br />
        {{ item.content }}</a-card
      >
    </a-list-item>
  </a-list>
</template>
<script>
import axios from 'axios';
let data = [];

export default {
  data() {
    return {
      data
    };
  },
  mounted() {
    axios
      .get('/book/history', {
        params: {
          isLogin: this.$store.state.isLogin,
          username: this.$store.state.username
        }
      })
      .then(res => {
        let len = data.length;
        for (let i = 0; i < len; i++) {
          data.pop();
        }
        res = res.data;
        console.log(res.length);
        for (let i = 0; i < res.length; i++) {
          data.push({
            title: res.data[i]['book'],
            score: res.data[i]['score'],
            time: res.data[i]['date'],
            content: '有' + res.data[i]['judge'] + '人进行了评价',
            show: res.data[i]['show']
          });
        }
        console.log(res);
      });
  }
};
</script>
<style></style>
