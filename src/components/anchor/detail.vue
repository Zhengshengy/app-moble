<template lang="html">
  <div class="container-fluid">
    <van-nav-bar title="主播详情" left-text="" left-arrow @click-left="$router.back(-1)"/>

    <van-row class="mt-20 mb-20">
      <van-col span="6" offset="9" class="text-center">
        <img class="img-fluid rounded" :src="anchor.avatar" alt="">
        <div class="mt-10 mb-10">{{anchor.name}}</div>
        <van-button round size="small">关注</van-button>
      </van-col>
    </van-row>

    <van-tabs v-model="active">
      <van-tab title="声音">
        <div class="container mt-20">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <novel-component :dataTransfer="novels"></novel-component>
        </van-list>
        </div>
      </van-tab>
      <van-tab title="专辑">
        <div class="container mt-20">
        <van-list v-model="albumLoading" :finished="albumfinished" finished-text="没有更多了" @load="albumonLoad">
          <album-component :dataTransfer="album"></album-component>
        </van-list>
        </div>
      </van-tab>
    </van-tabs>


  </div>
</template>

<script>
  import { NavBar, Col, Row, Button, Tab, Tabs,List } from 'vant';
  import axios from 'axios'
  import NovelComponent from "../Public/NovelComponent";
  import AlbumComponent from "../Public/AlbumComponent";
  export default {
    components:{
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Button.name]: Button,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [List.name]: List,
      AlbumComponent,
      NovelComponent
    },
    created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false)
      let id = this.$route.query.uid
      axios.get('static/data/anchor.json').then(e=>{
        this.anchor = e.data.filter(item=>{
          return item.id == id
        })
        this.anchor = this.anchor[0]
      })
      axios.get('static/data/novel.json').then(e=>{
        this.novels = e.data
      })
      axios.get('static/data/album.json').then(e=>{
        this.album = e.data.filter(item=>{
          return item.type_id == '1'
        })
      })
    },
    data(){
      return {
        active: 0,
        novels:[],
        anchor:{},
        album:[],
        loading: false,
        finished: false,
        albumLoading:false,
        albumfinished:false
      }
    },
    methods:{
      onLoad() {
      setTimeout(() => {
        axios.get('static/data/novel1.json').then(e=>{
          e.data.forEach(item=>{
            this.novels.push(item)
          })
        })
        this.loading = false;
        this.finished = true;
      }, 2000);
    },
      albumonLoad(){
        setTimeout(() => {
        axios.get('static/data/album1.json').then(e=>{
          e.data.forEach(item=>{
            this.album.push(item)
          })
        })
          this.albumLoading = false;
          this.albumfinished = true;
        }, 2000);
       },
    }
  }
</script>

<style lang="css">
</style>
