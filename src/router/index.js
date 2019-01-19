import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //登录
    {
      path: '/start',
      name: 'Start',
      component: ()=>import('@/components/login/start')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('@/components/login/login')
    },
    {
      path: '/register',
      name: 'Register',
      component: ()=>import('@/components/login/register')
    },
    //社区
    {
      path: '/',
      name: 'Index',
      component: ()=>import('@/components/posts/index')
    },
    {
      path: '/posts/detail',
      name: 'PostDetail',
      component: ()=>import('@/components/posts/detail')
    },
    {
      path: '/posts/submit',
      name: 'Post',
      component: ()=>import('@/components/posts/submit')
    },
    {
      path: '/posts/userPage',
      name: 'UserPage',
      component: ()=>import('@/components/posts/userPage')
    },
    //影视
    {
      path: '/video',
      name: 'Video',
      component: ()=>import('@/components/video/index'),
    },
    {
      path: '/video/actor/main',
      name: 'ActorDetail',
      component: ()=>import('@/components/actor/detail'),
    },
    {
      path: '/video/actor',
      name: 'Actor',
      component: ()=>import ('@/components/actor/index'),
    },
    {
      path: '/video/detail',
      name: 'VideoDetail',
      component: ()=>import ('@/components/video/detail'),
    },
    // 原创
    {
      path: '/original',
      name: 'Original',
      component: ()=>import ('@/components/original/index')
    },
    {
      path: '/original/news',
      name: 'OriginalNews',
      component: ()=>import ('@/components/original/news')
    },
    {
      path: '/original/focus',
      name: 'OriginalFocus',
      component: ()=>import ('@/components/original/focus'),
    },
    {
      path: '/original/submit',
      name: 'Submit',
      component: ()=>import ('@/components/original/submit'),
    },
    {
      path: '/original/detail',
      name: 'Detail',
      component: ()=>import ('@/components/original/detail'),
    },
    //发现
    {
      path: '/discover',
      name: 'Discover',
      component: ()=>import ('@/components/discover/index'),
    },
    {
      path: '/discover/nearby',
      name: 'Nearby',
      component: ()=>import ('@/components/discover/nearby')
    },
    {
      path: '/discover/album',
      name: 'Novel',
      component: ()=>import ('@/components/discover/album')
    },
    {
      path: '/album/detail',
      name: 'AlbumDetail',
      component: ()=>import ('@/components/album/detail')
    },
    {
      path: '/novel/detail',
      name: 'NovelDetail',
      component: ()=>import ('@/components/novel/detail')
    },
    {
      path: '/discover/comic',
      name: 'Comic',
      component: ()=>import ('@/components/discover/comic')
    },
    {
      path: '/comic/detail',
      name: 'ComicDetail',
      component: ()=>import ('@/components/comic/detail')
    },
    {
      path: '/comic/square',
      name: 'ComicSquare',
      component: ()=>import ('@/components/comic/square')
    },
    {
      path: '/discover/download',
      name: 'Download',
      component: ()=>import ('@/components/discover/download')
    },
    {
      path: '/anchor',
      name: 'Anchor',
      component: ()=>import ('@/components/anchor/index')
    },
    {
      path: '/anchor/detail',
      name: 'AnchorDetail',
      component: ()=>import ('@/components/anchor/detail')
    },
    //个人中心
    {
      path: '/center',
      name: 'Center',
      component: ()=>import ('@/components/center/index')
    },
    {
      path: '/center/setting',
      name: 'Setting',
      component: ()=>import ('@/components/center/setting')
    },
    {
      path: '/center/concern',
      name: 'Concern',
      component: ()=>import ('@/components/center/concern')
    },
    {
      path: '/center/fans',
      name: 'Fans',
      component: ()=>import ('@/components/center/fans')
    },
    {
      path: '/center/integral',
      name: 'Integral',
      component: ()=>import ('@/components/center/integral')
    },
    {
      path: '/center/goldCOINS',
      name: 'GoldCOINS',
      component: ()=>import ('@/components/center/goldCOINS')
    },
    {
      path: '/center/post',
      name: 'CenterPost',
      component: ()=>import ('@/components/center/post')
    },
    {
      path: '/center/giveALike',
      name: 'GiveALike',
      component: ()=>import ('@/components/center/giveALike')
    },
    {
      path: '/center/message',
      name: 'Message',
      component: ()=>import ('@/components/center/message')
    },
    {
      path: '/center/collection',
      name: 'Collection',
      component: ()=>import ('@/components/center/collection')
    },
    {
      path: '/center/info',
      name: 'Info',
      component: ()=>import ('@/components/center/info')
    },
    {
      path: '/center/feed',
      name: 'Feed',
      component: ()=>import ('@/components/center/feed')
    },
    {
      path: '/center/help',
      name: 'Help',
      component: ()=>import ('@/components/center/help')
    },
    {
      path: '/center/gestures',
      name: 'Gestures ',
      component: ()=>import ('@/components/center/gestures')
    },
    {
      path: '/center/comment',
      name: 'Comment ',
      component: ()=>import ('@/components/center/comment')
    }
  ]
})
