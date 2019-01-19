<template>
<div class="container-fluid" style="margin-bottom:65px;">
  <van-nav-bar title="发现" :border="false"/>
  <van-row gutter="20" class="mt-15 mb-15">
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/nearby'}">
      <van-icon name="map-marked" size="35px"/>
      <div>附近的人</div>
      </router-link>
    </van-col>
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/album'}">
      <van-icon name="service"  size="35px"/>
      <div>有声小说</div>
      </router-link>
    </van-col>
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/comic'}">
      <van-icon name="photo"  size="35px"/>
      <div>图片动漫</div>
      </router-link>
    </van-col>
    <van-col span="6" class="text-center">
      <router-link :to="{ path: '/discover/download'}">
      <van-icon name="fire"  size="35px"/>
      <div>应用下载</div>
      </router-link>
    </van-col>
  </van-row>

  <div class="container">
    <h3 class="column-title">推荐主播</h3>
    <van-swipe :autoplay="3000" class="anchor">
      <van-swipe-item>
        <van-row gutter="20">
          <van-col span="8">
            <div class="item img-thumb">
              <img class="img-fluid rounded" src="../../../static/images/avatar/1.png" @click="linkDetail">
              <div class="text-center name">
                密桃小妹
              </div>
              <van-button round size="small">关注</van-button>
            </div>
          </van-col>
          <van-col span="8">
            <div class="item img-thumb">
              <img class="img-fluid rounded" src="../../../static/images/avatar/2.png" @click="linkDetail">
              <div class="text-center name">
                心灵鸡汤
              </div>
              <van-button round size="small">关注</van-button>
            </div>
          </van-col>
          <van-col span="8">
            <div class="item img-thumb">
              <img class="img-fluid rounded" src="../../../static/images/avatar/3.png" @click="linkDetail">
              <div class="text-center name">
                职场故事
              </div>
              <van-button round size="small">关注</van-button>
            </div>
          </van-col>
        </van-row>
      </van-swipe-item>

      <van-swipe-item>
        <van-row gutter="20">
          <van-col span="8">
            <div class="item img-thumb">
              <img class="img-fluid rounded" src="../../../static/images/avatar/4.png" @click="linkDetail">
              <div class="text-center name">
                密桃小妹
              </div>
              <van-button round size="small">关注</van-button>
            </div>
          </van-col>
          <van-col span="8">
            <div class="item img-thumb">
              <img class="img-fluid rounded" src="../../../static/images/avatar/5.png" @click="linkDetail">
              <div class="text-center name">
                心灵鸡汤
              </div>
              <van-button round size="small">关注</van-button>
            </div>
          </van-col>
          <van-col span="8">
            <div class="item img-thumb">
              <img class="img-fluid rounded" src="../../../static/images/avatar/6.png" @click="linkDetail">
              <div class="text-center name">
                职场故事
              </div>
              <van-button round size="small">关注</van-button>
            </div>
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>

    <h3 class="column-title">最近更新</h3>
    <novel-component :novel="novels"></novel-component>

  </div>
</div>
</template>

<script>
import {NavBar, Icon, Col, Row, Swipe, SwipeItem, Button } from 'vant';
import NovelComponent from "../Public/NovelComponent";

export default {
  components:{
    NovelComponent,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', true)
  },
  methods:{
    linkDetail(){
      this.$router.push('/anchor/detail')
    }
  },
  data(){
    return {
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
.anchor .van-col .item{ background: #EEE; text-align: center; padding: 0.2rem;}
.anchor .van-col .item .name{ padding: 0.1rem 0rem}

</style>
