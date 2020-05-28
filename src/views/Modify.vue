<template>
  <a-form-model :layout="form.layout" :model="form" v-bind="formItemLayout">
    <a-form-model-item label="布局方式">
      <a-radio-group v-model="form.layout">
        <a-radio-button value="horizontal">
          水平
        </a-radio-button>
        <a-radio-button value="vertical">
          垂直
        </a-radio-button>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="旧密码">
      <a-input v-model="form.fieldA" placeholder="请输入旧密码" />
    </a-form-model-item>
    <a-form-model-item label="新密码">
      <a-input
        type="password"
        v-model="form.fieldB"
        placeholder="请输入新密码"
      />
    </a-form-model-item>
    <a-form-model-item label="确认密码">
      <a-input
        type="password"
        v-model="form.fieldC"
        placeholder="请确认你输入的新密码"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="onClick">
        修改密码
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        layout: 'horizontal',
        fieldA: '',
        fieldB: '',
        fieldC: ''
      }
    };
  },
  methods: {
    onClick() {
      let data = {
        username: this.$store.state.username,
        password: this.form.fieldA,
        new: this.form.fieldB
      };
      axios({
        method: 'post',
        url: '/user/modify',
        data: data
      }).then(res => {
        if (res.data.code == 200) {
          this.$notification.open({
            message: '修改成功',
            description: '密码修改成功，下次登录使用新密码登录',
            icon: <a-icon type="smile" style="color: #108ee9" />
          });
          this.form.fieldA = '';
          this.form.fieldB = '';
          this.form.fieldC = '';
        }
        if (res.data.code == 404) {
          this.$notification['error']({
            message: '修改失败',
            description: '用户名不存在或者旧密码输入错误'
          });
        }
        if (res.data.code == 500) {
          this.$notification['error']({
            message: '修改失败',
            description: '新密码与旧密码相同，请重新输入'
          });
        }
        console.log(res);
        console.log(res.data.code);
      });
    }
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  }
};
</script>
