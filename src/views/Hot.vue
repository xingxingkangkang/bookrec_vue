<template>
  <a-list
    itemLayout="vertical"
    size="large"
    :pagination="pagination"
    :dataSource="listData"
  >
    <a-list-item slot="renderItem" slot-scope="item" key="item.title">
      <template slot="actions" v-for="{ type, text } in actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img slot="extra" width="88" alt="logo" :src="item.img" />
      <a-list-item-meta :description="item.description">
        <a
          slot="title"
          :href="item.href"
          @click="look(item.title, item.id, item.bookimg)"
          >{{ item.title }}</a
        >
        <a-avatar slot="avatar" :src="item.avatar" />
      </a-list-item-meta>
      <a-list-item-meta :description="item.click" />
      {{ item.content }}
    </a-list-item>

    <toTop />
  </a-list>
</template>
<script>
import toTop from '../components/ToTop';
import axios from 'axios';
let listData = [];
export default {
  components: {
    toTop
  },
  data() {
    return {
      listData,
      pagination: {
        pageSize: 10
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'rocket', text: '2' }
      ]
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      this.init();
    }
  },
  methods: {
    look: function(title, id, bookimg) {
      console.log(title);
      console.log(id);
      console.log(this.$store.state.username);
      let data = {
        username: this.$store.state.username,
        isLogin: this.$store.state.isLogin,
        action: '查看',
        bookname: title,
        bookid: id,
        img: bookimg
      };
      axios({
        method: 'post',
        url: '/book/history/',
        data: data
      }).then(res => {
        console.log(res);
      });
    },
    init() {
      axios.get('/book/hot').then(res => {
        console.log(res.data);
        let len = listData.length;
        for (let i = 0; i < len; i++) {
          listData.pop();
        }
        res = res.data;
        for (let i = 0; i < res.size; i++) {
          listData.push({
            click:
              '过去24小时内有 ' +
              res.data.book_detail[i]['click'] +
              ' 人次点击了这本书',
            bookimg: res.data.book_detail[i]['img'],
            href: res.data.book_detail[i]['mess'],
            title: res.data.book_detail[i]['name'],
            id: res.data.book_detail[i]['id'],
            img:
              'https://images.weserv.nl/?url=' + res.data.book_detail[i]['img'],
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
              res.data.book_detail[i]['publish_time'] +
              ' / ' +
              res.data.book_detail[i]['author'] +
              ' / ' +
              res.data.book_detail[i]['price'] +
              '元',
            content:
              '该书出版于：' +
              res.data.book_detail[i]['publish_time'] +
              ', 书本评分为：' +
              res.data.book_detail[i]['score'] +
              '分, 共有' +
              res.data.book_detail[i]['judge'] +
              '人参与评分, 有' +
              res.data.book_detail[i]['reading'] +
              '人正在读这本书, 并且有' +
              res.data.book_detail[i]['readup'] +
              '人想读这本书'
          });
        }
        console.log(listData.length);
      });
    }
  }
};
</script>
<style></style>
