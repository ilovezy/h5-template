<template>

  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" v-if='!noBack' @click='goBack'>
      <mu-icon value=":iconfont icon-back"></mu-icon>
    </mu-button>
    {{title}}
    <mu-button flat slot="right"></mu-button>
  </mu-appbar>
</template>

<script type="text/babel">
  export default {
    name: 'navbar',
    props: {
      title: String,
      fixed: Boolean,
      noBack: {
        type: Boolean,
        default: false
      },
      backLink: String,
    },
    methods: {
      goBack() {
        if(this.backLink){
          this.$router.push(this.backLink)
        } else {
          this.$router.back()
        }
      },
    }
  }
</script>
<style lang="less">
  @import './navbar.less';
</style>
