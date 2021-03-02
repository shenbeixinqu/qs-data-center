import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'



import '@/icons' // icon

import '@/permission' // permission control

import VCharts from 'v-charts'

import '@/assets/iconfonts/iconfont.css'

import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * mockjs  mock数据
 * 上线前请注释掉下面的模块
 */
// if (process.env.NODE_ENV === 'production') {
//     const { mockXHR } = require('../mock')
//     mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(VCharts)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})