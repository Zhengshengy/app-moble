<!--原创详情-->
<template>
  <div>
    <van-nav-bar title="视频详情" left-arrow @click-left="$router.back(-1)"/>
    <img class="img-fluid" src="../../../static/images/videos/1.png" alt="">
    <div class="container">
      <van-row class="mt-15">
        <van-col span="16">播放次数：1408次</van-col>
        <van-col span="8" class="text-right">评分：8.3分</van-col>
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
