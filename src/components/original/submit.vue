<!--//发布帖子-->
<template>
  <div class="container-fluid">
    <van-nav-bar title="发布视频" right-text="发布" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
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
      </div></div>
    </div>
</template>

<script>
import { NavBar, Col, Row, Icon, Uploader,Field,CellGroup } from 'vant';
export default {
  name:'SubmitVideo',
  components:{
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  methods: {
    onRead(file) {
      console.log(file)
    }
  },
  data(){
    return {
      message:''
    }
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
