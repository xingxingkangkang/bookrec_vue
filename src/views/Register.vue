<template>
  <div class="app">
    <div style="text-align: center">
      <RegistIcon type="icon-zhuce" style="font-size: 100px;" />
    </div>
    <div id="register_form">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item v-bind="formItemLayout" label="账号">
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [
                  { required: true, message: 'Please input your phone number!' }
                ]
              }
            ]"
            style="width: 100%"
          >
            <a-select
              slot="addonBefore"
              v-decorator="['prefix', { initialValue: '86' }]"
              style="width: 70px"
            >
              <a-select-option value="86">
                +86
              </a-select-option>
              <a-select-option value="87">
                +87
              </a-select-option>
            </a-select>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    validator: validateToNextPassword
                  }
                ]
              }
            ]"
            type="password"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  },
                  {
                    validator: compareToFirstPassword
                  }
                ]
              }
            ]"
            type="password"
            @blur="handleConfirmBlur"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">
            昵称&nbsp;
            <a-tooltip title="在系统中希望别人叫你什么">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input
            v-decorator="[
              'nickname',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true
                  }
                ]
              }
            ]"
          />
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
            我已经阅读了
            <a href="/user/agreement">
              系统用户协议
            </a>
          </a-checkbox>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit">
            立即注册
          </a-button>
          <a-button type="primary" style="float: right;" @click="onClick"
            >返回登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if (values.agreement != true) {
            this.$notification['error']({
              message: '请勾选agreement协议',
              description: '请仔细阅读并勾选agreement后方可注册'
            });
          } else {
            let data = {
              username: values.phone,
              password: values.password,
              nickname: values.nickname
            };
            console.log('Received values of form: ', values);
            axios({
              method: 'post',
              url: '/user/register/',
              data: data
            }).then(
              res => {
                if (res.data.code == 404) {
                  this.$notification['error']({
                    message: '注册失败',
                    description:
                      '账号已经被注册，请核对输入账号后重试或返回登录页'
                  });
                } else {
                  this.$notification.open({
                    message: '注册成功',
                    description: '欢迎使用本推荐系统，祝愿美好的书籍伴你一生',
                    duration: 2
                  });
                  this.$store.commit('setUsername', values.phone);
                  this.$store.commit('setNickname', res.data.nickname);
                  this.$router.push('/');
                }
              },
              err => {
                console.log(err);
              }
            );
          }
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    onClick() {
      this.$router.push('/user');
    }
  }
};
</script>
<style lang="less" scoped>
.app {
  // background: url('../assets/bac.jpg');
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
#register_form {
  height: 400px;
  width: 40%;
  position: fixed;
  top: 20%;
  left: 25%;
  right: 35%;
}
</style>
