<template>
  <div class="masonry" v-masonry>
    <div v-masonry-tile @click="originalDetail" class="item" v-for="(item, index) in dataTransfer" :key="index">
      <!--block item markup -->
      <div class="thumb img-thumb">
        <img class="img-fluid img-thumb" :src="item.src" alt="">
        <van-row gutter="10" style="padding:10px;">
          <van-col span="7">
            <img class="img-fluid rounded" :src="item.avatar" alt="">
          </van-col>
          <van-col span="17">
            <p>{{ item.name }}</p>
            <span>{{item.info}}</span>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { Row, Col } from 'vant';
  export default {
    name:'OriginalComponent',
    components: {
      [Row.name]:Row,
      [Col.name]:Col
    },
    props:{
      dataTransfer:Array,
      required: true
    },
    methods:{
      originalDetail(){
        this.$router.push("/original/detail")
      }
    }
  }
</script>

<style>
.masonry{margin: 8px;}
.masonry .item{width: 50%;}
.thumb{ margin: 8px; background: #EEE;}
.thumb span{ display: block;width:90%;white-space: nowrap;overflow: hidden}
</style>
