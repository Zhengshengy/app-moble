<template>
  <div>
    <div  @click="usercenter" class="mt-15" v-for="(item,index) in dataTransfer" :key="index">
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
        <!--距离-->
        <p v-if="userdistance==true">{{item.distance}}</p>
        <!--关注-->
        <van-button v-else-if="userfollow==true" size="mini" round type="danger">{{item.follow}}</van-button>
        <!--取消-->
        <van-button v-else-if="usercancel==true" size="mini" round type="danger">{{item.cancel}}</van-button>
      </van-col>
    </van-row>
  </div>
  </div>
</template>

<script>
import { NavBar,Col,Row,Button } from 'vant';
export default {
  name: "UserListComponent",
  components: {
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Button.name]:Button
  },
  data(){
    return {
      userdistance:false,
      userfollow:false,
      usercancel:false
    }
  },
  props: {
    dataTransfer: {
      type: Array,
      required: true
    },
  },
  created(){
    let path = (this.$route.path)
    if (path == '/discover/nearby'){
      this.userdistance = true
    }else if (path == '/center/fans'){
      this.userfollow = true
    }else if(path == '/center/concern'){
      this.usercancel = true
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
.cen-top img{
  width: 20px;
  height: 20px;
}
</style>
