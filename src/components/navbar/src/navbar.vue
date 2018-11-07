<template>
  <mu-appbar style="width: 100%;" color="primary">

    <mu-button icon slot="left" v-if='openSideBar' @click='showSideBar'>
      <mu-icon value=":iconfont icon-user-copy" size='26'></mu-icon>
    </mu-button>
    <mu-button icon slot="left" v-if='!noBack && !openSideBar' @click='goBack'>
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
      openSideBar: {
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

      showSideBar(){
        this.$emit('showSideBar')
      }
    }
  }
</script>
<style lang="less">
  @import './navbar.less';
</style>
