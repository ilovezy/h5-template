<template>
  <layout :showNavbar="isNavbar"
          :showTabbar='true'
          title='个人中心'>
    <mu-container style='padding: 15px;padding-bottom: 50px;'>
      <mu-form ref="form"
               :model="validateForm"
               class="mu-demo-form">
        <mu-form-item label="用户名"
                      help-text="帮助文字"
                      prop="username"
                      :rules="usernameRules">
          <mu-text-field v-model="validateForm.username"
                         prop="username"></mu-text-field>
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
        <mu-form-item>
          <mu-button color="primary"
                     @click="submit">提交
          </mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>

      <mu-flex justify-content="center"
               style="margin: 32px 0;">
        <mu-pagination raised
                       :total="1000"
                       :page-count='5'
                       :current.sync="current"></mu-pagination>
      </mu-flex>

      <mu-menu cover>
        <mu-button color="primary">dropdown</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-title>Refresh</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Send feedback</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Settings</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Help</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Sign out</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-container>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        isNavbar: true,
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
        validateForm: {
          username: '',
          password: '',
          isAgree: false
        },
        current: 3
      }
    },
    created() {
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      clear() {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          isAgree: false
        };
      }
    }
  }
</script>
<style lang="less">
  /*@import "index";*/
</style>
