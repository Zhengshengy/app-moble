<template>
  <div>
      <van-nav-bar title="演员" left-arrow @click-left="$router.back(-1)"/>
      <div class="container" >
          <van-row type="flex" justify="space-between"  class="actor" gutter="20">
            <van-col span="6"  v-for="(i,k) in list" :key="k" >
              <div @click="actormain">
                <img :src="i.src" alt="">
                <div style="margin-top: 5px">{{i.name}}</div>
              </div>
            </van-col>
          </van-row>
      </div>
  </div>
</template>
<script>
  import { NavBar,Col,Row } from 'vant';
export default {
  name:'videoMain',
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
  },
  data(){
    return{
      list:[{src:'static/images/avatar/1.png',name:'陈伟霆'},{src:'static/images/avatar/2.png',name:'陈赫'},{src:'static/images/avatar/3.png',name:'王子'},{src:'static/images/avatar/4.png',name:'成龙'},{src:'static/images/avatar/5.png',name:'李连杰'},{src:'static/images/avatar/6.png',name:'周润发'},{src:'static/images/avatar/7.png',name:'刘德华'},{src:'static/images/avatar/8.png',name:'张家辉'},{src:'static/images/avatar/9.png',name:'梁朝伟'},{src:'static/images/avatar/10.png',name:'李宇春'},{src:'static/images/avatar/11.png',name:'王大锤'},{src:'static/images/avatar/12.png',name:'李小龙'},{src:'static/images/avatar/12.png',name:'王宝强'},{src:'static/images/avatar/13.png',name:'李小璐'},{src:'static/images/avatar/14.png',name:'韩庚'},{src:'static/images/avatar/15.png',name:'马云'},{src:'static/images/avatar/16.png',name:'李晨'},{src:'static/images/avatar/17.png',name:'王大发'},{src:'static/images/avatar/18.png',name:'赵本山'},{src:'static/images/avatar/19.png',name:'宋丹丹'}],
    }
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  methods:{
    actormain(){
      this.$router.push('/video/actor/main')
    },
  }
}
</script>
<style scoped>
  .con{
    width: 90%;
    margin: 20px auto;
  }
  .actor{
    flex-wrap: wrap;
    text-align: center;
  }
  .actor img{
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin: 10px auto;
  }
</style>
