<template lang="html">
  <div>
    <van-nav-bar title="应用下载" left-text="" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-row gutter="20" class="mt-15" v-for="(item,index) in icons" :key="index">
        <van-col span="5">
          <img class="img-fluid rounded" :src="item.iconimg" alt="">
        </van-col>
        <van-col span="14">
          <h3>{{item.iconname}}</h3>
          <p>{{item.iconinfo}}</p>
        </van-col>
        <van-col span="5" class="text-right">
            <a :href="item.path">{{item.icondown}}</a>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { NavBar,Col,Row } from 'vant';

export default {
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row
  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', false)
  },
  data(){
    return {
      icons:[
        {
          iconimg:"../../../static/images/icon/1.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/2.png",
          iconname:"抖音",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/3.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/4.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/5.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/6.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/7.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/4.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/5.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/6.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        },
        {
          iconimg:"../../../static/images/icon/7.png",
          iconname:"拼多多",
          iconinfo:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          icondown:"下载",
          path:"http://www.pinduoduo.com/download.html"
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
