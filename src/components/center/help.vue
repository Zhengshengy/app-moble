<!--帮助中心-->
<template>
<div class="container-fluid">
  <van-nav-bar title="帮助中心" left-arrow @click-left="$router.back(-1)"/>
  <div class="container mt-15">
    <div class="mb-15" v-for="(item,index) in data" :key="index">
      <van-row class="mb-10" span="24">
        <van-col>{{item.question}}</van-col>
      </van-row>
      <van-row span="24">
        <van-col>{{item.answer}}</van-col>
      </van-row>
    </div>

  </div>
</div>
</template>

<script>
import { NavBar,Col,Row,Icon } from 'vant';
export default {
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
  },
  data(){
    return{
      data:[
        {
          "question":"Q1如果我所在区域没有现货，可以从其他地方调货给我发吗？",
          "answer":"很抱歉，为了确保配送时效，京东暂不支持跨区域调货，请您谅解。"
        },
        {
          "question":"Q2页面显示有货的商品，为什么下单之后会显示无货呢？",
          "answer":"可能同时下单的客户比较多，偶尔会出现此情况，请您选择其他商品。如果您喜欢此商品，可以通过商品页面的“到货通知”功能获得商品到货提醒。到货即可再次购买。"
        },
        {
          "question":"Q3如何区分京东自营销售和第三方卖家销售的商品？",
          "answer":""
        },
        {
          "question":"Q4电子书支持什么系统，下载次数多少？？",
          "answer":""
        },
        {
          "question":"Q5如何在电子书客户端购买图书?",
          "answer":""
        },
        {
          "question":"Q6 预定商品什么时候可以到货？？",
          "answer":""
        },
        {
          "question":"Q7 评价和晒单删除了后可以恢复吗？？",
          "answer":""
        },
        {
          "question":"Q8 在京东购买的商品是如何包装的？",
          "answer":""
        },
        {
          "question":"Q9  礼品包装是如何包装的呢？？",
          "answer":""
        },
        {
          "question":"Q10 合约机套餐费用如何收取？？",
          "answer":""
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>

