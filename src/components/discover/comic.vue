<template lang="html">
  <div>
    <van-nav-bar title="图片动漫" left-arrow @click-left="$router.back(-1)"/>
    <div class="comic">
      <van-tabs v-model="active" :swipe-threshold="7">
        <van-tab title="全部">

          <van-row gutter="20" class="container comic mt-15" type="flex" justify="space-between">
            <van-col span="12" v-for="(item,index) in comics" :key="index">
              <img class="img-fluid img-thumb" :src="item.pic" @click="linkDetail">
              <p>{{item.title}}</p>
            </van-col>
          </van-row>

        </van-tab>
        <van-tab title="动物">

        </van-tab>
        <van-tab title="经典">

        </van-tab>
        <van-tab title="壁纸">

        </van-tab>
        <van-tab title="影视">

        </van-tab>
        <van-tab title="游戏">

        </van-tab>
        <van-tab title="古典">

        </van-tab>
      </van-tabs>

    </div>
  </div>
</template>

<script>
import { NavBar,Tab, Tabs, Row, Col } from 'vant';

export default {
  components:{
    [NavBar.name]:NavBar,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Row.name]:Row,
    [Col.name]:Col
  },
  created(){
    this.$emit('public_footer', false);
    this.$emit('public_header', false)
  },
  methods:{
    linkDetail(){
      this.$router.push('/comic/detail')
    }
  },
  data() {
    return {
      active: 0,
      comics:[
        {pic:"../../../static/images/comic/1.png",title:"回到明朝当王爷"},
        {pic:"../../../static/images/comic/2.png",title:"回到明朝当王爷"},
        {pic:"../../../static/images/comic/3.png",title:"回到明朝当王爷"},
        {pic:"../../../static/images/comic/4.png",title:"回到明朝当王爷"},
        {pic:"../../../static/images/comic/1.png",title:"回到明朝当王爷"},
        {pic:"../../../static/images/comic/2.png",title:"回到明朝当王爷"},
        {pic:"../../../static/images/comic/3.png",title:"回到明朝当王爷"},
        {pic:"../../../static/images/comic/4.png",title:"回到明朝当王爷"}
      ]
    }
  }
}
</script>

<style scoped>
.comic{
  flex-wrap: wrap;
}
</style>
