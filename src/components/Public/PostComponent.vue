<template>
  <div class="posts" >
    <div v-for="item in dataTransfer" class="mb-15" :key="item.id">
        <div class="top" v-if="item.user">
          <van-row gutter="20">
          <van-col span="4">
            <img :src="item.user.avatar" class="img-fluid rounded" @click="touserpage(item.user.id)">
          </van-col>
          <van-col span="20">
            <div>
              <div style="font-size: 14px">{{item.user.name}}</div>
              <div style="color: #a3a4a7">{{item.crate_time}}</div>
            </div>
          </van-col>
        </van-row>
        </div>
        <div class="con" @click="topost(item.id)">
          <p class="conmain">
            {{item.content}}
          </p>
          <div style="margin: 10px 0 10px">
                <van-row gutter="10">
              <van-col span="8" v-for="(i,index) in item.images" :key="index">
                <img class="img-fluid img-thumb" :src="i" alt="" >
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="bottom">
          <van-row gutter="10">
            <van-col span="8">
              <div v-if="item.praise==false" @click="praise(item.id)">
                <van-icon name="star-o" size="16px" style="vertical-align: middle;float: left;margin-right: 10px"  /><span style="vertical-align: middle;float: left">点赞</span>
              </div>
              <div v-else @click="praise(item.id)">
                <van-icon name="star" color="#ff976a" size="16px" style="vertical-align: middle;float: left;margin-right: 10px" /><span style="vertical-align: middle;float: left">已赞</span>
              </div>
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
  import {Row, Col,Icon,List } from 'vant'
  import {mapState,mapGetters,mapActions} from 'vuex';
  export default {
    name:'PostComponent',
    components:{
      [Row.name]:Row,
      [Col.name]:Col,
      [Icon.name]:Icon,
      [List.name]:List,
    },
    data(){
      return{
        num:0
      }
    },
    props:{
      dataTransfer:{
        type: Array,
        required: true
      },
      // index:{
      //   type: Number,
      //   required: true
      // }
    },
    methods:{
      ...mapActions('postPraise',[
          'getStar'
      ]),
      topost(id){
        this.$router.push({path:'/posts/detail',query:{id:id}})
      },
      touserpage(uid){
        this.$router.push({path:'/posts/userPage',query:{uid:uid}})
      },
      praise(id){
        this.$store.dispatch('postPraise/getStar',id)
      }
    },
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
