<!--//帖子详情-->
<template>
  <div class="container-fluid">
    <van-nav-bar title="帖子详情" left-arrow @click-left="$router.back(-1)"/>

    <div class="container">
      <van-row gutter="20" class="mt-15 mb-15">
        <van-col span="4">
          <img class="img-fluid rounded headimg" :src="user.head" alt="" @click="$router.push('/posts/userPage')">
        </van-col>
        <van-col span="12">
          <div>{{user.name}}</div>
          <div></div>
        </van-col>
        <van-col span="8" class="text-right"><van-button round type="danger" size="small">关注</van-button></van-col>
      </van-row>

      <van-row>
        <van-col>
          {{data.trendstext}}
          <img class="mt-15 img-fluid img-thumb" :src="data.trendsimg" alt="">
        </van-col>
      </van-row>
      <h3 class="column-title">最新评论</h3>
      <div>
        <CommentComponent :dataTransfer="comments"></CommentComponent>
      </div>
      <PublishComponent />
  </div>
</div>
</template>

<script>
import { NavBar,Col,Row,Button,Icon,Field } from 'vant';
import PublishComponent from '@/components/Public/PublishComponent'
import Comment from "../center/comment";
import CommentComponent from "../Public/CommentComponent";
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
  },
  data(){
    return{
      value:'',
      comments:[
        {
          src:'static/images/avatar/1.png',name:'陈伟霆',time:'3分钟之前',con:'景色不错有机会我也去看看'
        },
        {
          src:'static/images/avatar/2.png',name:'陈冠希',time:'3分钟之前',con:'景色不错有机会我也去看看'
        },
        {
          src:'static/images/avatar/3.png',name:'陈小春',time:'3分钟之前',con:'景色不错有机会我也去看看'
        }
      ],
      data: {
          "trendstext":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了，自己给自己过也挺好的",
          "trendsimg":"../../../static/home/img1.jpg"
        },
      user:{
        "name":"金蕾蕾",
        "head":"../../../static/home/head.png"
      }
    }
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
