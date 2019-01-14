<template>
  <div>
    <van-tabbar
  v-model="active"
  active-color="#4b0"
>
  <van-tabbar-item icon="home-o" size="30">标签</van-tabbar-item>
  <van-tabbar-item icon="search" size="30">标签</van-tabbar-item>
  <van-tabbar-item icon="search" size="30">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o" size="30">标签</van-tabbar-item>
</van-tabbar>
  </div>
</template>
<script>
export default {
  name:'Footer',
  data(){
    return{
      active:0
    }
  }
}
</script>
<style scoped>

</style>
