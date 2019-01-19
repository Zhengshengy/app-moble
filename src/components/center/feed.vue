<!--意见反馈-->
<template>
<div class="container-fluid">
  <van-nav-bar title="意见反馈" left-arrow @click-left="$router.back(-1)"/>
  <div class="container">
    <van-cell-group class="mt-15">
      <van-field v-model="value" placeholder="请输入为反馈意见设置一个标题" />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="message"
        type="textarea"
        placeholder="请输入反馈内容"
        rows="6"
      />
    </van-cell-group>
    <van-button size="large" round class="bg-warning">大号按钮</van-button>
  </div>
</div>
</template>

<script>
import { NavBar,Col,Row,Icon,Field,CellGroup,Button } from 'vant';
export default {
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,
    [Button.name]:Button,
  },
  data(){
    return{
      value:"",
      message:""
    }
  }
}
</script>

<style scoped>

</style>

