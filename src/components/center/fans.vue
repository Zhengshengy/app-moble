<template>
  <!--我的粉丝-->
  <div class="container-fluid">
    <van-nav-bar title="我的粉丝" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
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
    </div>
  </div>
</template>

<script>
import { NavBar,Col,Row,Button } from 'vant';
export default {
  name: "MyFans",
  components: {
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Button.name]:Button
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
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/2.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/3.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/4.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/5.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/6.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/7.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/8.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/9.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
        },
        {
          avatar:"../../../static/images/avatar/10.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          follow:"关注"
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

<style scoped lang="scss">
  .cen-top{
    display: flex;
  }
  .photo-20{
    width: 20px;
    height: 20px;
  }
</style>
