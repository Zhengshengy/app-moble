<template>
  <div>
  <!--底部菜单-->
  <div class="comment-toolbar parent active" v-show="show==false">
    <div class="change">
      <div class="action"  style="padding-left:0.2rem">
        <div @click.stop="showSubmit">发走心评论，交知心朋友</div>
      </div>
    </div>
    <div class="stable">
      <div class="action">
        <div v-if="thumb==false">
          <van-icon size="0.25rem" name="thumb-circle-o"  @click="changeThumb"/>
        </div>
        <div v-else>
          <van-icon size="0.25rem" color="#ff976a" name="youzan-shield"  @click="changeThumb"/>
        </div>
      </div>
    </div>
    <div class="stable">
      <div class="action">
        <div v-if="star==false">
          <van-icon size="0.25rem" name="star-o"  @click="changeStar"/>
        </div>
        <div v-else>
          <van-icon size="0.25rem" color="#ff976a" name="star"  @click="changeStar"/>
        </div>
      </div>
    </div>
  </div>
  <!--评论发布框-->
  <div class="inputBox" v-show="show==true" @click.stop="">
    <input type="text" v-focus placeholder="发走心评论，交知心朋友" @blur="hiddeSubmit">
    <button>发布</button>
  </div>
  </div>
</template>

<script>
import { Col,Row,Icon,Field } from 'vant';
export default {
  name: "PublishComponent",
  components:{
    [Col.name]:Col,
    [Row.name]:Row,
    [Icon.name]:Icon,
    [Field.name]:Field,
  },
  directives:{
    focus: {
      update:function (el) {
        el.focus()
      }
    }
  },
  data(){
    return{
      show: false,
      thumb: true,
      star: false
    }
  },
  methods:{
    showSubmit(){
      this.show = true;
    },
    hiddeSubmit(){
      this.show = false;
    },
    changeThumb(){
      this.thumb = !this.thumb
    },
    changeStar(){
      this.star = !this.star
    }
  }
}
</script>

<style scoped>
  .parent{height:50px;display:flex;/*设为伸缩容器*/flex-flow:row;/*伸缩项目单行排列*/}
  .stable{width:50px;/*固定宽度*/}
  .change{flex:1;/*这里设置为占比1，填充满剩余空间*/}

  .comment-toolbar{width:100%; position: fixed; bottom: 0}
  .action{ background-color: #333; color:#FFF; margin: 10px; height: 18px; line-height: 18px; padding: 5px 5px; border-radius: 25px;}
  .active{ background: #FFF;}
  .active .action{ background: #EEE; color: #999}

  .inputBox{position: fixed; bottom: 0; height: 50px; width: 100%; border-top: solid 1px #EEE; background: #FFF;}
  .inputBox input{ border: none; background: #EEE; height: 30px;width: 70%; padding: 0px 15px; margin: 10px; border-radius: 15px;}

</style>
