<template>
  <transition name="fade">
<div class="container-fluid">
  <div class="container">
    <van-row class="header" type="flex" justify="space-between">
      <van-col span="3">
        <van-icon name="search" size="0.3rem"/>
      </van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/' }">热门</router-link></van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/news' }">最新</router-link></van-col>
      <van-col span="6" class="text-center"><router-link :to="{ path: '/original/focus' }">关注</router-link></van-col>
      <van-col span="3" class="text-right">
        <router-link to="/original/submit">
        <van-icon name="fire-o" size="0.3rem"/>
        </router-link>
      </van-col>
    </van-row>
  </div>


  <div id="content">
    <vue-waterfall-easy :mobileGap="20" ref="waterfall" :imgsArr="imgsArr" @scrollReachBottom="getData" @click="clickFn" @imgError="imgErrorFn">
      <div slot-scope="props">
        <p>第{{props.index+1}}张图片</p>
        <p>{{props.value.info}}</p>
      </div>
    </vue-waterfall-easy>
  </div>
</div>
  </transition>
</template>

<script>
import { Tab, Tabs, Icon, Row, Col } from 'vant';
import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      imgsArr: [],
      group: 0, // 当前加载的加载图片的次数
      pullDownDistance: 0
    }
  },
  components: {
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    [Row.name]:Row,
    [Col.name]:Col,
    vueWaterfallEasy
  },
  methods: {
    getData() {
      axios.get('./static/data/data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个静态json文件模拟
        .then(res => {
          this.group++
          if (this.group === 10) { // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver()
            return
          }
          this.imgsArr = this.imgsArr.concat(res.data)
        })
    },
    clickFn(event, { index, value }) {
      // event.preventDefault()
      if (event.target.tagName.toLowerCase() == 'img') {
        console.log('img clicked', index, value)
      }
    },
    imgErrorFn(imgItem){
      console.log('图片加载错误',imgItem)
    },
    changeImgArr() {
      axios.get('./static/data/data-change.json') // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个静态json文件模拟
        .then(res => {
          this.imgsArr = res.data
        })
    },
    pullDownMove(pullDownDistance) {
      // console.log('pullDownDistance', pullDownDistance)
      this.pullDownDistance = pullDownDistance
    },
    pullDownEnd(pullDownDistance) {
      console.log('pullDownEnd')
      if(this.pullDownDistance>50){
        alert('下拉刷新')
      }
      this.pullDownDistance = 0
    },
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', true)
    this.getData()

    // 删除某个卡片
    // setTimeout(()=>{
    //   this.imgsArr.splice(1,1)
    // },2000)
  },
}
</script>

<style lang="scss">

#content {
  position: absolute;
  top: 50px;
  bottom: 50px;
  width: 100%;
}

</style>
