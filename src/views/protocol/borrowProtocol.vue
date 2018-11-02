<template>
  <layout :showNavbar="isNavbar">
    <div class="protocol-container">
      <h1>{{id}}</h1>
      <div class="summary">
        <p>为使用本网站及服务，请您务必审慎阅读、充分理解本协议各项条款，特别是免除或者限制责任的条款，以及开通或使用某些服务的单独协议或条款，并选择接受或不接受。 </p>
        <p> 除非您已阅读并接受本协议所有条款，否则您无权就本借贷项目有进一步操作的权利，包括但不限于获取借款项目信息、向借款人出借资金等。您点击或勾选“同意接受本协议”即视为您已阅读并同意受本协议的约束。 </p>
        <p>在完成本次操作之前，请您确认自己填写的注册信息与有权机关颁发的证件证照保持一致，包括但不限于身份信息、银行账户信息等，且您本人系具有完全民事行为能力的自然人或其他法律主体，同时愿意承受相应投资风险。</p>
      </div>
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        isNavbar: true,
        id: ''
      }
    },
    created() {
      console.log(this.$route.query)
      let query = this.$route.query || {}
      this.id = query.id
    },
    methods: {}
  }
</script>
<style lang="less">
  @import "protocol";
</style>
