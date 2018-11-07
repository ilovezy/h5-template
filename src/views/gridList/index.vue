<template>
  <layout :showNavbar="isNavbar" :showTabbar='true'
          title='网格'>
    <mu-container>
      网格
    </mu-container>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        isNavbar: true,
        openSimple: false,
        openAlert: false

      }
    },
    created() {
      this.getDetail()
    },
    methods: {
      openAlertDialog() {
        this.openAlert = true;
      },
      closeAlertDialog() {
        this.openAlert = false;
      },
      openSimpleDialog() {
        this.openSimple = true;
      },
      closeSimpleDialog() {
        this.openSimple = false;
      },
      getDetail() {
        AXIOS.post('/auth/bid/contact', {
          bidId: this.bidId
        }).then(res => {
          this.detail = res
          console.log(res)
        })
      }
    }
  }
</script>
<style lang="less">
  /*@import "index";*/
</style>
