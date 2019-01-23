<template>
  <transition name="fade">
  <div class="container-fluid">
      <van-nav-bar title="演员主页" left-arrow @click-left="$router.back(-1)"/>
      <div class="container" >
          <van-row gutter="20" class="mt-15">
              <van-col span="8">
                  <img :src="actorDetail.poster" alt="" class="img-fluid img-thumb">
              </van-col>
              <van-col span="16" >
                  <h3 style="margin-bottom: 10px">{{actorDetail.name}}</h3>
                    <div style="margin-bottom: 5px">身高:174cm</div>
                   <div style="margin-bottom: 5px">体重:69kg</div>
                   <div style="margin-bottom: 5px">籍贯:陕西西安</div>
                   <div style="margin-bottom: 5px">所属公司:陕西禾成传媒有限公司</div>
                    <div style="margin-bottom: 5px">代表作品:《王大锤炸缸》饰王大锤</div>
              </van-col>
            </van-row>
          <h3 class="column-title">演员作品</h3>
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <VideoComponent :dataTransfer="videoList" />
           </van-list>
      </div>
  </div>
  </transition>
</template>
<script>
import VideoComponent from '@/components/Public/VideoComponent'
import { NavBar,Col,Row,List } from 'vant';
import axios from 'axios'
export default {
  name:'videoMain',
  components:{
    VideoComponent,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [List.name]:List,
  },
  data(){
    return{
      actorDetail:[],
      videoList:[],
      loading: false,
      finished: false
     }
  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', false);
    let id = this.$route.query.id
    axios.get("static/data/actor.json").then(e=>{
      this.actorDetail = e.data.filter(item=>{
        return item.id == id
      });
      this.actorDetail = this.actorDetail[0]
    });
    axios.get("static/data/video.json").then(e=>{
      this.videoList = e.data
    });

  },
  methods:{
    tovideo(id){
      this.$router.push({path:'/video/detail',query:{id:id}})
    },
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/video1.json').then(e=>{
          e.data.forEach(item=>{
            this.videoList.push(item)
          })
         })
          this.loading = false;
          this.finished = true;
      }, 2000);
    }
  }
}
</script>
<style scoped>
  .newactor{
    flex-wrap: wrap;
  }

</style>
