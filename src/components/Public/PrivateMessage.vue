<template>
  <div>
    <div class="" v-for="(item,index) in dataTransfer" :key="index">
      <van-row type="flex" justify="space-between" class="mb-15">
        <!--左侧-->
        <van-col span="4" class="font-14"><img class="img-fluid rounded" :src="item.head" alt=""></van-col>
        <!--右侧-->
        <van-col span="18">
          <!--右上-->
          <van-row span="20" type="flex" justify="space-between" class="mb-10">
            <van-col span="6">{{item.name}}</van-col>
            <van-col span="5">{{item.date}}</van-col>
          </van-row>
          <!--右下-->
          <van-col>{{item.content}}</van-col>
        </van-col>
      </van-row>
    </div>
  </div>

</template>

<script>
  import { Col,Row } from 'vant';
    export default {
        name: "PrivateMessage",
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
