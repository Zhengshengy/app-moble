<template>
  <div class="container-fluid">
    <van-nav-bar title="我的关注" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-tabs v-model="active" :line-width="48">
      <van-tab title="用户">
        <div  @click="usercenter" class="mt-15" v-for="(item,index) in users" :key="index">
          <van-row type="flex" gutter="20" align="center">
            <van-col span="5">
              <img class="img-fluid rounded" :src="item.avatar" alt="">
            </van-col>
            <van-col span="14">
              <div class="cen-top">
                <h3>{{item.username}}</h3>
                <img class="img-fluid photo-20 mx-10" :src="item.sex" alt="">
                <p>{{item.grade}}</p>
              </div>
              <div class="cen-bot">
                <p>{{item.usertosay}}</p>
              </div>
            </van-col>
            <van-col span="5">
              <van-button size="mini" round type="danger">{{item.follow}}</van-button>
            </van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="主播"></van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
import { NavBar,Col,Row,Button, Tab, Tabs } from 'vant';
export default {
  name: "concern",
  components: {
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Button.name]:Button,
    [Tab.name]: Tab,
    [Tabs.name]:Tabs
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  data(){
    return {
      active: 0,
      users:[
        {
          avatar:"../../../static/images/avatar/1.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/2.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/3.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/4.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/5.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/6.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/7.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/8.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/9.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
        {
          avatar:"../../../static/images/avatar/10.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"取消"
        },
      ]
    }
  },
  methods:{
    usercenter(){
      this.$router.push("/posts/userPage")
    }
  }
}
</script>

<style scoped>
  .van-button--danger{
    background: #999999;
    border:none;
  }
  .cen-top{
    display: flex;
  }
  .photo-20{
    width: 20px;
    height: 20px;
  }
  /*#user-list{*/
    /*flex: 1;*/
    /*ul{*/
      /*border-top:2px solid #eeeeee;*/
      /*li{*/
        /*height: 80px;*/
        /*border-bottom:2px solid #eeeeee;*/
        /*a{*/
          /*display: flex;*/
          /*height: 80px;*/
          /*justify-content: space-between;*/
          /*align-items: center;*/
        /*}*/
        /*!*左*!*/
        /*img{*/
          /*display: block;*/
        /*}*/
        /*!*中*!*/
        /*.list-cen{*/
          /*margin-left:.14rem;*/
          /*margin-right: .2rem;*/
          /*flex: 1;*/
          /*.cen-top{*/
            /*display: flex;*/
            /*align-items: center;*/
            /*img{*/
              /*margin:0 .1rem;*/
            /*}*/
            /*h3{*/
              /*color:#666666;font-weight: 100;*/
              /*line-height: .19rem;*/
            /*}*/
            /*p{*/
              /*display: block;*/
              /*height: .15rem;*/
              /*line-height:.15rem;*/
              /*background: #fff200;*/
              /*color:#000;*/
              /*padding:0 .05rem;*/
              /*font-size: .05rem;*/
              /*border-radius: .15rem;*/

            /*}*/
          /*}*/
          /*.cen-bot{*/
            /*margin-top:.13rem;*/
            /*p{*/
              /*width: 2.5rem;*/
              /*white-space: nowrap;*/
              /*overflow: hidden;*/
              /*font-size: .11rem;color:#999999;*/
            /*}*/
          /*}*/
        /*}*/
        /*!*右*!*/
        /*.list-rig p{*/
          /*font-size: .11rem;*/
          /*color:#fff;*/
          /*background: #999999;*/
          /*width: .6rem;*/
          /*height: .25rem;*/
          /*line-height: .25rem;*/
          /*text-align: center;*/
          /*border-radius: .25rem;*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
</style>
