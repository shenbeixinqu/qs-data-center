import request from '@/utils/request'

export function fetchList(params) {
    return request({
        url: '/jingdong/getAll',
        method: 'get',
        params
    })
}


export function deleteData(id) {
    return request({
        url: '/jingdong/deleteRecordByID',
        method: 'get',
        params: { id }
    })
}