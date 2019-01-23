<template lang="html">
  <div class="container-fluid">
    <van-nav-bar title="主播列表" left-text="" left-arrow @click-left="$router.back(-1)"/>
    <div class="container mt-15">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-row type="flex" justify="space-between"  class="anchor" gutter="20">
        <van-col span="6"  v-for="(item,index) in anchor" :key="index" class="mb-15" >
          <div @click="anchormain(item.id)" class="text-center">
            <img class="img-fluid rounded" :src="item.avatar" alt="">
            <div class="mt-5">{{item.name}}</div>
          </div>
        </van-col>
      </van-row>
      </van-list>
    </div>
  </div>
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
      axios.get("static/data/anchor.json").then(e=>{
        this.anchor = e.data
      });
    },
    data(){
      return {
        anchor:[],
        loading: false,
        finished: false
      }
    },
    methods:{
      anchormain(id){
        this.$router.push({path:'/anchor/detail',query:{id:id}})
      },
      onLoad() {
        setTimeout(() => {
          axios.get('static/data/anchor1.json').then(e=>{
            e.data.forEach(item=>{
              this.anchor.push(item)
            })
          })
          this.loading = false;
          this.finished = true;
        }, 500);
      }
    }
  }
</script>

<style lang="css">
  .anchor{
    flex-wrap: wrap;
  }
</style>
