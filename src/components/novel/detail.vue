<template lang="html">
  <div class="container-fluid" style="margin-bottom: 65px">
    <van-nav-bar title="小说详情" left-text="" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-row>
        <van-col class="my-15" span="16" offset="8">
          <p>01我为王者巨人下</p>
        </van-col>
        <van-col span="16" offset="4">
          <img class="img-thumb img-fluid" src="../../../static/images/novel/1.png" alt="">
        </van-col>
      </van-row>

      <van-slider class="mt-30" v-model="value" active-color="#f44">
        <div slot="button" class="custom-button photo-10 rounded bg-danger"></div>
      </van-slider>
      <div class="my-10 text-danger clearfloat">
        <span class="float-left">00:20</span>
        <span class="float-right">13:06</span>
      </div>
      <van-row type="flex" justify="center" align="center" guffer="20">
        <van-col span="4"><van-icon name="arrow-left" size="30px"/></van-col>
        <van-col span="6"><van-icon name="play" size="50px"/></van-col>
        <van-col span="2"><van-icon name="arrow" size="30px"/></van-col>
      </van-row>







      <van-row gutter="20" class="my-30">
        <van-col span="4">
          <img class="img-fluid rounded" src="../../../static/images/avatar/1.png" alt="">
        </van-col>
        <van-col span="14">
          <h3>完美情人</h3><p>个人认证、有声小说主播</p>
        </van-col>
        <van-col span="6">
          <van-button round type="danger" size="mini">关注</van-button>
        </van-col>
      </van-row>

      <h3 class="column-title">最新评论</h3>
      <CommentComponent :dataTransfer="comments" />
    </div>
    <PublishComponent />
  </div>
</template>

<script>
  import { NavBar,Col,Row,Slider,Button,Icon} from 'vant';
  import CommentComponent from '@/components/Public/CommentComponent'
  import PublishComponent from '@/components/Public/PublishComponent'
  export default {
    components:{
      CommentComponent,
      PublishComponent,
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Slider.name]:Slider,
      [Button.name]:Button,
      [Icon.name]:Icon
    },
    created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false)
    },
    data() {
      return {
        value: 20,
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
      }
    },
    methods: {
      onChange(value) {
        this.$toast('当前值：' + value);
      }
    }
  }
</script>

<style lang="css">
  .clearfloat{
    overflow: hidden;
  }
</style>
