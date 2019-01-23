<template>
  <div class="container-fluid">
    <van-nav-bar title="专辑详情" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <album-component :dataTransfer="albumsdetail"></album-component>
      <van-row>
        <van-col span="21">节目列表</van-col>
        <van-col span="3">共323</van-col>
      </van-row>
      <novel-component :dataTransfer="noveldetail"></novel-component>
    </div>
  </div>
</template>

<script>
import { NavBar, Col, Row, Icon} from 'vant';
import AlbumComponent from "../Public/AlbumComponent";
import NovelComponent from "../Public/NovelComponent";
export default {
  components:{
    NovelComponent,
    AlbumComponent,
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon
  },
  data(){
    return {
      albumsdetail:[
        {
          pic:"../../../static/images/novel/1.png",
          name:"《阴间深潭》紫禁故事",
          intro:"电台原版小故事，带你走进故事里电台原版小故事，带你走进故事里",
          playnum:"3144.8万",
          episodes:"14集"
        }
      ],
      noveldetail:[
        {"name":"我为王者居人下","timelong":"13:06","updata":"2018-08-29"},
        {"name":"我为王者居人下","timelong":"13:06","updata":"2018-08-29"},
        {"name":"我为王者居人下","timelong":"13:06","updata":"2018-08-29"},
        {"name":"我为王者居人下","timelong":"13:06","updata":"2018-08-29"}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
