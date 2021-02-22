import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// resolve=>(require(["@/views/resetPwd/pages/step3"],resolve))

// asyncRoutes  异步路由，登录后通过 role，判断该用户是否有该权限，当有权限时，再将该router加入到constantRoutes
// constantRoutes  恒定路由，放一些公共路由，不需要权限判断
export const constantRoutes = [{
        path: '/login',
        component: resolve => (require(["@/views/login/index"], resolve)),
        hidden: true
    },

    // 注册
    {
        path: '/register',
        component: resolve => (require(["@/views/register"], resolve)),
        hidden: true,
        meta: {
            title: '注册'
        }
    },

    // 重置密码
    {
        path: '/reset_pwd',
        component: resolve => (require(["@/views/resetPwd"], resolve)),
        hidden: true,
        meta: {
            title: '找回密码'
        }
    },

    // 重置密码 step2
    {
        path: '/reset_pwd/step2',
        component: resolve => (require(["@/views/resetPwd/pages/step2"], resolve)),
        hidden: true,
        meta: {
            title: '步骤2'
        }
    },

    // 重置密码 step3
    {
        path: '/reset_pwd/step3',
        component: resolve => (require(["@/views/resetPwd/pages/step3"], resolve)),
        hidden: true,
        meta: {
            title: '步骤3'
        }
    },

    // 重置密码 step4
    {
        path: '/reset_pwd/step4',
        component: resolve => (require(["@/views/resetPwd/pages/step4"], resolve)),
        hidden: true,
        meta: {
            title: '步骤4'
        }
    },

    // 404 页面
    {
        path: '/404',
        component: resolve => (require(["@/views/404"], resolve)),
        hidden: true
    },

    // 默认主页
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',

        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: resolve => (require(["@/views/dashboard/index"], resolve)),
            meta: {
                title: '首页',
                icon: 'dashboard'
            }
        }]
    },


    // export const asyncRouterMap = [

    //------------数据模块start--------------------------------
    {
        path: '/data',
        component: Layout,
        redirect: '/data/publicData',
        name: 'customer',
        meta: {
            title: '数据',
            icon: 'data',
            roles: ['admin']
        },

        children: [{
            path: 'publicData',
            name: 'publicData',
            component: resolve => (require(['@/views/data/publicData'], resolve)),
            meta: {
                title: '公域数据',
                icon: 'dataOverView'
            },
            redirect: '/data/publicData/weiboData',
            children: [{
                    path: 'weiboData',
                    name: 'weiboData',
                    component: () =>
                        import ('@/views/data/publicData/weiboData'),
                    meta: {
                        title: '微博数据概览',
                        icon: 'weibo'
                    }
                },
                {
                    path: 'importData',
                    name: 'importData',
                    component: () =>
                        import ('@/views/data/publicData/weiboData/importData'),
                    meta: {
                        title: '微博数据上传',
                        icon: 'dataForm'
                    },
                    hidden: true
                },
                {
                    path: 'importJDData',
                    name: 'importJDData',
                    component: () =>
                        import ('@/views/data/publicData/jingdongData/importData'),
                    meta: {
                        title: '京东数据上传',
                        icon: 'dataForm'
                    },
                    hidden: true
                },
                {
                    path: 'jingdongData',
                    name: 'jingdongData',
                    component: () =>
                        import ('@/views/data/publicData/jingdongData'),
                    meta: {
                        title: '京东数据概览',
                        icon: 'JD'
                    }
                }
            ]

        }, {
            path: 'privateData',
            name: 'privateData',
            component: resolve => (require(['@/views/data/privateData'], resolve)),
            meta: {
                title: '私域数据',
                icon: 'tree'
            }
        }]
    },
    //------------客户模块end--------------------------------


    // ---------营销模块start-------------------------
    {
        path: '/marketing',
        component: Layout,
        redirect: '/marketing/activityManage',
        name: 'marketing',
        meta: {
            title: '营销',
            icon: 'marketing-channels'
        },
        children: [{
                path: 'activityManage',
                name: 'activityManage',
                component: resolve => (require(['@/views/marketing/activityManage'], resolve)),
                meta: {
                    title: '活动管理',
                    icon: 'activityManage'
                },
                children: [{
                        path: 'MarketingCalendar',
                        name: 'MarketingCalendar',
                        component: () =>
                            import ('@/views/marketing/activityManage/MarketingCalendar'),
                        meta: {
                            title: '营销日历',
                            icon: 'calendar'
                        }
                    },
                    {
                        path: 'menu2',
                        name: 'UserPortrait',
                        component: () =>
                            import ('@/views/marketing/activityManage/menu2'),
                        meta: {
                            title: 'menu2',
                            icon: 'form'
                        }
                    }
                ]


            }, {
                path: 'ItineraryManage',
                name: 'ItineraryManage',
                component: resolve => (require(['@/views/marketing/ItineraryManage'], resolve)),
                meta: {
                    title: '旅程管理',
                    icon: 'jobForecastScheduling'
                },
                children: [{
                        path: 'CustomerArrange',
                        name: 'CustomerArrange',
                        component: () =>
                            import ('@/views/marketing/ItineraryManage/CustomerArrange'),
                        meta: {
                            title: '客户旅程',
                            icon: 'arrange'
                        }
                    },
                    {
                        path: 'menu2',
                        name: 'menu2',
                        component: () =>
                            import ('@/views/marketing/ItineraryManage/menu2'),
                        meta: {
                            title: 'menu2',
                            icon: 'form'
                        }
                    }
                ]
            },

            {
                path: 'ContentManage',
                name: 'ContentManage',
                component: resolve => (require(['@/views/marketing/ContentManage/index'], resolve)),
                meta: {
                    title: '内容管理',
                    icon: 'contentManage'
                },
                children: [{
                        path: 'wechatQRcode',
                        name: 'wechatQRcode',
                        component: () =>
                            import ('@/views/marketing/ContentManage/wechatQRcode'),
                        meta: {
                            title: '公众号二维码',
                            icon: 'QRcode'
                        }
                    },
                    {
                        path: 'wechatTemplate',
                        name: 'wechatTemplate',
                        component: () =>
                            import ('@/views/marketing/ContentManage/wechatTemplate'),
                        meta: {
                            title: '公众号模板',
                            icon: 'wechatTemplate'
                        }
                    },
                    {
                        path: 'smsTemplate',
                        name: 'smsTemplate',
                        component: () =>
                            import ('@/views/marketing/ContentManage/smsTemplate'),
                        meta: {
                            title: '短信模板',
                            icon: 'sms'
                        }
                    },
                    {
                        path: 'mailTemplate',
                        name: 'mailTemplate',
                        component: () =>
                            import ('@/views/marketing/ContentManage/mailTemplate'),
                        meta: {
                            title: '邮件模板',
                            icon: 'mail'
                        }
                    }
                ]

            }
        ]
    },
    //--------------end------------------------------


    //--------------分析模块start---------------------
    {
        path: '/analyse',
        component: Layout,
        redirect: '/analyse/wechatAnalyse',
        name: 'analyse',
        meta: {
            title: '分析',
            icon: 'analyse'
        },
        children: [{
                path: 'wechatAnalyse',
                name: 'wechatAnalyse',
                component: resolve => (require(['@/views/analyse/wechat'], resolve)),
                meta: {
                    title: '微信分析',
                    icon: 'wechat'
                },
                redirect: '/analyse/wechatAnalyse/weChatSubscription',
                children: [{
                        path: 'weChatSubscription',
                        name: 'weChatSubscription',
                        component: () =>
                            import ('@/views/analyse/wechat/weChatSubscription'),
                        meta: {
                            title: '公众号',
                            icon: 'weChatSubscription'
                        }
                    },
                    {
                        path: 'applets',
                        name: 'applets',
                        component: () =>
                            import ('@/views/analyse/wechat/applets'),
                        meta: {
                            title: '小程序',
                            icon: 'applets'
                        }
                    }
                ]
            }, {
                path: 'tiktokAnalyse',
                name: 'tiktokAnalyse',
                component: resolve => (require(['@/views/analyse/tiktok/index'], resolve)),
                meta: {
                    title: '抖音分析',
                    icon: 'tiktok'
                }
            },

            {
                path: 'weiboAnalyse',
                name: 'weiboAnalyse',
                redirect: '/analyse/weiboAnalyse/dataMap',
                component: resolve => (require(['@/views/analyse/weibo/index'], resolve)),
                meta: {
                    title: '微博分析',
                    icon: 'weibo'
                },
                children: [

                    {
                        path: 'weiboAgeMap',
                        name: 'weiboAgeMap',
                        component: () =>
                            import ('@/views/analyse/weibo/dataMap/ageMap'),
                        meta: {
                            title: '年龄饼图',
                            icon: 'dataForm'
                        },
                        hidden: true
                    },
                    {
                        path: 'weiboAreaMap',
                        name: 'weiboAreaMap',
                        component: () =>
                            import ('@/views/analyse/weibo/dataMap/areaMap'),
                        meta: {
                            title: '地域分布图',
                            icon: 'dataForm'
                        },
                        hidden: true
                    },
                    {
                        path: 'dataMap',
                        name: 'dataMap',
                        component: () =>
                            import ('@/views/analyse/weibo/dataMap'),
                        meta: {
                            title: '微博数据图表',
                            icon: 'dataMap'
                        }
                    }
                ]

            },

            {
                path: 'onlineMallAnalyse',
                name: 'onlineMallAnalyse',
                redirect: '/analyse/onlineMallAnalyse/JD',
                component: resolve => (require(['@/views/analyse/onlineMall/index'], resolve)),
                meta: {
                    title: '线上商城',
                    icon: 'onlineMall'
                },
                children: [

                    {
                        path: 'JD',
                        name: 'JD',
                        component: () =>
                            import ('@/views/analyse/onlineMall/JD'),
                        meta: {
                            title: '京东数据图表',
                            icon: 'JD'
                        }
                    },
                    // {
                    //     path: 'JDForm',
                    //     name: 'JDForm',
                    //     component: () =>
                    //         import ('@/views/analyse/onlineMall/JDForm'),
                    //     meta: {
                    //         title: '京东数据表格',
                    //         icon: 'JD'
                    //     }
                    // },

                    // {
                    //     path: 'dataMap',
                    //     name: 'dataMap',
                    //     component: () =>
                    //         import ('@/views/analyse/onlineMall/TB'),
                    //     meta: {
                    //         title: '淘宝数据',
                    //         icon: 'TB'
                    //     }
                    // }
                ]

            }, {
                path: 'offlineMallAnalyse',
                name: 'offlineMallAnalyse',
                redirect: '/analyse/offlineMall/menu1',
                component: resolve => (require(['@/views/analyse/offlineMall/index'], resolve)),
                meta: {
                    title: '线下商城',
                    icon: 'offlineMall'
                },
                children: [{
                        path: 'menu1',
                        name: 'weiboData',
                        component: () =>
                            import ('@/views/analyse/offlineMall/menu1'),
                        meta: {
                            title: 'menu1',
                            icon: 'dataForm'
                        }
                    },
                    {
                        path: 'menu2',
                        name: 'dataMap',
                        component: () =>
                            import ('@/views/analyse/offlineMall/menu2'),
                        meta: {
                            title: 'menu2',
                            icon: 'dataMap'
                        }
                    }
                ]

            }
        ]
    },
    // -------------end------------------------------


    //--------------设置模块start---------------------
    {
        path: '/setting',
        component: Layout,
        redirect: '/setting/basicSettings',
        name: 'setting',
        meta: {
            title: '设置',
            icon: 'setting',
            roles: ['admin', 'editor']
        },
        children: [{
                path: 'basicSettings',
                name: 'basicSettings',
                component: resolve => (require(['@/views/setting/basicSettings'], resolve)),
                meta: {
                    title: '基础设置',
                    icon: 'basicSettings'
                },
                children: [{
                        path: 'enterpriseInfo',
                        name: 'enterpriseInfo',
                        component: () =>
                            import ('@/views/setting/basicSettings/enterpriseInfo'),
                        meta: {
                            title: '企业信息',
                            icon: 'enterpriseInfo'
                        }
                    },
                    {
                        path: 'userManage',
                        name: 'userManage',
                        component: () =>
                            import ('@/views/setting/basicSettings/userManage'),
                        meta: {
                            title: '用户管理',
                            icon: 'userManage'
                        }
                    },
                    {
                        path: 'authorityManage',
                        name: 'authorityManage',
                        component: () =>
                            import ('@/views/setting/basicSettings/authorityManage'),
                        meta: {
                            title: '权限管理',
                            icon: 'authorityManage'
                        }
                    }, {
                        path: 'channelManage',
                        name: 'channelManage',
                        component: () =>
                            import ('@/views/setting/basicSettings/channelManage'),
                        meta: {
                            title: '渠道管理',
                            icon: 'channelManage'
                        }
                    }, {
                        path: 'operationLog',
                        name: 'operationLog',
                        component: () =>
                            import ('@/views/setting/basicSettings/operationLog'),
                        meta: {
                            title: '操作日志',
                            icon: 'operationLog'
                        }
                    }
                ]


            }, {
                path: 'customers',
                name: 'customers',
                component: resolve => (require(['@/views/setting/customers'], resolve)),
                meta: {
                    title: '客户',
                    icon: 'customers'
                },
                children: [{
                        path: 'labelManage',
                        name: 'labelManage',
                        component: () =>
                            import ('@/views/setting/customers/labelManage'),
                        meta: {
                            title: '标签管理',
                            icon: 'labelManage'
                        }
                    },
                    {
                        path: 'menu2',
                        name: 'menu3',
                        component: () =>
                            import ('@/views/setting/customers/menu2'),
                        meta: {
                            title: 'menu2',
                            icon: 'applets'
                        }
                    }
                ]
            }, {
                path: 'setMarketing',
                name: 'setMarketing',
                component: resolve => (require(['@/views/setting/setMarketing'], resolve)),
                meta: {
                    title: '营销',
                    icon: 'marketing-channels'
                },
                children: [{
                        path: 'smsAccount',
                        name: 'smsAccount',
                        component: () =>
                            import ('@/views/setting/setMarketing/smsAccount'),
                        meta: {
                            title: '短信账户',
                            icon: 'sms'
                        }
                    },
                    {
                        path: 'mailAccount',
                        name: 'mailAccount',
                        component: () =>
                            import ('@/views/setting/setMarketing/mailAccount'),
                        meta: {
                            title: '邮件账户',
                            icon: 'mail'
                        }
                    },
                    {
                        path: 'officialAccount',
                        name: 'officialAccount',
                        component: () =>
                            import ('@/views/setting/setMarketing/officialAccount'),
                        meta: {
                            title: '公众号菜单',
                            icon: 'weChatSubscription '
                        }
                    }, {
                        path: 'calendarManage',
                        name: 'calendarManage',
                        component: () =>
                            import ('@/views/setting/setMarketing/calendarManage'),
                        meta: {
                            title: '日历管理',
                            icon: 'calendarManage'
                        }
                    }
                ]
            },

            {
                path: 'settingAnalyse',
                name: 'settingAnalyse',
                component: resolve => (require(['@/views/setting/settingAnalyse'], resolve)),
                meta: {
                    title: '分析',
                    icon: 'analyse'
                },
                children: [{
                        path: 'advertising',
                        name: 'advertising',
                        component: () =>
                            import ('@/views/setting/settingAnalyse/advertising'),
                        meta: {
                            title: '广告投放',
                            icon: 'advertise'
                        }
                    },
                    {
                        path: 'menu2',
                        name: 'menu4',
                        component: () =>
                            import ('@/views/setting/settingAnalyse/menu2'),
                        meta: {
                            title: 'menu2',
                            icon: 'dataMap'
                        }
                    }
                ]

            }, {
                path: 'smartShoppingGuide',
                name: 'smartShoppingGuide',
                component: resolve => (require(['@/views/setting/smartShoppingGuide'], resolve)),
                meta: {
                    title: '智慧导购',
                    icon: 'smartShoppingGuide'
                },
                children: [{
                        path: 'contentManage',
                        name: 'contentManage',
                        component: () =>
                            import ('@/views/setting/smartShoppingGuide/contentManage'),
                        meta: {
                            title: '内容管理',
                            icon: 'contentManage'
                        }
                    },
                    {
                        path: 'menu2',
                        name: 'menu77',
                        component: () =>
                            import ('@/views/setting/smartShoppingGuide/menu2'),
                        meta: {

                            title: 'menu2',
                            icon: 'dataMap'
                        }
                    }
                ]

            }, {
                path: 'personalCenter',
                name: 'personalCenter',
                component: resolve => (require(['@/views/setting/personalCenter'], resolve)),
                meta: {
                    title: '个人中心',
                    icon: 'personalSetting'
                }
            }
        ]
    },
    // -------------end------------------------------

    //------------help模块start--------------------------------
    {
        path: '/help',
        component: Layout,
        redirect: '/help/guide',
        name: 'help',
        meta: {
            title: '帮助',
            icon: 'help'
        },
        children: [{
            path: 'guide',
            name: 'Table2',
            component: resolve => (require(['@/views/help/guide'], resolve)),
            meta: {
                title: '引导页',
                icon: 'guide'
            }
        }, {
            path: 'manual',
            name: 'manual',
            component: resolve => (require(['@/views/help/manual'], resolve)),
            meta: {
                title: 'menu2',
                icon: 'manual'
            }
        }]
    },
    //------------end--------------------------------


    // 404 page must be placed at the end !!!
    // 在任何路由都不匹配的情况下就匹配404表示资源未找到
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }

]
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router