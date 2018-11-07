<template>
  <section class="flexview">
    <slot name="navbar"
          v-if="showNavbar">
      <navbar :title="title"/>
    </slot>
    <section class="scrollview"
             ref="scrollView">
      <div v-if='showLoading' style='text-align: center;padding: 100px;'>
        <mu-circular-progress class="demo-circular-progress"
                              :size="36"></mu-circular-progress>
      </div>
      <slot v-else></slot>
    </section>
    <div v-if='showTabbar'
                  style='border-top: 1px solid #eaeaea;'>
      <mu-bottom-nav value=''>
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
        <mu-bottom-nav-item
          exact-active-class='mu-bottom-item-active'
          :exact='true'
          to='/gridList'
          title="gridList"
          value='gridList'
          icon="menu"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
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
      showTabbar: {
        type: Boolean,
        default: false
      },
      showLoading: {
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
