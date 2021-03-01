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

// 品牌销量数
export function getAnnualsales(params) {
    return request({
        url: '/jingdong/getAnnualsales',
        method: 'get',
        params
    })
}

// 各品牌销量详情
export function getAnnualsalesDetails(params) {
    return request({
        url: '/jingdong/getAnnualsalesDetails',
        method: 'get',
        params
    })
}