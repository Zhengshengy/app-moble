<!--基本资料-->
<template>
<div>
  <van-nav-bar title="基本资料" left-arrow @click-left="$router.back(-1)"/>
  <div class="container">
    <div class="mt-25 m-0-auo haredimg">
      <img src="../../../static/images/avatar/1.png" class="rounded img-fluid" alt="">
    </div>
    <van-cell-group class="mt-25">
      <van-field v-model="username" label="昵称" placeholder="请设置一个昵称" />
      <van-field v-model="usertext" label="个性签名" placeholder="请设置一个签名" />
      <van-field v-model="sex" label="性别" placeholder="请选择性别" icon="arrow" @focus="show=true" @blur="show=false" />
      <van-field v-model="birthday" label="生日" placeholder="请选择生日" icon="arrow" @focus="show1=true" @blur="show1=false" />
      <van-button class="mt-30" size="large" type="primary" round>保存</van-button>
    </van-cell-group>
  </div>
  <van-popup v-model="show" position="bottom" :overlay="false">
      <van-picker :columns="columns" @change="onChange" />
  </van-popup>
  <van-popup v-model="show1" position="bottom" :overlay="false">
     <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate"
  :max-date="maxDate" @confirm="checkDate" @cancel="show1=false" />
  </van-popup>
</div>
</template>

<script>
import { NavBar,Col,Row,Icon,Field,CellGroup,Popup,Picker ,DatetimePicker,Button    } from 'vant';
export default {
  name: "info",
  components:{
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
    [Field.name]:Field,
    [CellGroup.name]:CellGroup,
    [Popup.name]:Popup,
    [Picker.name]:Picker,
    [DatetimePicker.name]:DatetimePicker,
    [Button.name]:Button,
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  },
  data(){
    return{
      currentDate:new Date(),
      minDate:new Date(1910,1,1),
      maxDate:new Date(),
      show1:false,
      username:'',
      usertext:'',
      birthday:'',
      sex:'',
      columns:['男','女'],
      show:false
    }
  },
  methods:{
    onChange(picker, value, index){
      this.sex = value
      this.show = false
    },
    checkDate(type, value){
      let d = new Date(this.currentDate);
      this.birthday=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
      this.show1 = false
    }
  }
}
</script>

<style scoped>
.haredimg{
  width: 100px;
}
</style>
