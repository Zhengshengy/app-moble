<!--原创关注-->
<template>
<div class="container-fluid">
  <div class="container">
    <van-row class="header" type="flex" justify="space-between">
      <van-col span="3">
        <van-icon name="search" size="0.3rem"/>
      </van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/' }">热门</router-link></van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/news' }">最新</router-link></van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/focus' }">关注</router-link></van-col>
      <van-col span="3" class="text-right">
        <router-link to="/original/submit">
        <van-icon name="fire-o" size="0.3rem"/>
        </router-link>
      </van-col>
    </van-row>
  </div>
  <div>
    <div v-if="Unconcerned">
      <div class="text-center mt-50">
        <img class="photo-140" src="../../../static/img/focus.png" alt="">
        <h3 class="my-20">暂无关注</h3>
      </div>
      <div class="mt-35 container">
        <h3 class="mb-15 text-center">推荐关注</h3>
        <user-component :dataTransfer="focus"></user-component>
      </div>
      <div class="my-30">
        <p @click="Refresh" class="text-center">关注用户后点击此处刷新</p>
      </div>
    </div>
  </div>
  <div v-if="focusSuccess">
    <original-component :dataTransfer="blocks"></original-component>
  </div>
</div>
</template>

<script>
import { Tab, Tabs, Icon, Row, Col,Button } from 'vant';
import OriginalComponent from "../Public/OriginalComponent";
import UserComponent from "../Public/UserComponent";

export default {
  name: 'app',
  data() {
    return {
      focusSuccess:false,
      Unconcerned:true,
      blocks: [
        {
          "src": "./static/images/water/1.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/1.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/2.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/2.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/3.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/3.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/4.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/4.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/5.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/5.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/6.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/6.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/7.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/7.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/8.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/8.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/9.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/9.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/10.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/10.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/11.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/11.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/12.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/12.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/13.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/13.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/14.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/14.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/15.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/15.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/16.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/16.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/17.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/17.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/18.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/18.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/19.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/19.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        },
        {
          "src": "./static/images/water/20.jpg",
          "href": "https://www.baidu.com",
          "avatar": "./static/images/avatar/20.png",
          "name":"爱是信仰",
          "info": "一些图片描述文字"
        }
      ],
      focus:[
        {"src":"../../../static/images/avatar/1.png","name":"陈伟霆"},
        {"src":"../../../static/images/avatar/2.png","name":"陈伟霆"},
        {"src":"../../../static/images/avatar/3.png","name":"陈伟霆"},
        {"src":"../../../static/images/avatar/4.png","name":"陈伟霆"},
        {"src":"../../../static/images/avatar/5.png","name":"陈伟霆"},
        {"src":"../../../static/images/avatar/6.png","name":"陈伟霆"},
        {"src":"../../../static/images/avatar/7.png","name":"陈伟霆"},
        {"src":"../../../static/images/avatar/8.png","name":"陈伟霆"}
      ]
    }
  },
  components: {
    OriginalComponent,
    UserComponent,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    [Row.name]:Row,
    [Col.name]:Col,
    [Button.name]:Button
  },
  methods: {
    Refresh(){
      this.focusSuccess = true;
      this.Unconcerned = false
    }
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', true)
  }
}
</script>
<style scoped>
.my-30 {
  margin-top: 20px;
  margin-bottom: 70px;
}
</style>

