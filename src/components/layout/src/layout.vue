<template>
  <section class="flexview">
    <slot name="navbar"
          v-if="showNavbar">
      <navbar :title="title"/>
    </slot>
    <section class="scrollview"
             ref="scrollView">
      <slot></slot>
    </section>
    <mu-container v-if='showTabbar'>
      <mu-bottom-nav :value='currentTab'>
        <mu-bottom-nav-item
          exact-active-class='mu-bottom-item-active'
          :exact='true'
          to='/'
          title="home"
          value='home'
          icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item
          exact-active-class='mu-bottom-item-active'
          :exact='true'
          to='/list'
          title="list"
          value='list'
          icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item
          exact-active-class='mu-bottom-item-active'
          :exact='true'
          to='/account'
          title="account"
          value='account'
          icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </section>
</template>
<script type="text/babel">
  export default {
    name: 'layout',
    data() {
      return {
        currentTab: 'home',
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
      showTabbar: {
        type: Boolean,
        default: false
      },
    },
    created() {
    },
    mounted() {
      console.log('a')
    },
    methods: {}
  }
</script>
<style lang="less">
  @import "./layout.less";
</style>
