<template>
    <div>
      <van-row type="flex" justify="space-between"  class="newactor" gutter="20">
        <van-col span="12"  v-for="(item,index) in dataTransfer" :key="index">
          <div class="movie" @click="tovideo(item.id)">
            <img  class="img-fluid img-thumb" :src="item.poster" alt="">
            <div style="margin-top: 5px">{{item.name}}</div>
          </div>
        </van-col>
      </van-row>
    </div>
</template>

<script>
import { Col,Row} from 'vant';
export default {
  name: "VideoComponent",
  components:{
    [Col.name]:Col,
    [Row.name]:Row,
  },
  props:{
      dataTransfer:Array,
      required: true
    },
  methods:{
    tovideo(id){
      this.$router.push({path:'/video/detail',query:{id:id}})
    }
  }
}
</script>

<style scoped>
.newactor{
  flex-wrap: wrap;
}
.pic{
  border-radius: 5px;
  height: 100px;
}

</style>
