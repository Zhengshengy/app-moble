<template>
  <div class="container" style="margin-bottom:65px;">
    <van-row class="header" type="flex" justify="space-between">
      <van-col span="3">
        <van-icon name="search" size="24px"/>
      </van-col>
      <van-col span="3" class="text-center" >
        <span @click="index=1">推荐</span>
      </van-col>
      <van-col span="3" class="text-center">
        <span @click="index=2">搞笑</span>
      </van-col>
      <van-col span="3" class="text-center" @click="index==3">
        <span @click="index=3">音乐</span>
      </van-col>
      <van-col span="3" class="text-center" @click="index==4">
        <span @click="index=4">原创</span>
      </van-col>
      <van-col span="3" class="text-center" @click="index==5">
        <span @click="index=5">游戏</span>
      </van-col>
      <van-col span="3" class="text-center" @click="index==6">
        <span @click="index=6">拍客</span>
      </van-col>
      <van-col span="3" class="text-right">
        <router-link to="/posts/submit">
          <van-icon name="fire-o" size="24px"/>
        </router-link>
      </van-col>
    </van-row>

    <van-swipe v-show="index==1" :autoplay="3000" :show-indicators="false" class="img-thumb">
      <van-swipe-item v-for="(item,index) in data" :key="index" >
        <img class="img-fluid" :src="item.src" alt="">
      </van-swipe-item>
    </van-swipe>

    <PostComponent :dataTransfer="posts" />
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Swipe, SwipeItem, Icon, Row, Col } from 'vant';
import PostComponent from '@/components/Public/PostComponent'
export default {
  name:'Index',
  components:{
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col,
    PostComponent
  },
  created(){
      this.$emit('public_header', true)
      this.$emit('public_footer', true)
  },
  data(){
    return{
      active: 0,
      index:1,
      posts:[
        {
          id:1,heard:'static/images/avatar/1.png',pic:[{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'}],name:'赵铁柱',time:'3分钟前',con:'以前从来不过生日的 那个半年前说要给我过人生中第一个生日的人已经离开了，自己过得也挺好的。'
        },
        {
          id:1,heard:'static/images/avatar/2.png',pic:[{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'}],name:'金蕾蕾',time:'8分钟前',con:'以前从来不过生日的 那个半年前说要给我过人生中的第一个生日的人现在已经离开了，自己给自己过也挺好的。'
        }
      ],
      data:[{src:'static/img/img3.jpg'},{src:'static/img/img3.jpg'},{src:'static/img/img3.jpg'},{src:'static/img/img3.jpg'}]
    }
  },
  methods:{
  }
}
</script>
<style scoped>

</style>
