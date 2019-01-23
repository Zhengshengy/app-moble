<template>
  <transition name="fade">
  <div class="container-fluid">
    <van-nav-bar title="应用下载" left-text="" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-row gutter="20" class="mt-15" v-for="(item,index) in application" :key="index">
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
      </van-list>
    </div>
  </div>
  </transition>
</template>

<script>
import { NavBar,Col,Row,List } from 'vant';
import axios from 'axios'
export default {
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [List.name]:List
  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', false);
    axios.get('static/data/application.json').then(e=>{
      this.application = e.data
    })
  },
  data(){
    return {
      application:[],
      loading: false,
      finished: false
    }
  },
  methods:{
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/application1.json').then(e=>{
          e.data.forEach(item=>{
            this.application.push(item)
          })
        })
        this.loading = false;
        this.finished = true;
      }, 3000);
    }
  }
}
</script>

<style lang="css">
</style>
