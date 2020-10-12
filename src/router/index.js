import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

// 注册路由的插件，把路由关联到vue。固定要加的
Vue.use(VueRouter)

// 路由配置
const routes = [
    {
        path: "/",
		name: "首页",
        // 除了首页之外的页面都可以用懒加载,@符号代表的src这个目录
        component: () => import("@/views/index")
    },
    //播主
    {
        path: '/podcast',
        component: () => import("@/views/podcast")
    },
    //商品
    {
        path: '/commodity',
        component: () => import("@/views/commodity")
    },
    //直播
    {
        path: '/streaming',
        component: () => import("@/views/streaming")
    },
    //我的
    {
        path: '/personage',
        component: () => import('@/views/personage')
    },
    //我的抖音号
    {
        path: '/MyRanking',
        component: () => import('@/views/MyRanking')
    },
    //创意素材
    {
        path: '/originality',
        component: () => import('@/views/originality')
    },
    //监控历史
    {
        path: '/RankingHistory',
        component: () => import('@/views/RankingHistory')
    },
    {
        path: '/motif',
        component: () => import('@/views/motif')
    },
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    //搜索页面
    {
        path: '/search',
        component: () => import('@/views/search')
    },
    //直播详情
    {
        path: '/streamingParticulars',
        component: () => import('@/views/streamingParticulars')
    },
    //播主详情
    {
        path: '/podcastParticulars',
        component: () => import('@/views/podcastParticulars')
    },
    //视频详情
    {
        path: '/videoParticulars',
        component: () => import('@/views/videoParticulars')
    },
    //商品详情
    {
        path: '/commodityParticulars',
        component: () => import('@/views/commodityParticulars')
    },
    //音乐详情
    {
        path: '/musicParticulars',
        component: () => import('@/views/musicParticulars')
    },
    //话题详情
    {
        path: '/wordParticulars',
        component: () => import('@/views/wordParticulars')
    },
    //个人中心详情
    {
        path: '/personalParticulars',
        component: () => import('@/views/personalParticulars')
    },
    //绑定手机号
    {
        path: '/phone',
        component: () => import('@/views/phone')
    },
    //设置密码
   {
    path: '/password',
    component: () => import('@/views/password')
},

    // 直播监控
    {
        path: '/ranking',
        component: () => import('@/views/ranking')
    },
    // 抖音号估值
    {
        path: '/price',
        component: () => import('@/views/price')
    },
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    //路由配置
    routes
})

export default router
