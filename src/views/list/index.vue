<template>
  <layout :showNavbar="isNavbar" :showTabbar='true'
          title='列表'>
    <mu-carousel style='height: 200px;position: fixed;z-index: 10;'>
      <mu-carousel-item v-for='item,index in bannerList'>
        <img :src="item">
      </mu-carousel-item>
    </mu-carousel>

    <mu-paper :z-depth="1" class="demo-loadmore-wrap" style='margin-top: 200px;'>
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
        text: 'List',


        list: [],
        total: 0,
        listLoading: false,
        listQuery: {
          page: 0,
          size: 10,
          trueName: '',
          mobile: '15968730003', // TODO REMOVE
          crTimeStart: '',
          crTimeEnd: '',
          enterStatus: ''
        },

        bannerList: []
      }
    },
    created() {
      this.getBanner()
      this.getList()
    },
    methods: {
      getBanner(){
        const self = this
        self.listLoading = true
        AXIOS.post('/auth/cmsBanner/index', self.listQuery).then(res => {
          let list = res.content || []
          if(isLongArr(list)){
            self.bannerList = _.pluck(list, 'image')
          }
        })
      },
      getList() {
        const self = this
        self.listLoading = true
        AXIOS.post('/auth/userInfo/userInfoIndex', self.listQuery).then(res => {
          self.list = res.content || []
          self.total = res.totalElements || 0
          self.listLoading = false
        }).catch((res) => {
          self.listLoading = false
        })
      },
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
