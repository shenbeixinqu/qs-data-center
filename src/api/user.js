import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
export function touristLogin() {
    return request({
        url: '/user/touristLogin',
        method: 'post'
    })
}
export function getInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}



export function register(data) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}


export function resiveVcode() {
    return request({
        url: '/user/createvCode',
        method: 'post'
    })
}


export function isNameExist(username) {
    return request({
        url: '/user/isNameExist',
        method: 'get',
        params: { username }
    })
}

export function isExistMobile(mobile) {
    return request({
        url: '/user/isExistMobile',
        method: 'get',
        params: { mobile }
    })
}

export function resetPwd_mobile(mobile) {
    return request({
        url: '/user/equalNameAndMobile',
        method: 'get',
        params: { mobile }
    })
}

export function isNameExist1(username) {
    return request({
        url: '/user/isNameExist1',
        method: 'get',
        params: { username }
    })
}


export function resetPwd(password) {
    return request({
        url: '/user/verificateVcode',
        method: 'get',
        params: { password }
    })
}