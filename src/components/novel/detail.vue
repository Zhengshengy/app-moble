<template lang="html">
  <div class="container-fluid">
    <van-nav-bar title="小说详情" left-text="" left-arrow @click-left="$router.back(-1)"/>

  </div>
</template>

<script>
  import { NavBar,Col,Row } from 'vant';

  export default {
    components:{
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row
    },
    created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false)
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="css">
</style>
