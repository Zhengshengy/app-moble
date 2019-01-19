<template>
  <div>
      <van-nav-bar title="演员主页" left-arrow @click-left="$router.back(-1)"/>
      <div class="container" >
          <van-row gutter="20" class="mt-15">
              <van-col span="8">
                  <img src="../../../static/images/actor/1.png" alt="" class="img-fluid img-thumb">
              </van-col>
              <van-col span="16" >
                  <h3 style="margin-bottom: 10px">杨璐</h3>
                    <div style="margin-bottom: 5px">身高:174cm</div>
                   <div style="margin-bottom: 5px">体重:69kg</div>
                   <div style="margin-bottom: 5px">籍贯:陕西西安</div>
                   <div style="margin-bottom: 5px">所属公司:陕西禾成传媒有限公司</div>
                    <div style="margin-bottom: 5px">代表作品:《王大锤炸缸》饰王大锤</div>
              </van-col>
            </van-row>
          <h3 class="column-title">演员作品</h3>
          <VideoComponent :dataTransfer="videoList" />
      </div>
  </div>
</template>
<script>
import VideoComponent from '@/components/Public/VideoComponent'
import { NavBar,Col,Row } from 'vant';
export default {
  name:'videoMain',
  components:{
    VideoComponent,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
  },
  data(){
    return{
      videoList:[{src:'static/images/videos/1.png',name:'回到明朝当王爷'},{src:'static/images/videos/2.png',name:'我的保姆'},{src:'static/images/videos/3.png',name:'原来你还在这里'},{src:'static/images/videos/4.png',name:'我们的四十年'}]
    }
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  methods:{
    tovideo(){
      this.$router.push('/video/detail')
    }
  }
}
</script>
<style scoped>
  .newactor{
    flex-wrap: wrap;
  }

</style>
