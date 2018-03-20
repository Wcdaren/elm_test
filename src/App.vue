<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from  'components/header/header.vue'

const ERR_OK = 0

export default {
  name: 'App',
  components:{
    'v-header': Header
  },
  data(){
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data);
      }
    });
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display flex // flex布局
    width  100%
    height  40px
    line-height 40px  // line-height 和 height  一样 就可以保持 垂直居中
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1  // 等分布局  flex 设为1
      text-align center  // 文字居中
      & > a
        display block // 如果是默认的inline 那么我们只有点文字的时候才可以跳转， 这里我们是需要块的跳转
        font-size 14px
        color rgb(77,85,93)
        line-height 14px
        &.active
          color rgb(240, 20, 20)



</style>
