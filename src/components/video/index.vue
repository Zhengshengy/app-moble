<template>
  <transition name="fade" mode="out-in">
    <div class="container-fluid" style="margin-bottom:65px;">
      <div class="container">
        <van-row class="header" type="flex" justify="space-between">
          <van-col span="3">
            <van-icon name="search" size="24px" @click="showSearch"/>
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
        <van-col span="6"  v-for="(item,index) in list" :key="index" v-if="index<8" >
        <div @click="actormain(item.id)">
          <img class="img-fluid rounded" :src="item.avatar" alt="">
          <div class="mb-10">{{item.name}}</div>
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

      <!--搜索条-->
      <div class="search-bar" v-show="SearchBar==true" @click.stop="">
        <div class="change">
          <input type="text" v-focus placeholder="发走心评论，交知心朋友" @blur="hiddeSearch">
        </div>
        <div class="stable">
          <button>搜索</button>
        </div>
      </div>
    </div>

  </transition>
</template>

<script>
import VideoComponent from '@/components/Public/VideoComponent'
import { Tabbar, TabbarItem, Swipe, SwipeItem ,Row ,Col, Icon} from 'vant';
import axios from 'axios'
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
  directives:{
    focus: {
      update:function (el) {
        el.focus()
      }
    }
  },
  created(){
    this.$emit('public_header', true);
    this.$emit('public_footer', true);
    axios.get("static/data/swipe.json").then(e=>{
      this.data = e.data.filter(item=>{
        return item.type == '1'
      })
    });

    axios.get("static/data/actor.json").then(e=>{
      this.list = e.data
    });

    axios.get("static/data/video.json").then(e=>{
      this.videoList = e.data.filter(item=>{
        return item.cate_id == '1'
      })
      this.videoList = this.videoList.slice(0,4)
    });
  },
  data(){
    return{
      index:1,
      active: 0,
      SearchBar: false,
      data:[],
      list:[],
      videoList:[]
    }
  },
  methods:{
    showSearch(){
      this.SearchBar = true
    },
    hiddeSearch(){
      this.SearchBar = false
    },
    actormain(id){
      this.$router.push({path:'/video/actor/main',query:{id:id}})
      console.log(id)
    },
    more(){
      this.$router.push('/video/actor')
    }
  },
}

</script>

<style scoped>
  .actor{
    flex-wrap: wrap;
    text-align: center;
  }

  .search-bar{height:50px;display:flex;/*设为伸缩容器*/flex-flow:row;/*伸缩项目单行排列*/background: #FFF; width: 100%; position: fixed; top: 0;}
  .search-bar .stable{width:60px;/*固定宽度*/ margin-right: 0.2rem;}
  .search-bar .change{ margin-left:0.2rem;flex:1;/*这里设置为占比1，填充满剩余空间*/}

  .search-bar input{ border: none; background: #EEE; width: 100%; text-indent: 15px; height: 30px; margin:10px 0px; border-radius: 15px;}
  .search-bar button{ width:60px; height: 30px; margin: 10px 0px;}
</style>
