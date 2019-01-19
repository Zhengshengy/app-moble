<template>
  <div>
      <van-row class="mb-15" gutter="20" v-for="(item,index) in dataTransfer" :key="index">
        <van-col span="4">
          <img class="img-fluid rounded" :src="item.src" alt="" @click="$router.push('/posts/userPage')">
        </van-col>
        <van-col span="16">
            <div>{{item.name}}</div>
            <div>{{item.time}}</div>
            <p>{{item.con}}</p>
        </van-col>
        <van-col span="4" class="text-right" >
          <van-icon name="like-o" size="18px" />
        </van-col>
      </van-row>
  </div>
</template>
<script>
import { Icon,Col,Row,  } from 'vant';
export default {
  name:'VideoComponent',
  components:{
    [Icon.name]:Icon,
    [Col.name]:Col,
    [Row.name]:Row,
  },
  data(){
    return{

    }
  },
  props:{
      dataTransfer:Array,
      required: true
    },
}
</script>
<style scoped>
  .star{
    line-height: 56px;
  }
</style>
