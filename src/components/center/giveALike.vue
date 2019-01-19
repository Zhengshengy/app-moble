<!--我的点赞-->
<template>
  <div>
      <van-nav-bar title="我的点赞" left-arrow @click-left="$router.back(-1)"/>
  </div>
</template>

<script>
import { NavBar,Col,Row } from 'vant';
export default {
    components: {
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  }
}
</script>

<style scoped>

</style>



