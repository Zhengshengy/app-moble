<template>
  <div class="container-fluid">
    <van-nav-bar title="" :border="false" right-text="注册" left-arrow @click-left="$router.back(-1)" @click-right="$router.push('/register')"/>

    <div class="container">
      <h2 class="text-center mt-30 mb-30">用户登录</h2>

      <van-cell-group class="mt-30 mb-30">
        <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
        <van-field v-model="password" label="密码" placeholder="请输入用户名" />
      </van-cell-group>

      <van-button class="mt-30" size="large" type="primary" round @click="sub">登录</van-button>

    </div>
  </div>
</template>

<script>
  import { NavBar, Field, Button, Cell, CellGroup } from 'vant';

  export default {
    name: "login",
    data(){
      return {
        username:'',
        password:''
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
    },
    methods:{
      sub(){
        sessionStorage.setItem('username',this.username)
        this.$router.push('/center')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
