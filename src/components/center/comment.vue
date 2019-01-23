<template>
  <div class="container-fluid">
    <van-nav-bar title="我的评论" :border="false" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
       <van-tabs v-model="active">
        <van-tab title="帖子">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <PostComponent :dataTransfer="posts" />
          </van-list>
        </van-tab>
        <van-tab title="美图">
          <van-list v-model="albumloading" :finished="albumfinished" finished-text="没有更多了" @load="albumonLoad">
          <album-component :dataTransfer="novels"></album-component>
          </van-list>
        </van-tab>
        <van-tab title="原创">
          <van-list v-model="originloading" :finished="originfinished" finished-text="没有更多了" @load="originonLoad">
       <original-component :dataTransfer="blocks"></original-component>
    </van-list>
        </van-tab>
        <van-tab title="电影">
          <van-list v-model="videoloading" :finished="videofinished" finished-text="没有更多了" @load="videoOnLoad">
            <VideoComponent :dataTransfer="videoList" />
         </van-list>
        </van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
  import { NavBar, Col,Row, Tab, Tabs,List } from 'vant';
  import NovelComponent from "../Public/NovelComponent";
  import VideoComponent from "../Public/VideoComponent";
  import OriginalComponent from "../Public/OriginalComponent";
  import PostComponent from "../Public/PostComponent";
  import axios from 'axios'
  import AlbumComponent from "../Public/AlbumComponent";
  export default {
    components: {
      AlbumComponent,
      VideoComponent,
      NovelComponent,
      OriginalComponent,
      PostComponent,
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [List.name]: List
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false)
      axios.get('static/data/original.json').then(e=>{
        this.blocks = e.data
      });
      axios.get("static/data/video.json").then(e=>{
        console.log(e)
        this.videoList = e.data
      });
      axios.get("static/data/posts.json").then(e=>{
        this.posts = e.data
        e.data.forEach(item=>{
          item.crate_time = this.dateDiff(item.crate_time)
        })
      });
      axios.get('static/data/album1.json').then(e=>{
        this.novels = e.data
      })
    },
    data(){
      return {
        active:"0",
        posts:[],
        loading: false,
        finished: false,
        novels:[],
        videoList:[],
        blocks: [],
        videoloading:false,
        videofinished: false,
        originloading:false,
        originfinished: false,
        albumloading:false,
        albumfinished: false,
      }
    },
    methods:{
      dateDiff(timestamp) {
        var arrTimestamp = (timestamp + '').split('');
        for (var start = 0; start < 13; start++) {
          if (!arrTimestamp[start]) {
            arrTimestamp[start] = '0';
          }
        }
        timestamp = arrTimestamp.join('') * 1;
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - timestamp;
        if (diffValue < 0) {
          return '不久前';
        }
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        var zero = function (value) {
          if (value < 10) {
            return '0' + value;
          }
          return value;
        };
        if (monthC > 12) {
          return (function () {
            var date = new Date(timestamp);
            return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
          })();
        } else if (monthC >= 1) {
          return parseInt(monthC) + "月前";
        } else if (weekC >= 1) {
          return parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
          return parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
          return parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
          return parseInt(minC) + "分钟前";
        }
        return '刚刚';
      },
      onLoad() {
        setTimeout(() => {
          axios.get('static/data/posts1.json').then(e=>{
            e.data.forEach(item=>{
              item.crate_time = this.dateDiff(item.crate_time)
              this.posts.push(item)
            })
          })
          this.loading = false;
          this.finished = true;
        }, 2000);
      },
      videoOnLoad(){
        setTimeout(() => {
          axios.get('static/data/video1.json').then(e=>{
            e.data.forEach(item=>{
              this.videoList.push(item)
            })
          })
          this.videoloading = false;
          this.videofinished = true;
        }, 2000);
      },
      originonLoad(){
        setTimeout(() => {
        axios.get('static/data/original1.json').then(e=>{
          e.data.forEach(item=>{
            this.blocks.push(item)
          })
         })
          this.originloading = false;
          this.originfinished = true;
      }, 2000);
      },
      albumonLoad() {
        setTimeout(() => {
          axios.get('static/data/album1.json').then(e=>{
            e.data.forEach(item=>{
              this.novels.push(item)
            })
          })
          this.albumloading = false;
          this.albumfinished = true;
        }, 2000);
      }
    }
  }
</script>

<style scoped>

</style>
