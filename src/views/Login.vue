<template>
  <div class="app">
    <div style="text-align: center">
      <LoginIcon type="icon-denglu" style="font-size: 100px;" />
    </div>
    <div id="login_form">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              }
            ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              }
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true
              }
            ]"
          >
            记住我
          </a-checkbox>
          <a class="login-form-forgot" href="./forgot">
            忘记密码点我
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            登录
          </a-button>
          Or
          <a href="./register">
            现在去注册一个新账号
          </a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          axios
            .get('/user/login', {
              params: {
                username: values.userName,
                password: values.password
              }
            })
            .then(res => {
              console.log(res);
              if (res.data.code == 200) {
                this.$store.commit('setUsername', values.userName);
                this.$store.commit('setNickname', res.data.nickname);
                this.$router.push('/');
              } else {
                this.$notification['error']({
                  message: '密码错误',
                  description: res.data.message
                });
              }
            });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.app {
  // background: url('../assets/loginin.jpg');
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
#login_form {
  height: 300px;
  width: 30%;
  position: fixed;
  top: 20%;
  left: 35%;
  right: 35%;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
