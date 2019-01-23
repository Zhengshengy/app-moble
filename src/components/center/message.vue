<!--我的消息-->
<template>
  <div>
    <van-nav-bar title="我的消息" left-arrow @click-left="$router.back(-1)"/>

    <van-tabs type="line">
      <van-tab title="系统">
        <div class="container mt-15">
          <system-message :data-transfer="SystemMessage"></system-message>
        </div>
      </van-tab>
      <van-tab title="私信">
        <div class="container mt-15">
          <private-message :data-transfer="PrivateMessage"></private-message>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { NavBar,Col,Row,Tab, Tabs } from 'vant';
import SystemMessage from "../Public/SystemMessage";
import PrivateMessage from "../Public/PrivateMessage";
export default {
    components: {
      PrivateMessage,
      SystemMessage,
    [NavBar.name]:NavBar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
  },
  data(){
    return{
      "SystemMessage":[
        {
          "id":"1",
          "date":"2019-1-18",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了，自己给自己过也挺好的"
        },
        {
          "id":"2",
          "date":"2019-1-17",
          "content":"那个半年前说要给我过生日的人现在已经离开了，自己给自己过也挺好的"
        },
        {
          "id":"3",
          "date":"2019-1-16",
          "content":"那个半年前说要给我过生日的人现在已经离开了 "
        },
        {
          "id":"4",
          "date":"2019-1-15",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了，自己给自己过也挺好的 "
        },
        {
          "id":"45",
          "date":"2019-1-14",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了，自己给自己过也挺好的 "
        }
      ],
      "PrivateMessage":[
        {
          "id":"6",
          "head":"../../../static/images/avatar/1.png",
          "name":"唐钰小宝",
          "date":"2019-1-9",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了，自己给自己过也挺好的"
        },
        {
          "id":"7",
          "head":"../../../static/images/avatar/2.png",
          "name":"唐钰",
          "date":"2019-1-8",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了"
        },
        {
          "id":"8",
          "head":"../../../static/images/avatar/3.png",
          "name":"唐钰",
          "date":"2019-1-8",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了"
        },
        {
          "id":"9",
          "head":"../../../static/images/avatar/4.png",
          "name":"小伟",
          "date":"2019-1-8",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了"
        },
        {
          "id":"10",
          "head":"../../../static/images/avatar/5.png",
          "name":"小伟",
          "date":"2019-1-8",
          "content":"以前从来不过生日的 那个半年前说要给我过生日的人现在已经离开了"
        }
      ]
    }
  },
  created(){
    this.$emit('public_header', false)
    this.$emit('public_footer', false)
  }
}
</script>

<style scoped>

</style>




