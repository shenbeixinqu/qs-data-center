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

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(VCharts)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})