<template>
  <!--我的粉丝-->
  <div class="container-fluid">
    <van-nav-bar title="我的粉丝" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <user-list-component :dataTransfer="users"></user-list-component>
    </div>
  </div>
</template>

<script>
import { NavBar} from 'vant';
import UserListComponent from "../Public/UserListComponent";
export default {
  name: "MyFans",
  components: {
    UserListComponent,
    [NavBar.name]:NavBar
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
