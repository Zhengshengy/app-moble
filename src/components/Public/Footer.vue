<template>
<div>
  <van-tabbar v-model="active" active-color="#ed582e">
    <van-tabbar-item icon="wap-home" size="30" to="/">社区</van-tabbar-item>
    <van-tabbar-item icon="video-o" size="30" to="/video">影视</van-tabbar-item>
    <van-tabbar-item icon="search" size="30" to="/original">原创</van-tabbar-item>
    <van-tabbar-item icon="setting-o" size="30" to="/discover">发现</van-tabbar-item>
    <van-tabbar-item icon="user-o" size="30" to="/center">我的</van-tabbar-item>
  </van-tabbar>
</div>
</template>
<script>
import { Tabbar, TabbarItem,Icon  } from 'vant';

export default {
  name:'Footer',
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  data(){
    return{
      active:0
    }
  },
  created(){
  },
  methods:{
  }
}
</script>
