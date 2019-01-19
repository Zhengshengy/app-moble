<template>
    <div>
      <van-row gutter="20">
        <div v-for="(item,index) in dataTransfer" :key="index" @click="goUserPage">
          <van-col span="6" class="text-center mb-10">
            <img class="rounded img-fluid" :src="item.src" alt="">
            <p class="my-10">{{item.name}}</p>
            <van-button round size="mini" type="danger">关注</van-button>
          </van-col>
        </div>
        </van-row>
    </div>
</template>

<script>
  import { Row, Col,Button } from 'vant';
    export default {
        name: "UserComponent",
      components: {
        [Row.name]:Row,
        [Col.name]:Col,
        [Button.name]:Button
      },
      props:{
        dataTransfer:Array,
        required: true
      },
      methods:{
        goUserPage(){
          this.$router.push("/posts/userPage")
        }
      }
    }
</script>

<style scoped>

</style>
