<template lang="html">
  <div class="container-fluid"  style=" height:100%; background: #000;" @click="display">
      <!--头部菜单-->
      <div class="comic-header parent">
        <div class="change">
          <div class="action" style="width:20px;">
          <van-icon size="0.25rem" name="arrow-left" @click="$router.push('/discover/comic')"/>
          </div>
        </div>
        <div class="stable" style="width:0.9rem;">
          <div class="action text-center custom-indicator" slot="indicator">
            {{ current + 1 }}/4
          </div>
        </div>
        <div class="stable">
          <div class="action">
            <van-icon size="0.25rem" name="apps-o" @click="$router.push('/comic/square')"/>
          </div>
        </div>
        <div class="stable">
          <div class="action">
            <van-icon size="0.25rem" name="share" @click=""/>
          </div>
        </div>
      </div>
      <!--轮播图-->
      <van-swipe @change="onChange" @touchstart="start" @touchmove="move" @touchend="end">
        <van-swipe-item>
          <img class="img-fluid" src="../../../static/images/comic/1-1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="img-fluid" src="../../../static/images/comic/1-2.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="img-fluid" src="../../../static/images/comic/1-3.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="img-fluid" src="../../../static/images/comic/1-4.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
      <!--评论列表-->
      <div class="comment-container" v-show="show1==true" @click.stop="">
        <div class="container">
          <CommentComponent :dataTransfer="comments" />
        </div>
      </div>
      <!--底部菜单-->
      <div class="comic-footer parent" v-show="show==false">
        <div class="change">
          <div class="action"  style="padding-left:0.2rem">
            <div @click.stop="showSubmit">发走心评论，交知心朋友</div>
          </div>
        </div>
        <div class="stable">
          <div class="action">
          <van-icon size="0.25rem" name="thumb-circle-o" info="20" @click=""/>
          </div>
        </div>
        <div class="stable">
          <div class="action">
          <van-icon size="0.25rem" name="star-o" info="20" @click=""/>
          </div>
        </div>
        <div class="stable">
          <div class="action">
          <van-icon size="0.25rem" name="more-o" @click.stop="showComment"/>
          </div>
        </div>
      </div>
      <!--评论发布框-->
      <div class="inputBox" v-show="show==true" @click.stop="">
        <input type="text" v-focus placeholder="发走心评论，交知心朋友">
        <button>发布</button>
      </div>
  </div>
</template>

<script>
  import { NavBar, Col, Row, Swipe, SwipeItem, Icon,Field  } from 'vant';
  import CommentComponent from '@/components/Public/CommentComponent'
  export default {
    components:{
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Icon.name]: Icon,
      [Field.name]: Field,
      CommentComponent
    },
    directives:{
      focus: {
        update:function (el) {
          el.focus()
        }
      }
    },
    created(){
      this.$emit('public_header', false);
      this.$emit('public_footer', false);
      this.current = this.$route.query.id ? this.$route.query.id : 0
    },
    data() {
      return {
        current: 0,
        value: '',
        show: false,
        show1: false,
        comments:[{
        src:'static/images/avatar/1.png',name:'陈伟霆',time:'3分钟之前',con:'景色不错有机会我也去看看'
      },
        {
        src:'static/images/avatar/2.png',name:'陈冠希',time:'3分钟之前',con:'景色不错有机会我也去看看'
      },
        {
        src:'static/images/avatar/3.png',name:'陈小春',time:'3分钟之前',con:'景色不错有机会我也去看看'
      }
      ],
        startY:0,
        endY:0,
        curY:0
      }
    },
    methods: {
      showSubmit(){
        this.show = true;
      },
      showComment(){
        this.show1 = true
      },
      onChange(index) {
        this.current = index;
      },
      display(){
        this.show = false;
        this.show1 = false
      },
      start(e){
        this.startY = e.targetTouches[0].clientY
      },
      move(e){
        this.curY = e.targetTouches[0].clientY
        this.endY = this.curY - this.startY
      },
      end(){
        if (this.endY>0){
          // alert('下拉')
        } else if (this.endY<0){
          // alert('上拉')
        }
      }
    }
  }
</script>

<style lang="css" scoped>
.parent{height:50px;display:flex;/*设为伸缩容器*/flex-flow:row;/*伸缩项目单行排列*/}
.stable{width:50px;/*固定宽度*/}
.change{flex:1;/*这里设置为占比1，填充满剩余空间*/}

.custom-indicator{}
.action{ background-color: #333; color:#FFF; margin: 10px; height: 18px; line-height: 18px; padding: 5px 5px; border-radius: 25px;}
.comic-footer{width:100%;position: fixed;bottom: 0}

.inputBox{position: fixed; bottom: 0; height: 50px; width: 100%; border-top: solid 1px #EEE; background: #FFF;}
.inputBox input{ border: none; background: #EEE; height: 30px;width: 70%; padding: 0px 10px; margin: 10px; border-radius: 15px;}
.comment-container{position: fixed; min-height: 60%;bottom: 0;padding:20px 0px 50px 0px; background: #ffffff;overflow: auto}
</style>
