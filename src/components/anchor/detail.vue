<template lang="html">
  <div class="container-fluid">
    <van-nav-bar title="主播详情" left-text="" left-arrow @click-left="$router.back(-1)"/>

    <van-row class="mt-20 mb-20">
      <van-col span="6" offset="9" class="text-center">
        <img class="img-fluid rounded" src="../../../static/images/avatar/1.png" alt="">
        <div class="mt-10 mb-10">职场故事</div>
        <van-button round size="small">关注</van-button>
      </van-col>
    </van-row>

    <van-tabs v-model="active">
      <van-tab title="声音">
        <div class="container mt-20">

        </div>
      </van-tab>
      <van-tab title="专辑">
        <div class="container mt-20">
          <novel-component :novel="novels"></novel-component>
        </div>
      </van-tab>
    </van-tabs>


  </div>
</template>

<script>
  import { NavBar, Col, Row, Button, Tab, Tabs } from 'vant';

  import NovelComponent from "../Public/NovelComponent";

  export default {
    components:{
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Button.name]: Button,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      NovelComponent
    },
    created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false)
    },
    data(){
      return {
        active: 0,
        novels:[
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

<style lang="css">
</style>
