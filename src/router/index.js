import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

// 注册路由的插件，把路由关联到vue。固定要加的
Vue.use(VueRouter)

// 路由配置
const routes = [
    {
        path: "/",
        // 除了首页之外的页面都可以用懒加载,@符号代表的src这个目录
        component: () => import("@/views/index")
    },
    //直播监控
    {
        path: '/ranking',
        component: () => import("@/views/ranking")
    },
    //排行榜
    {
        path: '/hotlist',
        component: () => import("@/views/hotlist"),
        children: [
            {
                path: 'hotlist0',
                component: () => import('@/views/hotlistClassify/hotlist0')
            },
            {
                path: 'hotlist1',
                component: () => import('@/views/hotlistClassify/hotlist1')
            },
            {
                path: 'hotlist2',
                component: () => import('@/views/hotlistClassify/hotlist2')
            },
            {
                path: 'hotlist3',
                component: () => import('@/views/hotlistClassify/hotlist3')
            },
            {
                path: 'hotlist4',
                component: () => import('@/views/hotlistClassify/hotlist4')
            }
        ],
        redirect: '/hotlist/hotlist0'
    },
    //热门
    {
        path: '/hot',
        component: () => import('@/views/hot'),
        children: [
            {
                path: 'hot0',
                component: () => import('@/views/hotClassify/hot0')
            },
            {
                path: 'hot1',
                component: () => import('@/views/hotClassify/hot1')
            },
            {
                path: 'hot2',
                component: () => import('@/views/hotClassify/hot2')
            },
        ],
        redirect: 'hot/hot0'
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
    //监控历史
    {
        path: '/RankingHistory',
        component: () => import('@/views/RankingHistory')
    }, {
        path: '/motif',
        component: () => import('@/views/motif')
    }
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
