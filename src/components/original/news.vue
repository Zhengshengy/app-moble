<template>
  <!--最新原创-->
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
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <original-component :dataTransfer="blocks"></original-component>
  </van-list>
    </van-pull-refresh>
</div>
  </transition>
</template>

<script>
import { Tab, Tabs, Icon, Row, Col,PullRefresh,Toast,List } from 'vant';
import OriginalComponent from "../Public/OriginalComponent";
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      blocks: [],
      isLoading: false,
      loading: false,
      finished: false
    }
  },
  components: {
    OriginalComponent,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    [Row.name]:Row,
    [Col.name]:Col,
    [PullRefresh.name]: PullRefresh,
    [Toast.name]: Toast,
    [List.name]: List,
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', true)
    axios.get('static/data/original.json').then(e=>{
      this.blocks = e.data
    })
  },
  methods:{
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
  }
}
</script>

<style>
</style>
