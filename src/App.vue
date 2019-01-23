<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>
import Header from './components/Public/Header'
import Footer from './components/Public/Footer'

export default {
  name: 'App',
  data(){
      return {
          header_show:true,
          footer_show:true,

      }
  },
  components: {
        'app-header':Header,
        'app-footer':Footer,
  },
  methods:{
      //是否显示头部 如果不显示 this.$emit('public_header', false);
      public_header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      public_footer:function (bool) {
          this.footer_show = bool;
      }
  }

}
</script>

<style>
  @import "assets/css/public.css";
  html,body{ height: 100%;}
  #app {
    height: 100%;
    font-size: 12px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *{margin:0;padding:0}

  li{list-style:none}
  img{vertical-align:top;border:none}
  a{ color: black; }

  .container{ padding: 0px 15px}
  .container-fluid{ width: 100%; margin: 0px; padding: 0px}
  .img-fluid{ width: 100%;}
  .img-thumb{ border-radius: 6px;}

  .rounded{ border-radius: 50%}
  .text-center{ text-align: center}
  .text-right{ text-align: right;}
  .column-title{ padding: 0.2rem 0rem}

  .header{ line-height: 50px; font-size:0.213333rem; font-weight:500;}
  .header .van-icon{ line-height: 50px;}
  .header .van-col{ line-height: 50px; height: 50px;}

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  /*
  .fade-enter-active {
    transition: all .4s ease-out;
  }
  */

  /*
  .fade-leave-active {
    transition: all .4s ease-out;
  }
  */

  /*
  .fade-enter  {
    transform: translateX(375px);
    opacity: 0;
  }
  */



  .fade-enter-active, .fade-leave-active {
    transition: all .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 1;
  }
  .fade-enter {
    transform: translateX(100%);
  }
  .fade-leave-active {
    transform: translateX(-100%);
  }


</style>
