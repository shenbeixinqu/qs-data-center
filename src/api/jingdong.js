import request from '@/utils/request'

// 获取数据
export function fetchList(params) {
    return request({
        url: '/jingdong/getAll',
        method: 'get',
        params
    })
}

// 根据id删除数据
export function deleteData(id) {
    return request({
        url: '/jingdong/deleteRecordByID',
        method: 'get',
        params: { id }
    })
}

// 品牌销量数
export function getAnnualsales(creationTime) {
    return request({
        url: '/jingdong/getSaleDetails',
        method: 'get',
        params: { creationTime }
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