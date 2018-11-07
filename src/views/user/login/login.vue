<template>
  <layout title='登录'>
    <div style='padding: 50px 15px;'>
      <mu-form ref="validateForm"
               :model="validateForm"
               class="mu-demo-form">
        <mu-form-item label="用户名"
                      prop="loginName"
                      :rules="loginNameRules">
          <mu-text-field v-model="validateForm.loginName"
                         prop="loginName"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码"
                      prop="password"
                      :rules="passwordRules">
          <mu-text-field type="password"
                         v-model="validateForm.password"
                         prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree"
                      :rules="argeeRules">
          <mu-checkbox label="同意用户协议"
                       v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>
        <mu-button color="primary"
                   full-width large
                   style='margin-top: 30px;'
                   @click="handleLogin">提交
        </mu-button>
      </mu-form>

    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        isNavbar: true,
        loginNameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
        validateForm: {
          loginName: '',
          password: '',
          isAgree: false
        },
      }
    },
    created() {
    },
    methods: {
      handleLogin() {
        const self = this
        const loginName = self.validateForm.loginName
        const password = self.validateForm.password

        this.$refs.validateForm.validate().then((result) => {
          self.loading = true
          AXIOS.post('/security/login/platformUser', {
            userName: loginName,
            password: password,
            postType: 'old'
          }).then(res => {
            USER.setToken(res.bearerToken)
            USER.setLoginName(loginName)
            self.$router.push({path: '/'})
          }).catch(() => {
            self.loading = false
          })
        });
      },
    }
  }
</script>
<style lang="less">
  /*@import "index";*/
</style>
