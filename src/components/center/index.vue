<template>
  <transition name="fade">
    <div class="container-fluid" style="margin-bottom:65px;">
      <div style="padding: 10px 15px;border-bottom: 1px solid #c8c9cc">
        <van-row>
          <van-col span="12">
            <div>
              <van-icon name="notes-o" size="24px" />
            </div>
          </van-col>
          <van-col span="12">
            <div style="text-align: right">
              <van-icon name="setting-o"  size="24px" @click="setUp" />
            </div>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="8" offset="8">
            <img class="rounded img-fluid" :src="data.avatar" alt="" v-if="data.avatar">
            <img class="rounded img-fluid" src="../../../static/images/avatar/1.png" alt="" v-else>
          </van-col>
          <van-col span="24" class="text-center">
            <div v-if="show==false">
              <div class="my-10">游客</div>
              <div class="login" @click="login">登录</div>
              <div class="mb-10">登录解锁更多权限</div>
            </div>
            <div class="cen-top" v-else-if="show==true">
              <h3>{{data.name}}</h3>
              <img src="../../../static/home/usersex.png" alt="">
              <p>{{grade}}</p>
              <div class="my-5">{{signature}}</div>
            </div>
          </van-col>

        </van-row>

        <div v-if="show==false"></div>
        <div style="text-align: center;margin-top: 10px" v-else-if="show==true">
          <van-row>
            <van-col span="6">
              <router-link to="/center/concern">
                <div style="font-size: 16px">{{data.concern}}</div>
                <div style="color: #969799">关注</div>
              </router-link>
            </van-col>
            <van-col span="6">
              <router-link to="/center/fans">
                <div style="font-size: 16px">{{data.fans}}</div>
                <div style="color: #969799">粉丝</div>
              </router-link>
            </van-col>
            <van-col span="6">
              <router-link to="/center/integral">
                <div style="font-size: 16px">{{data.integral}}</div>
                <div style="color: #969799">积分</div>
              </router-link>
            </van-col>
            <van-col span="6">
              <router-link to="/center/goldCOINS">
                <div style="font-size: 16px">{{data.virtual_coin}}</div>
                <div style="color: #969799">金币</div>
              </router-link>
            </van-col>
          </van-row>
        </div>
      </div>
      <div style="width: 90%;margin: 20px auto">
        <van-row>
          <van-col span="8"><h3>今日观影次数</h3></van-col>
          <van-col span="8"><h3 style="line-height: 20px">0/5</h3></van-col>
          <van-col span="8" style="text-align: right"><h3>升级VIP</h3></van-col>
        </van-row>
      </div>
      <div style="width: 90%;margin: 20px auto;border-bottom: 1px solid #c8c9cc;padding: 0 0 10px" @click="$router.push('/center/post')">
        <van-row>
          <van-col span="2">
            <van-icon name="todo-list" size="20px" style="color: #055fbaa8" />
          </van-col>
          <van-col span="20" style="font-size: 15px">我的帖子</van-col>
          <van-col span="2" style="text-align: right">
            <van-icon name="arrow" size="20px" style="color: #c8c9cc" />
          </van-col>
        </van-row>
      </div>
      <div style="width: 90%;margin: 20px auto;border-bottom: 1px solid #c8c9cc;padding: 0 0 10px" @click="$router.push('/center/comment')">
        <van-row>
          <van-col span="2">
            <van-icon name="comment" size="20px" style="color: #f56ccd" />
          </van-col>
          <van-col span="20" style="font-size: 15px">我的评论</van-col>
          <van-col span="2" style="text-align: right">
            <van-icon name="arrow" size="20px" style="color: #c8c9cc" />
          </van-col>
        </van-row>
      </div>
      <div style="width: 90%;margin: 20px auto;border-bottom: 1px solid #c8c9cc;padding: 0 0 10px" @click="$router.push('/center/giveALike')">
        <van-row>
          <van-col span="2">
            <van-icon name="like" size="20px" style="color: #de6bf5" />
          </van-col>
          <van-col span="20" style="font-size: 15px">我的点赞</van-col>
          <van-col span="2" style="text-align: right">
            <van-icon name="arrow" size="20px" style="color: #c8c9cc" />
          </van-col>
        </van-row>
      </div>
      <div style="width: 90%;margin: 20px auto;border-bottom: 1px solid #c8c9cc;padding: 0 0 10px" @click="$router.push('/center/message')">
        <van-row>
          <van-col span="2">
            <van-icon name="chat" size="20px" style="color: #f56ccd" />
          </van-col>
          <van-col span="20" style="font-size: 15px">我的消息</van-col>
          <van-col span="2" style="text-align: right">
            <van-icon name="arrow" size="20px" style="color: #c8c9cc" />
          </van-col>
        </van-row>
      </div>
      <div style="width: 90%;margin: 20px auto;border-bottom: 1px solid #c8c9cc;padding: 0 0 10px" @click="$router.push('/center/collection')">
        <van-row>
          <van-col span="2">
            <van-icon name="star" size="20px" style="color: #ff976a" />
          </van-col>
          <van-col span="20" style="font-size: 15px">我的收藏</van-col>
          <van-col span="2" style="text-align: right">
            <van-icon name="arrow" size="20px" style="color: #c8c9cc" />
          </van-col>
        </van-row>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Col, Row, Icon, Tag } from 'vant';
  import axios from 'axios'
  export default {
    name: "index",
    components:{
      [Col.name]:Col,
      [Row.name]:Row,
      [Icon.name]:Icon,
      [Tag.name]: Tag
    },
    data(){
      return{
        show:false,
        data:{},
        signature:'',
        grade:''
      }
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', true)
      let id = sessionStorage.getItem('username')
      if (id){
        this.show = true
        axios.get('static/data/users.json').then(e=>{
          this.data = e.data.filter(item=>{
            return item.account == id
          })
          this.data = this.data[0]
          sessionStorage.setItem('userid',this.data.id)
          if (this.data.grade == '0'){
            this.grade = '无证驾驶'
          }
          this.data.signature == ''? this.signature = '这家伙很懒，什么也没留下' :this.signature=this.data.signature
        })
      }
    },
    methods:{
      login(){
        this.$router.push('/login')
      },
      setUp(){
        this.$router.push('/center/setting')
      }
    }
  }
</script>

<style  scoped>
  .login{width: 80px;height: 25px;border-radius: 15px;background: #f44;color: #fff;margin: 0 auto 10px;line-height: 25px}
  .cen-top img{
    width: 14px;
    height: 14px;
    margin:3px 10px 0;
  }
  .cen-top{
    margin-top: 10px;
  }
  .cen-top h3{
    display: inline-block;
    font-size: 16px;
  }
  .cen-top p{
    display: inline-block;;
    background: #fff200;
    color:#000;
    padding:0 5px;
    font-size: 10px;
    border-radius: 30px;

  }
</style>
