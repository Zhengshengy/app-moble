<template>
  <!--附近的人-->
  <div class="container-fluid">
    <van-nav-bar title="附近的人" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <div  @click="usercenter" class="mt-15" v-for="(item,index) in users" :key="index">
        <van-row gutter="20">
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
            <p>{{item.distance}}</p>
          </van-col>
        </van-row>
      </div>
      </div>
  </div>
</template>

<script>
import { NavBar,Col,Row } from 'vant';
export default {
  name: "nearby",
  components: {
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row
  },
  created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false)
  },
  data(){
    return {
      users:[
        {
          avatar:"../../../static/images/avatar/1.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/2.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/3.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/4.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/5.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/6.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/7.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/8.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/9.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
        },
        {
          avatar:"../../../static/images/avatar/10.png",
          username:"人走茶凉",
          sex:"../../static/img/usersex.png",
          grade:"无证驾驶",
          usertosay:"所谓的天幻所谓的天幻所谓的天幻所谓的天幻",
          distance:"100米以内"
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
.cen-top{
  display: flex;
}
.photo-20{
  width: 20px;
  height: 20px;
}
</style>
