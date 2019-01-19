<template>
  <div class="container-fluid">
    <van-nav-bar title="我的评论" :border="false" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-tabs v-model="active">
        <van-tab title="帖子">
          <PostComponent :dataTransfer="posts" />
        </van-tab>
        <van-tab title="美图">
          <novel-component :novel="novels"></novel-component>
        </van-tab>
        <van-tab title="原创">
          <original-component :blocks="blocks"></original-component>
        </van-tab>
        <van-tab title="电影">

        </van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
  import { NavBar, Col,Row, Tab, Tabs } from 'vant';
  import NovelComponent from "../Public/NovelComponent";
  import VideoComponent from "../Public/CommentComponent";
  import OriginalComponent from "../Public/OriginalComponent";
  import PostComponent from "../Public/PostComponent";

  export default {
    components: {
      VideoComponent,
      NovelComponent,
      OriginalComponent,
      PostComponent,
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false)
    },
    data(){
      return {
        active:"0",
        posts:[{
          id:1,heard:'static/home/111.jpg',pic:[{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'}],name:'赵铁柱',time:'3分钟前',con:'以前从来不过生日的 那个半年前说要给我过人生中第一个生日的人已经离开了，自己过得也挺好的。'
        }],
        novels:[
          {
            pic:"../../../static/images/novel/1.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/2.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/3.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/4.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/5.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/6.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/7.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/8.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/1.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/2.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          }
        ],
        videoList:[
          {src:'static/images/videos/1.png',name:'回到明朝当王爷'},
          {src:'static/images/videos/2.png',name:'我的保姆'},
          {src:'static/images/videos/3.png',name:'原来你还在这里'},
          {src:'static/images/videos/4.png',name:'我们的四十年'}
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
    }
  }
</script>

<style scoped>

</style>
