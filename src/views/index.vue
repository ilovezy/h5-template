<template>
  <layout :showNavbar="isNavbar"
          :showTabbar='true'
          title='首页'>
    <mu-container>
      <mu-flex justify-content="center">
        <mu-button @click="openAlertDialog">Open Dialog</mu-button>
        <mu-button @click="getDetail">getDetail</mu-button>
      </mu-flex>
      <mu-dialog title="Use Google's location service?"
                 width="600"
                 max-width="80%"
                 :esc-press-close="false"
                 :overlay-close="false"
                 :open.sync="openAlert">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps
        are running.
        <mu-button slot="actions"
                   flat
                   color="primary"
                   @click="closeAlertDialog">Disagree
        </mu-button>
        <mu-button slot="actions"
                   flat
                   color="primary"
                   @click="closeAlertDialog">Agree
        </mu-button>
      </mu-dialog>
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
  @import "index";
</style>
