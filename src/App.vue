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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
*{margin:0;padding:0}

li{list-style:none}

img{vertical-align:top;border:none}
</style>
