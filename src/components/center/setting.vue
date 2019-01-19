<!--//设置-->
<template>
  <div>
      <van-nav-bar title="设置" left-arrow @click-left="$router.back(-1)"/>
      <div class="container">
        <div @click="$router.push('/center/info')">
          <van-row>
            <van-col span="3">
              <van-icon name="gem" size="20px"  />
            </van-col>
            <van-col span="18">基本资料</van-col>
            <van-col span="3">
              <div class="text-right">
                 <van-icon name="arrow" size="20px"   />
              </div>
            </van-col>
          </van-row>
        </div>
        <div @click="$router.push('/center/info')">
          <van-row>
            <van-col span="3">
              <van-icon name="gem" size="20px"  />
            </van-col>
            <van-col span="18">修改密码</van-col>
            <van-col span="3">
              <div class="text-right">
                 <van-icon name="arrow" size="20px"   />
              </div>
            </van-col>
        </van-row>
        </div>
        <div @click="$router.push('/center/gestures')">
          <van-row>
            <van-col span="3">
              <van-icon name="gem" size="20px"  />
            </van-col>
            <van-col span="18">手势密码</van-col>
            <van-col span="3">
              <div class="text-right">
                 <van-icon name="arrow" size="20px"   />
              </div>
            </van-col>
        </van-row>
        </div>
        <div @click="$router.push('/center/feed')">
          <van-row>
            <van-col span="3">
              <van-icon name="gem" size="20px"  />
            </van-col>
            <van-col span="18">意见反馈</van-col>
            <van-col span="3">
              <div class="text-right">
                 <van-icon name="arrow" size="20px"   />
              </div>
            </van-col>
        </van-row>
        </div>
        <div @click="$router.push('/center/help')">
          <van-row>
            <van-col span="3">
              <van-icon name="gem" size="20px"  />
            </van-col>
            <van-col span="18">FQA帮助</van-col>
            <van-col span="3">
              <div class="text-right">
                 <van-icon name="arrow" size="20px"   />
              </div>
            </van-col>
        </van-row>
        </div>
        <div @click="$router.push('/center/info')">
          <van-row>
            <van-col span="3">
              <van-icon name="gem" size="20px"  />
            </van-col>
            <van-col span="18">清除缓存</van-col>
            <van-col span="3">
              <div class="text-right">
                 <van-icon name="arrow" size="20px"   />
              </div>
            </van-col>
        </van-row>
        </div>
        <div @click="$router.push('/center/info')">
          <van-row>
            <van-col span="3">
              <van-icon name="gem" size="20px"  />
            </van-col>
            <van-col span="18">检查版本</van-col>
            <van-col span="3">
              <div class="text-right">
                 <van-icon name="arrow" size="20px"   />
              </div>
            </van-col>
        </van-row>
        </div>
      </div>
  </div>
</template>

<script>
import { NavBar,Col,Row,Icon } from 'vant';

export default {
    name: "setting",
    components:{
      [NavBar.name]:NavBar,
      [Col.name]:Col,
      [Row.name]:Row,
      [Icon.name]:Icon,
    },
    created(){
      this.$emit('public_header', false)
      this.$emit('public_footer', false)
    }
}
</script>

<style scoped>

</style>
