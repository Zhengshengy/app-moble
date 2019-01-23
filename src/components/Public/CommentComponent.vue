<template>
  <div style="min-height: 100px;" class="pb-50">
   <van-row class="mb-15" gutter="20" v-for="(item,index) in dataTransfer" :key="index">
        <van-col span="4">
          <img class="img-fluid rounded" :src="item.user.avatar" alt="" @click="touserpage(item.user.id)">
        </van-col>
        <van-col span="16">
            <div>{{item.user.name}}</div>
            <div>{{item.create_time}}</div>
            <p>{{item.content}}</p>
        </van-col>
        <van-col span="4" class="text-right" >
          <div v-if="item.praise==false">
            <van-icon name="thumb-circle-o" size="18px" @click="changeStar(item.id)" />
          </div>
          <div v-else>
            <van-icon name="youzan-shield" color="#ff976a" size="18px" @click="changeStar(item.id)" />
          </div>
        </van-col>
      </van-row>
  </div>
</template>
<script>
import { Icon,Col,Row } from 'vant';
export default {
  name:'VideoComponent',
  components:{
    [Icon.name]:Icon,
    [Col.name]:Col,
    [Row.name]:Row
  },
  props:{
      dataTransfer:Array,
      required: true
    },
  data(){
    return{
    }
  },
  methods:{
    touserpage(uid){
      this.$router.push({path:'/posts/userPage',query:{uid:uid}})
    },
    changeStar(id){
      this.$store.dispatch('commentPraise/getStar',id)
    }
  }
}
</script>
<style scoped>
  .star{
    line-height: 56px;
  }
</style>
