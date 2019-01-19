<template>
    <div>
        <van-row gutter="10" class="mt-25">
          <van-col span="18">
            <van-field v-model="value" placeholder="发走心评论，交好朋友" />
          </van-col>
          <van-col span="3" class="text-center star">
             <van-icon name="like-o" size="24px"  />
          </van-col>
          <van-col span="3" class="text-center star">
            <van-icon name="star-o" size="24px" />
          </van-col>
      </van-row>
    </div>
</template>

<script>
import { Col,Row,Icon,Field } from 'vant';
export default {
  name: "PublishComponent",
  components:{
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
    [Field.name]:Field,
  },
  data(){
    return{
      value:''
    }
  }
}
</script>

<style scoped>

</style>
