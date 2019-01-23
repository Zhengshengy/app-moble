<template>
  <transition name="fade">
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

  <div class="container-fluid" style="margin-bottom:65px;">
    <div class="container">
      <van-row class="header" type="flex" justify="space-between">
        <van-col span="3">
          <van-icon name="search" size="24px" @click="showSearch"/>
        </van-col>
        <van-col span="3" class="text-center" v-for="(item,index) in typeList" :key="index">
          <span @click="getData(index)" :class="{guigeSpan:index==guigeSpan}">{{item}}</span>
        </van-col>
        <van-col span="3" class="text-right">
          <router-link to="/posts/submit">
            <van-icon name="fire-o" size="24px"/>
          </router-link>
        </van-col>
      </van-row>

      <van-swipe v-show="index==0" :autoplay="3000" :show-indicators="false" class="img-thumb">
        <van-swipe-item v-for="(item,index) in data" :key="index" >
          <img class="img-fluid" :src="item.src" alt="">
        </van-swipe-item>
      </van-swipe>

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
       <PostComponent :dataTransfer="posts" :index="index" />
      </van-list>
    </div>

    <!--搜索条-->
    <div class="search-bar" v-show="SearchBar==true" @click.stop="">
      <div class="change">
        <input type="text" v-focus placeholder="发走心评论，交知心朋友" @blur="hiddeSearch">
      </div>
      <div class="stable">
        <button>搜索</button>
      </div>
    </div>
    <!--<PublishComponent />-->
  </div>
  </van-pull-refresh>
  </transition>
</template>
<script>
import { Tabbar, TabbarItem, Swipe, SwipeItem, Icon, Row, Col,PullRefresh,Toast,List  } from 'vant';
import dateDiff from '@/utils/dateDiff'
import PostComponent from '@/components/Public/PostComponent'
import axios from 'axios'
import {mapState,mapGetters,mapActions} from 'vuex';
import PublishComponent from '@/components/Public/PublishComponent'
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
    [PullRefresh.name]: PullRefresh,
    [Toast.name]: Toast,
    [List.name]: List,
    PostComponent,
    PublishComponent
  },
  directives:{
    focus: {
      update:function (el) {
        el.focus()
      }
    }
  },
  data(){
    return{
      guigeSpan:0,
      active: 0,
      index:0,
      SearchBar: false,
      posts:[],
      data:[],
      isLoading: false,
      loading: false,
      finished: false,
      typeList:['推荐','搞笑','音乐','原创','游戏','拍客']
    }
  },
  computed:{
    ...mapGetters('postPraise',{
         // postsList
      })
  },
  created(){
    this.$emit('public_header', true)
    this.$emit('public_footer', true)
    axios.get('static/data/swipe.json').then(e=>{
      this.data = e.data.filter(item=>{
        return item.type == '1'
      })
    });
    this.getData(this.index)
  },
  methods:{
    showSearch(){
      this.SearchBar = true
    },
    hiddeSearch(){
      this.SearchBar = false
    },
    getData(index){
      this.index = index
      this.guigeSpan = index
      if (this.index == 0) {
        this.$router.push({path:'/'})
        axios.get('static/data/posts.json').then(e=>{
          this.posts = e.data
          this.posts.forEach(v=>{
            v.crate_time = dateDiff.dateDiff(v.crate_time)
          })
          this.$store.state.postPraise.postsList = this.posts
      })
      } else{
        this.$router.push({path:'/',query:{type:this.index}})
          axios.get('static/data/posts.json').then(e=>{
              this.posts = e.data.filter(item=>{
                return item.cate_id == index
              })
              this.posts.forEach(v=>{
                v.crate_time = dateDiff.dateDiff(v.crate_time)
              })
            })
          this.$store.state.postPraise.postsList = this.posts
        }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        }, 500);
     },
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/posts1.json').then(e=>{
          e.data.forEach(item=>{
            item.crate_time = dateDiff.dateDiff(item.crate_time)
            this.posts.push(item)
          })
         })
          this.loading = false;
          this.finished = true;
          this.$store.state.postPraise.postsList = this.posts
      }, 2000);
    }
  }
}
</script>
<style scoped>
  .search-bar{height:50px;display:flex;/*设为伸缩容器*/flex-flow:row;/*伸缩项目单行排列*/background: #FFF; width: 100%; position: fixed; top: 0;}
  .search-bar .stable{width:60px;/*固定宽度*/ margin-right: 0.2rem;}
  .search-bar .change{ margin-left:0.2rem;flex:1;/*这里设置为占比1，填充满剩余空间*/}

  .search-bar input{ border: none; background: #EEE; width: 100%; text-indent: 15px; height: 30px; margin:10px 0px; border-radius: 15px;}
  .search-bar button{ width:60px; height: 30px; margin: 10px 0px;}
  .guigeSpan{color: #f44}
</style>
