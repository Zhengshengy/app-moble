<template>
  <div id="waterfall">
      <van-row gutter="20">
          <van-col span="12">
            <div class="left">
                <div class="top">
                  <img src="../../../static/home/111.png" alt="">
                </div>
                <div class="bottom">
                    <div class="info">
                        <van-row gutter="20">
                            <van-col span="6">
                                <div class="heard">
                                    <img src="../../../static/home/222.jpg" alt="">
                                </div>
                            </van-col>
                            <van-col span="18">
                                <span class="username">爱的信仰</span><br>
                                <span>485人推荐</span>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </div>
          </van-col>
          <van-col span="12"><div class="left right">
                <div class="top">
                  <!--<img src="../../../static/home/111.png" alt="">-->
                </div>
                <div class="bottom">
                    <div class="info">
                        <van-row gutter="20">
                            <van-col span="6">
                                <div class="heard">
                                    <!--<img src="../../../static/home/222.jpg" alt="">-->
                                </div>
                            </van-col>
                            <van-col span="18">
                                <span class="username">爱的信仰</span><br>
                                <span>485人推荐</span>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </div></van-col>
      </van-row>

  </div>
</template>
<script>
import { Col,Row } from 'vant';
export default {
  name:'waterfall',
  components: {
    [Col.name]:Col,
    [Row.name]:Row,
  },
}
</script>
<style lang="scss" scoped>
#waterfall {
  margin: 20px auto;
  .left{
    background: #eeecec;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
  }
  .top img{
      width: 100%;
      height: 80%;
    }
    .bottom{
      .info{
        margin-top: 5px;
      }
      width: 100%;
      height: 20%;
      .heard img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 5px;
        }
      .username{
        color: #7d7e80;
        font-size: 16px;
      }
    }
  .right{
    height: 150px;
  }
}
</style>
