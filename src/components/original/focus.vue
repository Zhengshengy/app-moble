<!--原创关注-->
<template>
  <transition name="fade">
<div class="container-fluid" style="margin-bottom:65px">
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <div class="container">
    <van-row class="header" type="flex" justify="space-between">
      <van-col span="3">
        <van-icon name="search" size="0.3rem"/>
      </van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/' }">热门</router-link></van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/news' }">最新</router-link></van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/focus' }">关注</router-link></van-col>
      <van-col span="3" class="text-right">
        <router-link to="/original/submit">
        <van-icon name="fire-o" size="0.3rem"/>
        </router-link>
      </van-col>
    </van-row>
  </div>

  <div class="container" v-if="Unconcerned">
    <van-row>
      <van-col span="8" offset="8" class="text-center">
        <img class="img-fluid rounded" src="../../assets/images/no_follow_icon.png" alt="">
        <div class="my-20">暂无关注</div>
      </van-col>
    </van-row>

    <div class="text-center">推荐关注</div>

    <user-component class="my-20" :dataTransfer="focus"></user-component>

    <div @click="Refresh" class="text-center">关注用户后点击此处刷新</div>
  </div>

  <div v-if="focusSuccess">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <original-component :dataTransfer="blocks"></original-component>
    </van-list>
  </div>
  </van-pull-refresh>
</div>
  </transition>
</template>

<script>
import { Tab, Tabs, Icon, Row, Col,Button,PullRefresh,Toast,List } from 'vant';
import OriginalComponent from "../Public/OriginalComponent";
import UserComponent from "../Public/UserComponent";
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      focusSuccess:false,
      Unconcerned:true,
      blocks: [],
      focus:[],
      isLoading: false,
      loading: false,
      finished: false
    }
  },
  components: {
    OriginalComponent,
    UserComponent,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    [Row.name]:Row,
    [Col.name]:Col,
    [Button.name]:Button,
    [PullRefresh.name]: PullRefresh,
    [Toast.name]: Toast,
    [List.name]: List,
  },
  methods: {
    Refresh(){
      this.focusSuccess = true;
      this.Unconcerned = false
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        }, 500);
     },
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/original1.json').then(e=>{
          e.data.forEach(item=>{
            this.blocks.push(item)
          })
         })
          this.loading = false;
          this.finished = true;
      }, 2000);
    }
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', true)
    axios.get("static/data/actor.json").then(e=>{
      console.log(e)
      this.focus = e.data
    });
    axios.get('static/data/original.json').then(e=>{
      this.blocks = e.data

    })
  }
}
</script>
<style scoped>
.my-30 {
  margin-top: 20px;
  margin-bottom: 70px;
}
</style>
