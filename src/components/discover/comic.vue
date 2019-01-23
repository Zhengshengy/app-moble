<template>
  <transition name="fade">
  <div class="container-fluid">
    <van-nav-bar title="图片动漫" left-arrow @click-left="$router.push('/discover')"/>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="comic">

      <van-tabs v-model="active" :swipe-threshold="7">
        <van-tab title="全部">

          <van-row gutter="20" class="container comic mt-15" type="flex" justify="space-between">
            <van-col span="12" v-for="(item,index) in comic" :key="index">
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
    </van-list>
  </div>
  </transition>
</template>

<script>
import { NavBar,Tab, Tabs, Row, Col,List } from 'vant';
import axios from 'axios'
export default {
  components:{
    [NavBar.name]:NavBar,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Row.name]:Row,
    [Col.name]:Col,
    [List.name]:List
  },
  created(){
    this.$emit('public_footer', false);
    this.$emit('public_header', false);
    axios.get('static/data/comic.json').then(e=>{
      this.comic = e.data
    })
  },
  methods:{
    linkDetail(){
      this.$router.push('/comic/detail')
    },
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/comic1.json').then(e=>{
          e.data.forEach(item=>{
            this.comic.push(item)
          })
        })
        this.loading = false;
        this.finished = true;
      }, 3000);
    }
  },
  data() {
    return {
      active: 0,
      comic:[],
      loading: false,
      finished: false
    }
  }
}
</script>

<style scoped>
.comic{
  flex-wrap: wrap;
}
</style>
