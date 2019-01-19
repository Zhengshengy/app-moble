<template>
  <div class="container-fluid">
    <van-nav-bar title="我的收藏" :border="false" left-arrow @click-left="$router.back(-1)"/>

    <van-tabs v-model="active">
      <van-tab title="帖子">
        <div class="container"><PostComponent :con="posts" /></div>
      </van-tab>
      <van-tab title="美图">

      </van-tab>
      <van-tab title="原创">

      </van-tab>
      <van-tab title="电影">

      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  import { NavBar, Col,Row, Tab, Tabs } from 'vant';
  import PostComponent from '@/components/Public/PostComponent'

  export default {
    components: {
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      PostComponent
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false)
    },
    data(){
      return {
        posts:[{
          id:1,heard:'static/home/111.jpg',pic:[{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'},{img:'static/img/img2.jpg'}],name:'赵铁柱',time:'3分钟前',con:'以前从来不过生日的 那个半年前说要给我过人生中第一个生日的人已经离开了，自己过得也挺好的。'
        }],
      }
    }
  }
</script>

<style scoped>

</style>
