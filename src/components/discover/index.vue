<template>
  <transition name="fade">
<div class="container-fluid" style="margin-bottom:65px;">
  <van-nav-bar title="发现" :border="false"/>
  <van-row gutter="20" class="mt-15 mb-15">
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/nearby'}">
      <van-icon name="map-marked" size="35px"/>
      <div>附近的人</div>
      </router-link>
    </van-col>
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/album'}">
      <van-icon name="service"  size="35px"/>
      <div>有声小说</div>
      </router-link>
    </van-col>
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/comic'}">
      <van-icon name="photo"  size="35px"/>
      <div>图片动漫</div>
      </router-link>
    </van-col>
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/download'}">
      <van-icon name="fire"  size="35px"/>
      <div>应用下载</div>
      </router-link>
    </van-col>
  </van-row>

  <div class="container">
    <van-row>
      <van-col span="12">
        <h3 class="column-title">推荐主播</h3>
      </van-col>
      <van-col span="12">
        <p class="column-title text-right" @click="goAnchorIndex">更多</p>
      </van-col>
    </van-row>
    <van-swipe :autoplay="3000" class="anchor">
      <van-swipe-item v-for="(obj,index) in newAnchor" :key="index" :show-indicators="false"	>
        <van-row gutter="20">
          <van-col span="8" v-for="(item,index) in obj.item" :key="index">
            <div class="item img-thumb">
              <img class="img-fluid rounded" :src="item.avatar" @click="linkDetail(item.id)">
              <div class="text-center name">{{item.name}}</div>
              <van-button round size="small">关注</van-button>
            </div>
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>

    <h3 class="column-title">最近更新</h3>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <novel-component :dataTransfer="novels"></novel-component>
    </van-list>
  </div>
</div>
  </transition>
</template>

<script>
import {NavBar, Icon, Col, Row, Swipe, SwipeItem, Button,List } from 'vant';
import NovelComponent from "../Public/NovelComponent";
import axios from 'axios'

export default {
  components:{
    NovelComponent,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    [List.name]: List
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', true);
    axios.get('static/data/novel.json').then(e=>{
      this.novels = e.data
    })
    axios.get('static/data/anchor.json').then(e=>{
      this.anchor = e.data
      this.anchorSlice(this.anchor)
    })
  },
  methods:{
    linkDetail(id){
      this.$router.push({path:'/anchor/detail',query:{uid:id}})
    },
    goAnchorIndex(){
      this.$router.push("/anchor")
    },
    anchorSlice(data){
      for (let i=0;i<data.length;i+=3){
        let obj = {}
        obj.item = data.slice(i,i+3)
        this.newAnchor.push(obj)
      }
    },
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/novel1.json').then(e=>{
          e.data.forEach(item=>{
            this.novels.push(item)
          })
        })
        this.loading = false;
        this.finished = true;
      }, 2000);
    }
  },
  data(){
    return {
      novels:[],
      anchor:[],
      loading: false,
      finished: false,
      newAnchor:[]
    }
  }
}
</script>

<style scoped lang="css">
.anchor .van-col .item{ background: #EEE; text-align: center; padding: 0.2rem;}
.anchor .van-col .item .name{ padding: 0.1rem 0rem}
.container-fluid{overflow: hidden;}
</style>
