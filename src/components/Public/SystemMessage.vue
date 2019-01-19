<template>
  <div>
    <div class="mb-15" v-for="(item,index) in dataTransfer" :key="index">
      <van-row type="flex" justify="space-between" class="mb-10">
        <van-col span="4" class="font-14">系统通知</van-col>
        <van-col span="4" class="font-12">{{item.date}}</van-col>
      </van-row>
      <van-row>
        <van-col span="24" class="font-12" ellipsis="true">{{item.content}}</van-col>
      </van-row>
    </div>
  </div>

</template>

<script>
  import { Col,Row } from 'vant';
  export default {
        name: "SystemMessage",
    components:{
      [Col.name]:Col,
      [Row.name]:Row,
    },
      props:{
        dataTransfer:Array,
        required: true
      }
    }
</script>

<style scoped>

</style>
