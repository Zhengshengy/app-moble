<!--手势密码-->
<template>
<div>
  <van-nav-bar title="手势密码" left-arrow @click-left="$router.back(-1)"/>
</div>
</template>

<script>
import { NavBar,Col,Row,Icon } from 'vant';
export default {
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
  },
}
</script>

<style scoped>

</style>

