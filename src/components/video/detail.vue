<!--视频详情-->
<template>
  <div>
    <van-nav-bar title="视频详情" left-arrow @click-left="$router.back(-1)"/>
    <PlayVideoComponent />
    <div class="container">
      <van-row class="mt-15">
        <van-col span="16">更新至15集/全30集</van-col>
        <van-col span="8" class="text-right">8.3分</van-col>
      </van-row>
      <van-row class="mt-5"><van-col span="3">内地</van-col>
        <van-col span="4">2018年</van-col>
        <van-col span="11">爱情/偶像/都市</van-col>
        <van-col span="6" class="text-right">1408次下载</van-col>
      </van-row>

      <h3 class="column-title">主要演员</h3>

      <van-row class="mt-5">
        <van-col span="24">刘诗诗/吴奇隆</van-col>
      </van-row>

      <h3 class="column-title">剧情介绍</h3>

      <van-row class="mt-5">
        <van-col span="24">电视剧《原来你还在这里》是根据辛夷坞同名小说改编，由林玉芬执导，杨子姗、韩东君、李程彬和蓝盈莹等联袂主演的现代都市剧。原来你还在这里剧情讲述了程铮对爱情真诚执着，爱上了倔强、自尊心强的苏韵锦两人演绎了一段纯粹又纠结的爱情故事。</van-col>
      </van-row>

      <h3 class="column-title">最新评论</h3>

      <CommentComponent :dataTransfer="comments" />
      <PublishComponent />
    </div>

  </div>
</template>

<script>
import { NavBar,Col,Row,Field,Icon } from 'vant';
import CommentComponent from '@/components/Public/CommentComponent'
import PublishComponent from '@/components/Public/PublishComponent'
import PlayVideoComponent from '@/components/Public/PlayVideoComponent'
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
    PlayVideoComponent
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  data(){
    return{
      value:"",
      comments:[{
        src:'static/images/avatar/1.png',name:'陈伟霆',time:'3分钟之前',con:'景色不错有机会我也去看看'
      },
        {
        src:'static/images/avatar/2.png',name:'陈冠希',time:'3分钟之前',con:'景色不错有机会我也去看看'
      },
        {
        src:'static/images/avatar/3.png',name:'陈小春',time:'3分钟之前',con:'景色不错有机会我也去看看'
      }
      ],
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
