<!--//帖子详情-->
<template>
  <transition name="fade">
  <div class="container-fluid" style="margin-bottom: 65px">
    <van-nav-bar title="帖子详情" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-row gutter="20" class="mt-15 mb-15" v-if="data.user">
        <van-col span="4">
          <img class="img-fluid rounded headimg" :src="data.user.avatar" alt="" @click="toUserPage(data.user.id)">
        </van-col>
        <van-col span="12">
          <div>{{data.user.name}}</div>
          <div></div>
        </van-col>
        <van-col span="8" class="text-right">
          <div v-if="follow==false">
            <van-button size="small" round type="danger" @click="changeFollow">关注</van-button>
          </div>
          <div v-else>
            <van-button round size="small" type="default" @click="changeFollow">已关注</van-button>
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col>
          {{data.content}}
          <div v-for="item in data.images">
             <img class="mt-15 img-fluid img-thumb" :src="item" alt="">
          </div>
        </van-col>
      </van-row>
      <h3 class="column-title">最新评论</h3>
      <div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <CommentComponent :dataTransfer="comments"></CommentComponent>
        </van-list>
      </div>
    </div>

    <PublishComponent />
  </div>
  </transition>
</template>

<script>
import { NavBar,Col,Row,Button,Icon,Field,List } from 'vant';
import PublishComponent from '@/components/Public/PublishComponent'
import Comment from "../center/comment";
import CommentComponent from "../Public/CommentComponent";
import axios from 'axios'
import dateDiff from '@/utils/dateDiff'
export default {
  name:'postDetails',
  components:{
    PublishComponent,
    CommentComponent,
    Comment,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [Field.name]:Field,
    [List.name]:List,
  },
  data(){
    return{
      value:'',
      comments:[],
      data: {},
      loading: false,
      finished: false,
      follow: false
    }
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
    let id = this.$route.query.id
    axios.get('static/data/posts.json').then(e=>{
      this.data = e.data.filter(item=>{
        return item.id == id
      })
      this.data = this.data[0]
    })
    axios.get('static/data/comment.json').then(e=>{
      this.comments = e.data.filter(item=>{
        return item.post_id == id
      })
      this.comments.forEach(v=>{
        v.create_time = dateDiff.dateDiff(v.crate_time)
      })
      this.$store.state.commentPraise.commentList = this.comments
    })
  },
  methods:{
    toUserPage(uid){
      this.$router.push({path:'/posts/userPage',query:{uid:uid}})
    },
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/comment1.json').then(e=>{
          e.data.forEach(item=>{
            item.create_time = dateDiff.dateDiff(item.create_time)
            this.comments.push(item)
          })
        })
        this.$store.state.commentPraise.commentList = this.comments
        this.loading = false;
        this.finished = true;
      }, 2000);
    },
    changeFollow(){
      this.follow = !this.follow
    }
  }
}
</script>

<style scoped>

</style>
