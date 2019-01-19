<!--//发布帖子-->
<template>
  <div class="container-fluid">
    <van-nav-bar title="发布帖子" right-text="发布" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-row class="text-center">
        <van-col span="6">
          <van-tag size="large" plain color="#ff6600" text-color="#ff6600">自拍</van-tag>
        </van-col>
        <van-col span="6">
          <van-tag size="large" plain color="#eeeeee" text-color="#999999">网红</van-tag>
        </van-col>
        <van-col span="6">
          <van-tag size="large" plain color="#eeeeee" text-color="#999999">闲聊</van-tag>
        </van-col>
        <van-col span="6">
          <van-tag size="large" plain color="#eeeeee" text-color="#999999">制服</van-tag>
        </van-col>
      </van-row>
      <van-cell-group>
        <van-field
          v-model="message"
          type="textarea"
          placeholder="说点你的心得体会吧..."
          rows="8"
          autosize
        />
      </van-cell-group>
      <div class="box-uploader mt-20">
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
          <van-icon name="photograph" size="30px" />
        </van-uploader>
      </div>
    </div>

  </div>
</template>

<script>
import { NavBar,Col,Row,Tag,Field,CellGroup,Uploader,Icon} from 'vant';
export default {
  name:'post',
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Tag.name]:Tag,
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,
    [Uploader.name]:Uploader,
    [Icon.name]:Icon
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  data(){
    return {
      message:'',
      onRead(file) {
        console.log(file)
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  .box-uploader{
    width: 70px;
    height: 70px;
    border:1px dashed #000;
    text-align: center;
    line-height: 90px;
  }
</style>
