<template>
  <div>
    <van-row gutter="20" class="mt-15" v-for="(item,index) in dataTransfer" :key="index">
      <van-col span="8">
        <img class="img-fluid img-thumb" :src="item.pic" @click="linkDetail">
      </van-col>
      <van-col span="16">
        <h3 v-if="bookname" @click="linkDetail">{{item.name}}</h3>
        <p v-if="bookinfo" @click="linkDetail">{{item.intro}}</p>
        <p v-if="lookandlister">
          <span><van-icon name="play" /> <em>{{item.playnum}}</em></span>
          <span><van-icon name="bar-chart-o" /> <em>{{item.episodes}}</em></span>
        </p>
        <p v-if="nowtime">
          {{item.time}}
        </p>
      </van-col>
    </van-row>
  </div>

</template>

<script>
  import { NavBar,Row, Col,Icon } from 'vant';
    export default {
        name: "AlbumComponent",
      components:{
        [NavBar.name]:NavBar,
        [Row.name]:Row,
        [Col.name]:Col,
        [Icon.name]:Icon
      },
      props:{
        dataTransfer:Array,
        required: true
      },
      methods:{
        linkDetail(){
          this.$router.push('/album/detail')
        }
      },
      created(){
        let path = (this.$route.path)
        if (path == '/discover/album'){
          this.bookname = true;
          this.bookinfo = true;
          this.nowtime = true;
          this.lookandlister = true;
        }else if (path == '/center/comment'){
          this.bookname = false;
          this.bookinfo = true;
          this.nowtime = true;
          this.lookandlister = false;
        }else if (path == '/anchor/detail'){
          this.bookname = true;
          this.bookinfo = true;
          this.nowtime = true;
          this.lookandlister = true;
        }
      }
    }
</script>
