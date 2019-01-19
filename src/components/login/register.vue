<template>
  <div class="container-fluid">
    <van-nav-bar title="" :border="false" left-arrow @click-left="$router.back(-1)" />

    <div class="container">
      <h2 class="text-center mt-30 mb-30">用户注册</h2>

      <van-cell-group class="mt-30 mb-30">
        <van-field v-model="username" label="手机号" placeholder="请输入用户名" />
        <van-field v-model="checkcode" center clearable label="验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary" round>发送验证码</van-button>
        </van-field>
        <van-field v-model="password" label="密码" placeholder="请输入用户名" />
        <van-field v-model="invitation" label="邀请码" placeholder="请输入用户名" />
      </van-cell-group>

      <van-button class="mt-30" size="large" type="primary" round>注册</van-button>
    </div>
  </div>
</template>

<script>
  import { NavBar, Field, Button, Cell, CellGroup } from 'vant';

  export default {
    name: "login",
    data(){
      return {
        username: '',
        password: '',
        checkcode: '',
        invitation: ''
      }
    },
    components:{
      [NavBar.name]:NavBar,
      [Field.name]:Field,
      [Button.name]: Button,
      [CellGroup.name]:CellGroup
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false)
    }
  }
</script>
