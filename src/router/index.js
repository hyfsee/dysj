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
        component: () => import("@/views/index"),
        meta: {
            topIconShow: false,
            fotShow: true,
            topShow: true,
            name: '首页'
        }
    },
    //播主
    {
        path: '/podcast',
        component: () => import("@/views/podcast"),
        meta: {
            topIconShow: false,
            fotShow: true,
            topShow: true,
            name: '播主'
        }
    },
    //商品
    {
        path: '/commodity',
        component: () => import("@/views/commodity"),
        meta: {
            topIconShow: false,
            fotShow: true,
            topShow: true,
            name: '商品'
        }
    },
    //直播
    {
        path: '/streaming',
        component: () => import("@/views/streaming"),
        meta: {
            topIconShow: false,
            fotShow: true,
            topShow: true,
            name: '直播'
        }
    },
    //我的
    {
        path: '/personage',
        component: () => import('@/views/personage'),
        meta: {
            topIconShow: false,
            fotShow: true,
            topShow: true,
            name: '我的'
        }
    },
    //我的
    {
        path: '/MyRanking',
        component: () => import('@/views/MyRanking'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '我的'
        }
    },
    //创意素材
    {
        path: '/originality',
        component: () => import('@/views/originality'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '创意素材'
        }
    },
    //监控历史
    {
        path: '/RankingHistory',
        component: () => import('@/views/RankingHistory'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '监控历史'
        }
    },
    //主题设置
    {
        path: '/motif',
        component: () => import('@/views/motif'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '主题设置'
        }
    },
    //登陆页面
    {
        path: '/login',
        component: () => import('@/views/login'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '登陆'
        }
    },
    //注册页面
    {
        path: '/register',
        component: () => import('@/views/register'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '注册'
        }
    },
    //搜索页面
    {
        path: '/search',
        component: () => import('@/views/search'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '搜索'
        }
    },
    //直播详情
    {
        path: '/streamingParticulars',
        component: () => import('@/views/streamingParticulars'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '直播详情'
        }
    },
    //播主详情
    {
        path: '/podcastParticulars',
        component: () => import('@/views/podcastParticulars'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '播主详情'
        }
    },
    //视频详情
    {
        path: '/videoParticulars',
        component: () => import('@/views/videoParticulars'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '视频详情'
        }
    },
    //商品详情
    {
        path: '/commodityParticulars',
        component: () => import('@/views/commodityParticulars'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '商品详情'
        }
    },
    //音乐详情
    {
        path: '/musicParticulars',
        component: () => import('@/views/musicParticulars'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '音乐详情'
        }
    },
    //话题详情
    {
        path: '/wordParticulars',
        component: () => import('@/views/wordParticulars'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '话题详情'
        }
    },
    //个人中心详情
    {
        path: '/personalParticulars',
        component: () => import('@/views/personalParticulars'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '个人中心'
        }
    },
    //绑定手机号
    {
        path: '/phone',
        component: () => import('@/views/phone'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '绑定手机号'
        }
    },
    //设置密码
    {
        path: '/password',
        component: () => import('@/views/password'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '设置密码'
        }
    },
    // 直播监控
    {
        path: '/ranking',
        component: () => import('@/views/ranking'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '直播监控'
        }
    },
    // 抖音号估值
    {
        path: '/price',
        component: () => import('@/views/price'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '抖音号估值'
        }
    },
    //收藏详情
    {
        path: '/collect',
        component: () => import('@/views/collect'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '收藏详情'
        }
    },
    //购买记录 
    {
        path: '/purchase',
        component: () => import('@/views/purchase'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '购买记录'
        }
    },
    //会员充值
    {
        path: '/member',
        component: () => import('@/views/member'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '会员充值'
        }
    },
    //查看更多账号
    {
        path: '/account',
        component: () => import('@/views/account'),
        meta: {
            topIconShow: true,
            topShow: true,
            name: '查看更多账号'
        }
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
