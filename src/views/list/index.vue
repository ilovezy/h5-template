<template>
  <layout :showNavbar="isNavbar" :showTabbar='true'
          title='列表'>
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
      <!--<mu-appbar color="teal">-->
        <!--<mu-button icon slot="left">-->
          <!--<mu-icon value="menu"></mu-icon>-->
        <!--</mu-button>-->
        <!--LoadMore-->
        <!--<mu-button icon slot="right" @click="refresh()">-->
          <!--<mu-icon value="refresh"></mu-icon>-->
        <!--</mu-button>-->
      <!--</mu-appbar>-->

      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list>
            <template v-for="i in num">
              <mu-list-item>
                <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
              </mu-list-item>
              <mu-divider />
            </template>
          </mu-list>
        </mu-load-more>
      </mu-container>
    </mu-paper>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        isNavbar: false,
        num: 20,
        refreshing: false,
        loading: false,
        text: 'List'
      }
    },
    created() {
      // this.getDetail()
    },
    methods: {
      refresh () {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          this.text = this.text === 'List' ? 'Menu' : 'List';
          this.num = 20;
        }, 2000)
      },
      load () {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.num += 20;
        }, 2000)
      }
    }
  }
</script>
<style lang="less">
  /*@import "index";*/
</style>
