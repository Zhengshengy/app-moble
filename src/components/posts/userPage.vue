<!--//用户主页-->
<template>
  <transition name="fade">
  <div class="container-fluid">
    <van-nav-bar title="用户主页" left-arrow @click-left="$router.back(-1)" :border="false"/>
    <div class="container">
      <van-row>
        <van-col span="6" offset="9" >
          <img class="img-fluid rounded" :src="user.avatar" alt="">
        </van-col>
        <van-col span="12" offset="6" class="text-center my-10">
          {{user.name}}
          <img src="../../assets/img/usersex.png" alt="" v-if="user.sex==1">

          <van-tag round type="success">{{grade}}</van-tag>
        </van-col>
        <van-col span="12" offset="6" class="text-center">
          {{signature}}
        </van-col>
        <van-col span="12" offset="6" class="text-center my-20">
          <div v-if="follow==false">
            <van-button size="small" round type="danger" @click="changeFollow">关注</van-button>
          </div>
          <div v-else>
            <van-button round size="small" type="default" @click="changeFollow">已关注</van-button>
          </div>

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
  </transition>
</template>

<script>
import { NavBar, Col, Row, Icon, Tab, Tabs, Button, Tag } from 'vant';
import PostComponent from "../Public/PostComponent";
import OriginalComponent from "../Public/OriginalComponent";
import axios from 'axios'
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
    [Button.name]:Button,
    [Tag.name]: Tag
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
      posts:[],
      blocks: [],
      user:{},
      sex:'',
      grade:'',
      signature:'',
      uid:'',
      follow: false
    }
  },
  created(){
    this.uid = this.$route.query.uid
    axios.get('static/data/users.json').then(e=>{
      this.user = e.data.filter(item=>{
        return item.id == this.uid
      })
      this.user = this.user[0]
      if (this.user.grade == '0'){
        this.grade = '无证驾驶'
      }
      this.user.signature == ''? this.signature = '这家伙很懒，什么也没留下' :this.signature=this.user.signature
    });

    axios.get('static/data/posts.json').then(e=>{
      this.posts = e.data.filter(item=>{
        return item.user.id == this.uid
      });
      this.posts.forEach(value=>{
        value.crate_time = new Date(parseInt(value.crate_time) * 1000).toLocaleString().replace(/:\d{1,2}$/,'');
      });
      this.$store.state.postPraise.postsList = this.posts
    })
    axios.get('static/data/original.json').then(e=>{
      this.blocks = e.data.filter(item=>{
        return item.user.id == this.uid
      })
    })
  },
  methods:{
    topost(){
      this.$router.push({path:'/posts/detail',query:{uid:this.uid}})
    },
    changeFollow(){
      this.follow = !this.follow
    }
  }
}
</script>

<style scoped>
</style>
