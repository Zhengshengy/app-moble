<!--我的帖子-->
<template>
  <div class="container-fluid">
    <van-nav-bar title="我的帖子" :border="false" left-arrow @click-left="$router.back(-1)"/>

    <van-tabs :line-width="48" v-model="active">
      <van-tab title="社区">
        <div class="container"><PostComponent :dataTransfer="posts" /></div>
      </van-tab>
      <van-tab title="原创">
        <original-component :dataTransfer="blocks"></original-component>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Col,Row, Tab, Tabs } from 'vant';
import PostComponent from '@/components/Public/PostComponent'
import OriginalComponent from "../Public/OriginalComponent";
import axios from 'axios'
export default {
  components: {
    OriginalComponent,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    PostComponent
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  data(){
    return {
      active: 0,
      posts:[],
      blocks: []
    }
  },
  created(){
    let id = sessionStorage.getItem('userid')
    if (id){
      axios.get('static/data/posts.json').then(e=>{
          this.posts = e.data.filter(item=>{
            return item.user.id == id
          })
          this.posts.forEach(v=>{
            v.crate_time = this.dateDiff(v.crate_time)
          })
      });
      axios.get('static/data/original.json').then(e=>{
        this.blocks = e.data.filter(item=>{
          return item.id == id
        })
    })
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
    }
  }
}
</script>

<style scoped>

</style>
