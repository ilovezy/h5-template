<template>
  <layout :showNavbar="isNavbar"
          :showTabbar='true'
          title='个人中心'>
    <div class='account-page'>
      <mu-button color="primary"
                 @click="goLogin">登录
      </mu-button>
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        isNavbar: true,

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
      },

      goLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="less">
  /*@import "index";*/
</style>
