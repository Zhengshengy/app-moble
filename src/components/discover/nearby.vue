<template>
  <!--附近的人-->
  <transition name="fade">
  <div class="container-fluid">
    <van-nav-bar title="附近的人" left-arrow @click-left="$router.back(-1)"/>
    <div class="container">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <user-list-component  :dataTransfer="users"></user-list-component>
      </van-list>
    </div>
  </div>
  </transition>
</template>

<script>
import { NavBar,List} from 'vant';
import UserListComponent from "../Public/UserListComponent";
import axios from 'axios'
export default {
  name: "nearby",
  components: {
    UserListComponent,
    [NavBar.name]:NavBar,
    [List.name]:List
  },
  created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false);
      axios.get('static/data/nearby.json').then(e=>{
        this.users = e.data
      })
  },
  data(){
    return {
      users:[],
      loading: false,
      finished: false
    }
  },
  methods:{
    onLoad() {
      setTimeout(() => {
        axios.get('static/data/nearby1.json').then(e=>{
          e.data.forEach(item=>{
            this.users.push(item)
          })
        })
        this.loading = false;
        this.finished = true;
      }, 500);
    }
  }
}
</script>

<style scoped>
.cen-top{
  display: flex;
}
.photo-20{
  width: 20px;
  height: 20px;
}
</style>
