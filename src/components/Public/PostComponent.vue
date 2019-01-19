<template>
  <div class="posts" >
    <div v-for="(item,index) in dataTransfer" class="mb-15" :key="index">
        <div class="top" >
          <van-row gutter="20">
          <van-col span="4">
            <img src="../../../static/images/avatar/11.png" class="img-fluid rounded" @click="touserpage">
          </van-col>
          <van-col span="8">
            <div>
              <div style="font-size: 14px">{{item.name}}</div>
              <div style="color: #a3a4a7">{{item.time}}</div>
            </div>
          </van-col>
        </van-row>
        </div>
        <div class="con" @click="topost">
          <p class="conmain">
            {{item.con}}
          </p>
          <div style="margin: 10px 0 10px">
                <van-row gutter="10">
              <van-col span="8" v-for="(i,index) in item.pic" :key="index">

                <img class="img-fluid img-thumb" :src="i.img" alt="" >
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="bottom">
          <van-row gutter="10">
            <van-col span="8">
                <van-icon name="star-o" size="16px" style="vertical-align: middle;float: left;margin-right: 10px"/><span style="vertical-align: middle;float: left">点赞</span>
            </van-col>
            <van-col span="8">
               <van-icon name="more-o" size="16px" style="vertical-align: middle;float: left;margin-left: 20px"/><span style="vertical-align: middle;float: left;margin-left: 10px">评论</span>
            </van-col>
            <van-col span="8" ><span style="vertical-align: middle;float: right">分享</span><van-icon name="share" size="16px" style="vertical-align: middle;float: right;margin-right: 10px"/></van-col>
          </van-row>
        </div>
      </div>
  </div>
</template>
<script>
  import {Row, Col,Icon } from 'vant'
  export default {
    name:'PostComponent',
    components:{
      [Row.name]:Row,
      [Col.name]:Col,
      [Icon.name]:Icon
    },
    props:{
      dataTransfer:Array,
      required: true
    },
    methods:{
      topost(){
        this.$router.push('/posts/detail')
      },
      touserpage(){
        this.$router.push('/posts/userPage')
      }
    }
  }
</script>
<style>
.posts{ margin: 0.2rem 0rem 0rem 0rem}
  .heardpic{
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  .con{
    margin-top: 10px;
  }
  .conmain{
    letter-spacing:1px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
