<template>
  <section class="flexview">
    <slot name="navbar" v-if="showNavbar">
      <navbar :title="title"/>
    </slot>
    <section class="scrollview" ref="scrollView">
      <slot></slot>
    </section>
    <slot name="bottom"></slot>

    <mu-container >
      <mu-bottom-nav>
        <mu-bottom-nav-item to='home' title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item to='list' title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item to='account' title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </section>
</template>
<script type="text/babel">
  export default {
    name: 'layout',
    data() {
      return {
        isLogin: Boolean,
        isWeixinPlatform: false || isWeixinPlatform() // 暂时不管微信
      }
    },
    props: {
      link: String,
      title: String,
      showNavbar: {
        type: Boolean,
        default: true
      },
    },
    created() {
    },
    methods: {

    }
  }
</script>
<style lang="less">
  @import "./layout.less";
</style>
