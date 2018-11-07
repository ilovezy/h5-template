<template>
  <layout :showNavbar="isNavbar">
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        isNavbar: true
      }
    },
    created() {
      this.getDetail()
    },
    methods: {
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
  @import "index";
</style>
