<template>
  <div>
    <div class="my-15" @click="goNovelDetail(item.id)" v-for="(item,index) in dataTransfer" :key="index">
    <van-row type="flex" align="center">
      <van-col span="22">
        <h3>{{item.id}}{{item.name}}</h3>
        <p>
          <span>时长:<em>{{item.timelong}}</em></span><span>更新:<em>{{item.updata}}</em></span>
        </p>
      </van-col>
      <van-col span="2">
        <van-icon @click="changeplay(index)" size="18px" :name="iconname" />
      </van-col>
    </van-row>
  </div>
  </div>
</template>

<script>
import { Col, Row, Icon} from 'vant';
export default {
  name:"NovelComponent",
  components:{
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon
  },
  props:{
    dataTransfer:Array,
    required: true
  },
  data(){
    return {
      iconname:"play"
    }
  },
  methods:{
    changeplay(index){
      this.iconname =="play"?this.iconname = "stop":this.iconname = "play"
    },
    goNovelDetail(){
      this.$router.push("/novel/detail")
    }
  }
}
</script>

<style lang="css">
</style>
