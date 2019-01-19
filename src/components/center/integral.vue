<!--积分明细-->
<template>
  <div>
      <van-nav-bar title="积分明细" left-arrow @click-left="$router.back(-1)"/>
  </div>
</template>

<script>
import { NavBar,Col,Row } from 'vant';
export default {
    name: "integral",
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
