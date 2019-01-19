<template>
  <div>
    <van-nav-bar title="动漫详情" left-text="" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-row :gutter="10" >
        <van-col span="8" v-for="(item,index) in imgList" class="mt-10" :key="index">
          <img :src="item.src" alt="" class="img-fluid img-thumb" @click="todetail(index)">
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { NavBar, Col, Row, } from 'vant';
export default {
  name: "square",
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
  },
  data(){
    return{
      imgList:[{src:'static/images/comic/1-1.jpg'},{src:'static/images/comic/1-2.jpg'},{src:'static/images/comic/1-3.jpg'},{src:'static/images/comic/1-4.jpg'}]
    }
  },
  methods:{
    todetail(index){
      console.log(index)
      this.$router.push({path:'/comic/detail',query:{id:index}})
    }
  }
}
</script>

<style scoped>
.pic{
  width: 100%;
  height: 80px;
  border-radius: 10px;
}
</style>
