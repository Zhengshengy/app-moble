<!--//用户主页-->
<template>
  <div class="container-fluid">
    <van-nav-bar title="用户主页" left-arrow @click-left="$router.back(-1)" :border="false"/>
    <div class="container">
      <van-row>
        <van-col span="6" offset="9" >
          <img class="img-fluid rounded" src="../../../static/images/avatar/1.png" alt="">
        </van-col>
        <van-col span="12" offset="6" class="text-center my-10">
          小凤仙
          <img src="../../../static/img/usersex.png" alt="">
          <span class="bg-yellow">无证驾驶</span>
        </van-col>
        <van-col span="12" offset="6" class="text-center">
          这家伙很懒，什么也没留下
        </van-col>
        <van-col span="12" offset="6" class="text-center my-20">
          <van-button size="small" round type="danger">关注</van-button>
          <van-button size="small" round type="danger">发消息</van-button>
        </van-col>
      </van-row>
    </div>

    <van-tabs v-model="active" :line-width="45">
      <van-tab title="图片">
        <div class="container">
          <post-component :dataTransfer="posts"></post-component>
        </div>
      </van-tab>
      <van-tab title="视频">
        <original-component :dataTransfer="blocks"></original-component>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar,Col,Row,Icon,Tab, Tabs,Button } from 'vant';
import PostComponent from "../Public/PostComponent";
import OriginalComponent from "../Public/OriginalComponent";

export default {
  name:'userpage',
  components:{
    PostComponent,
    OriginalComponent,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Button.name]:Button
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  props:{
    dataTransfer:Array,
    required: true
  },
  data(){
    return{
      active: 0,
      posts:[
        {
          id:1,
          heard:'static/home/111.jpg',
          pic:[
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'}
            ],
          name:'赵铁柱',
          time:'3分钟前',
          con:'以前从来不过生日的 那个半年前说要给我过人生中第一个生日的人已经离开了，自己过得也挺好的。'
        },
        {
          id:1,
          heard:'static/home/111.jpg',
          pic:[
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'}
          ],
          name:'赵铁柱',
          time:'3分钟前',
          con:'以前从来不过生日的 那个半年前说要给我过人生中第一个生日的人已经离开了，自己过得也挺好的。'
        },
        {
          id:1,
          heard:'static/home/111.jpg',
          pic:[
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'}
          ],
          name:'赵铁柱',
          time:'3分钟前',
          con:'以前从来不过生日的 那个半年前说要给我过人生中第一个生日的人已经离开了，自己过得也挺好的。'
        },
        {
          id:1,
          heard:'static/home/111.jpg',
          pic:[
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'},
            {img:'static/img/img2.jpg'}
          ],
          name:'赵铁柱',
          time:'3分钟前',
          con:'以前从来不过生日的 那个半年前说要给我过人生中第一个生日的人已经离开了，自己过得也挺好的。'
        }
      ],
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
      ]
    }
  },
  methods:{
    topost(){
      this.$router.push('/posts/detail')
    }
  }
}
</script>

<style scoped>
</style>
