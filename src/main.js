// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {VueMasonryPlugin} from 'vue-masonry';
import 'postcss-pxtorem'

import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
// require('videojs-contrib-hls/dist/videojs-contrib-hls')
Vue.use(VueMasonryPlugin)
Vue.use(VideoPlayer)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
