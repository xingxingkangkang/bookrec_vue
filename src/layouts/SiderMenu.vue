<template>
  <div>
    <a-menu
      theme="dark"
      :SelectedKeys="SelectedKeys"
      @select="onSelect"
      mode="inline"
    >
      <a-menu-item key="like">
        <MenuIcon type="icon-xihuan" />
        <span>猜你喜欢</span>
      </a-menu-item>
      <a-menu-item key="history">
        <MenuIcon type="icon-lishi" />
        <span>浏览历史</span>
      </a-menu-item>
      <a-menu-item key="hot">
        <MenuIcon type="icon-remen" />
        <span>24小时热门</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"
          ><MenuIcon type="icon-wenxue-copy" /><span>文学</span></span
        >
        <a-menu-item key="小说">小说</a-menu-item>
        <a-menu-item key="外国文学">外国文学</a-menu-item>
        <a-menu-item key="文学">文学</a-menu-item>
        <a-menu-item key="经典">经典</a-menu-item>
        <a-menu-item key="港台">港台</a-menu-item>
        <a-menu-item key="随笔">随笔</a-menu-item>
        <a-menu-item key="散文">散文</a-menu-item>
        <a-menu-item key="诗歌">诗歌</a-menu-item>
        <a-menu-item key="名著">名著</a-menu-item>
        <a-menu-item key="鲁迅">鲁迅</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"
          ><MenuIcon type="icon-liuhang" /><span>流行</span></span
        >
        <a-menu-item key="漫画">漫画</a-menu-item>
        <a-menu-item key="推理">推理</a-menu-item>
        <a-menu-item key="绘本">绘本</a-menu-item>
        <a-menu-item key="青春">青春</a-menu-item>
        <a-menu-item key="东野圭吾">东野圭吾</a-menu-item>
        <a-menu-item key="悬疑">悬疑</a-menu-item>
        <a-menu-item key="言情">言情</a-menu-item>
        <a-menu-item key="耽美">耽美</a-menu-item>
        <a-menu-item key="金庸">金庸</a-menu-item>
        <a-menu-item key="郭敬明">郭敬明</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title"
          ><MenuIcon type="icon-wenhua" /><span>文化</span></span
        >
        <a-menu-item key="历史">历史</a-menu-item>
        <a-menu-item key="心理学">心理学</a-menu-item>
        <a-menu-item key="哲学">哲学</a-menu-item>
        <a-menu-item key="社会学">社会学</a-menu-item>
        <a-menu-item key="传记">传记</a-menu-item>
        <a-menu-item key="文化">文化</a-menu-item>
        <a-menu-item key="政治">政治</a-menu-item>
        <a-menu-item key="宗教">宗教</a-menu-item>
        <a-menu-item key="建筑">建筑</a-menu-item>
        <a-menu-item key="回忆录">回忆录</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title"
          ><MenuIcon type="icon-shenghuo" /><span>生活</span></span
        >
        <a-menu-item key="生活">生活</a-menu-item>
        <a-menu-item key="爱情">爱情</a-menu-item>
        <a-menu-item key="成长">成长</a-menu-item>
        <a-menu-item key="旅行">旅行</a-menu-item>
        <a-menu-item key="摄影">摄影</a-menu-item>
        <a-menu-item key="美食">美食</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <span slot="title"
          ><MenuIcon type="icon-ziyuan" /><span>经管</span></span
        >
        <a-menu-item key="经济">经济</a-menu-item>
        <a-menu-item key="管理">管理</a-menu-item>
        <a-menu-item key="商业">商业</a-menu-item>
        <a-menu-item key="股票">股票</a-menu-item>
        <a-menu-item key="创业">创业</a-menu-item>
        <a-menu-item key="金融">金融</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub6">
        <span slot="title"><MenuIcon type="icon-keji" /><span>科技</span></span>
        <a-menu-item key="编程">编程</a-menu-item>
        <a-menu-item key="互联网">互联网</a-menu-item>
        <a-menu-item key="科学">科学</a-menu-item>
        <a-menu-item key="科技">科技</a-menu-item>
        <a-menu-item key="程序">程序</a-menu-item>
        <a-menu-item key="算法">算法</a-menu-item>
      </a-sub-menu>

      <a-menu-item key="tags">
        <MenuIcon type="icon-zu" />
        <span>全部标签</span>
      </a-menu-item>
      <a-menu-item key="userinfo">
        <MenuIcon type="icon-gerenzhongxin" />
        <span>用户中心</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      SelectedKeys: []
    };
  },
  methods: {
    onSelect(key) {
      console.log('select');
      if (
        key.key == 'like' ||
        key.key == 'history' ||
        key.key == 'tags' ||
        key.key == 'userinfo' ||
        key.key == 'hot'
      )
        this.$router.push('/books/' + key.key);
      else {
        console.log('change');
        this.$router.push('/books/tag/' + key.key);
        // this.$router.go(0);
      }
    }
  }
};
</script>
