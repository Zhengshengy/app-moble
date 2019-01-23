<template>
  <transition name="fade">
  <div class="container-fluid">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-nav-bar title="演员" left-arrow @click-left="$router.back(-1)"/>
      <div class="container mt-15" >
          <van-row type="flex" justify="space-between"  class="actor" gutter="20">
            <van-col span="6"  v-for="(item,index) in actors" :key="index" >
              <div @click="actormain(item.id)">
                <img class="img-fluid rounded" :src="item.avatar" alt="">
                <div style="margin-top: 5px">{{item.name}}</div>
              </div>
            </van-col>
          </van-row>
      </div>
    </van-list>
  </div>
  </transition>
</template>
<script>
import { NavBar,Col,Row,List } from 'vant';
import axios from 'axios'
export default {
  name:'ActorIndex',
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [List.name]:List,
  },
  data(){
    return{
      actors:[],
      loading: false,
      finished: false
    }
  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', false);
    axios.get("static/data/actor.json").then(e=>{
      this.actors = e.data
    });
  },
  methods:{
    actormain(id){
      console.log(id)
      this.$router.push({path:'/video/actor/main',query:{id:id}})
    },
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/actor1.json').then(e=>{
          e.data.forEach(item=>{
            this.actors.push(item)
          })
         })
          this.loading = false;
          this.finished = true;
      },2000);
    }
  }
}
</script>
<style scoped>
  .actor{
    flex-wrap: wrap;
    text-align: center;
  }
</style>
