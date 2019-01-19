<template>
    <div class="container-fluid" style="margin-bottom:65px;">
      <div style="padding: 10px 15px;border-bottom: 1px solid #c8c9cc">
          <van-row>
          <van-col span="4">
            <div>
              <van-icon name="notes-o" size="24px" />
            </div>
          </van-col>
          <van-col span="16" style="text-align: center">
            <div class="heardimg">
              <img class="rounded img-fluid" src="../../../static/images/avatar/1.png" alt="">
            </div>
            <div v-if="show==false">
              <h3 style="margin: 5px 0">游客</h3>
              <div class="login" @click="login">登录</div>
              <div style="color: #969799;margin-bottom: 10px">登录解锁更多权限</div>
            </div>
            <div class="cen-top" v-else-if="show==true">
                <h3>小凤仙</h3>
                <img src="../../../static/home/usersex.png" alt="">
                <p>无证驾驶</p>
                <div style="color: #969799;margin: 5px 0">这家伙很懒，什么也没留下</div>
            </div>
          </van-col>
          <van-col span="4">
            <div style="text-align: right">
              <van-icon name="setting-o"  size="24px" @click="setUp" />
            </div>
          </van-col>
        </van-row>
        <div v-if="show==false"></div>
        <div style="text-align: center;margin-top: 10px" v-else-if="show==true">
          <van-row>
              <van-col span="6">
                  <router-link to="/center/concern">
                      <div style="font-size: 16px">123</div>
                      <div style="color: #969799">关注</div>
                  </router-link>
              </van-col>
              <van-col span="6">
                <router-link to="/center/fans">
                  <div style="font-size: 16px">123</div>
                  <div style="color: #969799">粉丝</div>
                </router-link>
              </van-col>
              <van-col span="6">
                <router-link to="/center/integral">
                  <div style="font-size: 16px">123</div>
                  <div style="color: #969799">积分</div>
                </router-link>
              </van-col>
              <van-col span="6">
                <router-link to="/center/goldCOINS">
                  <div style="font-size: 16px">123</div>
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
</template>

<script>
    import { Col,Row,Icon } from 'vant';
    export default {
        name: "myindex",
        components:{
          [Col.name]:Col,
          [Row.name]:Row,
          [Icon.name]:Icon,

        },
        data(){
          return{
            show:false
          }
        },
        created(){
          this.$emit('public_header', false)
          this.$emit('public_footer', true)
          if (sessionStorage.getItem('username')){
            this.show = true
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
.heardimg{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
}
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
