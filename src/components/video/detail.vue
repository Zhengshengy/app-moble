<!--视频详情-->
<template>
  <transition name="fade">
  <div class="container-fluid" style="margin-bottom:65px">
    <van-nav-bar title="视频详情" left-arrow @click-left="$router.back(-1)"/>
    <div>
      <PlayVideoComponent :dataTransfer="video" v-if="video[0]"/>
      <div class="container">
        <van-row class="mt-15">
          <van-col span="16">更新至{{data.episodes}}集/全{{data.all_episodes}}集</van-col>
          <van-col span="8" class="text-right">{{data.score}}分</van-col>
        </van-row>
        <van-row class="mt-5"><van-col span="3">{{data.tag_area}}</van-col>
          <van-col span="4">{{data.tag_year}}</van-col>
          <van-col span="11">{{data.tag_classify}}</van-col>
          <van-col span="6" class="text-right">{{data.play_count}}次下载</van-col>
        </van-row>
        <h3 class="column-title">主要演员</h3>
        <van-row class="mt-5" v-if="data.actor">
          <van-col span="24">{{data.actor[0].name}}/{{data.actor[1].name}}</van-col>
        </van-row>
        <h3 class="column-title">剧情介绍</h3>
        <van-row class="mt-5">
          <van-col span="24">{{data.content}}</van-col>
        </van-row>

      <h3 class="column-title">最新评论</h3>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <CommentComponent :dataTransfer="comments"/>
      </van-list>
      </div>
    </div>
    <PublishComponent/>
  </div>
  </transition>
</template>

<script>
import { NavBar,Col,Row,Field,Icon,List } from 'vant';
import axios from 'axios'
import CommentComponent from '@/components/Public/CommentComponent'
import PublishComponent from '@/components/Public/PublishComponent'
import PlayVideoComponent from '@/components/Public/PlayVideoComponent'
import DateDiff from '@/utils/dateDiff'
export default {
  name:'videoDetails',
  components:{
    PublishComponent,
    CommentComponent,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Field.name]:Field,
    [Icon.name]:Icon,
    [List.name]:List,
    PlayVideoComponent
  },

  data(){
    return{
      value:"",
      video:[],
      comments:[],
      posts:[],
      data:{},
      loading: false,
      finished: false
    }
  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', false);
    let id = this.$route.query.id;
    axios.get("static/data/video.json").then(e=>{
      this.video = e.data.filter(item=>{
        return item.id == id
      });
      this.data = this.video[0]
    });
    axios.get('static/data/comment.json').then(e=>{
      this.comments = e.data.filter(item=>{
        return item.post_id == id
      })
      this.comments.forEach(v=>{
        v.create_time = DateDiff.dateDiff(v.crate_time)
      });
      this.$store.state.commentPraise.commentList = this.comments
    })
  },
  methods:{
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/comment1.json').then(e=>{
          e.data.forEach(item=>{
            item.create_time = DateDiff.dateDiff(item.create_time)
            this.comments.push(item)
          })
        })
        this.loading = false;
        this.finished = true;
        this.$store.state.commentPraise.commentList = this.comments
      }, 2000);
    }
  }
}
</script>

<style scoped>

</style>
