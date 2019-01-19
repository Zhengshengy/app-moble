<template>
<div class="container" style="margin-bottom:65px;">
  <van-row class="header" type="flex" justify="space-between">
    <van-col span="3">
        <van-icon name="search" size="24px"/>
    </van-col>
    <van-col span="3" class="text-center">
      <span @click="index=1">推荐</span></van-col>
    <van-col span="3" class="text-center">
      <span @click="index=2">搞笑</span></van-col>
    <van-col span="3" class="text-center">
      <span @click="index=3">音乐</span></van-col>
    <van-col span="3" class="text-center">
      <span @click="index=4">原创</span></van-col>
    <van-col span="3" class="text-center">
      <span @click="index=5">游戏</span></van-col>
    <van-col span="3" class="text-center">
      <span @click="index=6">拍客</span></van-col>
    <van-col span="3">
    </van-col>
  </van-row>
   <div v-show="index==1">
      <van-swipe :autoplay="3000" :show-indicators="false"	class="img-thumb">
        <van-swipe-item v-for="(item,index) in data" :key="index" >
          <img class="img-fluid" :src="item.src" alt="">
        </van-swipe-item>
      </van-swipe>

      <van-row type="flex" justify="space-between" class="column-title">
        <van-col span="12"  >
          <h3>热门演员</h3>
        </van-col>
        <van-col span="12" class="text-right text-muted">
          <span @click="more">更多</span>
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-between"  class="actor" gutter="20">
        <van-col span="6"  v-for="(item,index) in list" :key="index" >
        <div @click="actormain">
          <img :src="item.src" alt="">
          <div style="margin-top: 5px">{{item.name}}</div>
        </div>
        </van-col>
      </van-row>
     <van-row type="flex" justify="space-between" class="column-title">
        <van-col span="24"  >
          <h3>最新电影</h3>
        </van-col>
      </van-row>
   </div>
  <VideoComponent :dataTransfer="videoList" />
</div>
</template>

<script>
import VideoComponent from '@/components/Public/VideoComponent'
import { Tabbar, TabbarItem, Swipe, SwipeItem ,Row ,Col, Icon} from 'vant';
export default {
  name:'Video',
  components:{
    VideoComponent,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Row.name]:Row,
    [Col.name]:Col,
    [Icon.name]: Icon
  },
  created(){
    this.$emit('public_header', true)
    this.$emit('public_footer', true)
  },
  data(){
    return{
      index:1,
      active: 0,
      data:[{src:'static/img/img3.jpg'},{src:'static/img/img3.jpg'},{src:'static/img/img3.jpg'},{src:'static/img/img3.jpg'}],
      list:[{src:'static/images/avatar/1.png',name:'陈伟霆'},{src:'static/images/avatar/2.png',name:'陈赫'},{src:'static/images/avatar/3.png',name:'王子'},{src:'static/images/avatar/4.png',name:'成龙'},{src:'static/images/avatar/5.png',name:'李连杰'},{src:'static/images/avatar/6.png',name:'周润发'},{src:'static/images/avatar/7.png',name:'刘德华'},{src:'static/images/avatar/8.png',name:'张家辉'}],
      videoList:[{src:'static/images/videos/1.png',name:'回到明朝当王爷'},{src:'static/images/videos/2.png',name:'我的保姆'},{src:'static/images/videos/3.png',name:'原来你还在这里'},{src:'static/images/videos/4.png',name:'我们的四十年'}]
    }
  },
  methods:{
    actormain(){
      this.$router.push('/video/actor/main')
    },
    more(){
      this.$router.push('/video/actor')
    },
  }
}

</script>

<style scoped>
  .actor{
    flex-wrap: wrap;
    text-align: center;
  }
  .actor img{
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin: 10px auto;
  }
  .kong{
    height: 60px;
  }
</style>
