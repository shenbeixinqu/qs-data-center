import request from '@/utils/request'

export function fetchList(params) {
    return request({
        url: '/weibo/getList',
        method: 'post',
        params
    })
}


export function deleteData(id) {
    return request({
        url: '/weibo/deleteRecordByID',
        method: 'get',
        params: { id }
    })
}



export function getWeiboAge(params) {
    return request({
        url: '/weibo/getCountByAge',
        method: 'get',
        params
    })
}

export function getWeiboArea(params) {
    return request({
        url: '/weibo/getCountByArea',
        method: 'get',
        params
    })
}


export function weiboDataUpload(params) {
    return request({
        url: '/weibo/upload',
        method: 'post',
        params
    })
}