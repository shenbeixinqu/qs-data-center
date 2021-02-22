// 权限管理
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // nprogress 进度条
import 'nprogress/nprogress.css' // 进度条风格
import { getToken } from '@/utils/auth' // 从cookie中取出 token
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 白名单, 不需要登录就可以访问
const whiteList = ['/login', '/register', '/reset_pwd', '/reset_pwd/step2', '/reset_pwd/step3', '/reset_pwd/step4'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
    // start progress bar
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            const hasGetUserInfo = store.getters.name
            if (hasGetUserInfo) {
                next()
            } else {
                try {
                    // get user info
                    await store.dispatch('user/getInfo')
                    next()
                } catch (error) {
                    // remove token and go to login page to re-login
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            //在免费登录白名单中，直接进入
            next()
        } else {
            // 其他没有访问权限的页面将被重定向到登录页面。
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})