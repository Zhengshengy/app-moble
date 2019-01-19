<template>
  <div class="container-fluid">
    <van-nav-bar title="有声小说" left-arrow @click-left="$router.back(-1)"/>

    <van-tabs v-model="active" :swipe-threshold="7">
      <van-tab title="全部">
        <!-- 两端对齐 -->
        <div class="container mt-15">
          <album-component :dataTransfer="albums"></album-component>
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

  </div>
</template>

<script>
  import { NavBar, Row, Col, Icon, Tab, Tabs, } from 'vant';
  import AlbumComponent from "../Public/AlbumComponent";

  export default {
    name: "novel",
    components:{
      AlbumComponent,
      [NavBar.name]:NavBar,
      [Row.name]:Row,
      [Col.name]:Col,
      [Icon.name]:Icon,
      [Tab.name]:Tab,
      [Tabs.name]:Tabs
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false)
    },
    data(){
      return {
        active: 0,
        albums:[
          {
            pic:"../../../static/images/novel/1.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/2.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/3.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/4.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/5.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/6.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/7.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/8.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/1.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          },
          {
            pic:"../../../static/images/novel/2.png",
            name:"《阴间深潭》紫禁故事",
            intro:"电台原版小故事，带你走进故事里",
            playnum:"3144.8万",
            episodes:"14集"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
