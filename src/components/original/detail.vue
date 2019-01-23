<!--原创详情-->
<template>
  <transition name="fade">
  <div class="container-fluid" style="margin-bottom:65px">
    <van-nav-bar title="视频详情" left-arrow @click-left="$router.back(-1)"/>
    <PlayVideoComponent :dataTransfer="video" v-if="video[0]" />
    <div class="container">
      <van-row class="mt-15" v-if="video[0]">
        <van-col span="16">播放次数：{{video[0].plays}}次</van-col>
        <van-col span="8" class="text-right">评分：{{video[0].score}}</van-col>
      </van-row>
      <h3 class="column-title">最新评论</h3>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <CommentComponent :dataTransfer="comments" />
      </van-list>
    </div>
    <PublishComponent />
  </div>
  </transition>
</template>

<script>
  import { NavBar,Col,Row,Field,Icon,List } from 'vant';
  import CommentComponent from '@/components/Public/CommentComponent'
  import PublishComponent from '@/components/Public/PublishComponent'
  import PlayVideoComponent from '@/components/Public/PlayVideoComponent'
  import axios from 'axios'
  import DateDiff from '@/utils/dateDiff'
  export default {
    name:'OriginalDetails',
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
        video:[],
        comments:[],
        loading: false,
        finished: false
      }
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false)
      let id = this.$route.query.id
      axios.get("static/data/original.json").then(e=>{
        this.video = e.data.filter(item=>{
            return item.id == id
          })
      });
      axios.get('static/data/comment.json').then(e=>{
      this.comments = e.data.filter(item=>{
        return item.post_id == id
      })
      this.comments.forEach(v=>{
        v.create_time = DateDiff.dateDiff(v.crate_time)
      })
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
