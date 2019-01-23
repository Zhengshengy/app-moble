<template>
  <transition name="fade">
  <div class="container-fluid">
    <van-nav-bar title="有声小说" left-arrow @click-left="$router.back(-1)"/>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
       <van-tabs v-model="active" :swipe-threshold="7">
      <van-tab title="全部">
        <!-- 两端对齐 -->
        <div class="container mt-15">
          <album-component :dataTransfer="album"></album-component>
        </div>
      </van-tab>
      <van-tab title="动物">

      </van-tab>
      <van-tab title="经典">

      </van-tab>
      <van-tab title="壁纸">

      </van-tab>
      <van-tab title="影视">

      </van-tab>
      <van-tab title="游戏">

      </van-tab>
      <van-tab title="古典">

      </van-tab>
    </van-tabs>
    </van-list>
  </div>
  </transition>
</template>

<script>
  import { NavBar, Row, Col, Icon, Tab, Tabs,List } from 'vant';
  import AlbumComponent from "../Public/AlbumComponent";
  import axios from 'axios'
  export default {
    name: "novel",
    components:{
      AlbumComponent,
      [NavBar.name]:NavBar,
      [Row.name]:Row,
      [Col.name]:Col,
      [Icon.name]:Icon,
      [Tab.name]:Tab,
      [Tabs.name]:Tabs,
      [List.name]:List
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false);
      axios.get('static/data/album.json').then(e=>{
        this.album = e.data.filter(item=>{
          return item.type_id == '1'
        })
      })
    },
    data(){
      return {
        active: 0,
        album:[],
        loading: false,
        finished: false
      }
    },
    methods:{
      onLoad() {
        setTimeout(() => {
          axios.get('static/data/album1.json').then(e=>{
            e.data.forEach(item=>{
              this.album.push(item)
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

</style>
