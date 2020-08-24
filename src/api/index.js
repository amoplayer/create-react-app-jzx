import request from '../utils/request'


// 获取新闻资讯
export function getIndex(params) {
    return request({
        //http://111.0.124.24:9000
        // url: 'http://111.0.124.24:9000/manage/manpower/index/getIndex',

        url: 'http://47.97.191.34:4088/manage/manpower/index/getIndex',
        method: 'POST',
        data: params
    })
}

// 获取新闻资讯详情
export function getIndexInfo(params) {
    return request({
        // url: 'http://111.0.124.24:9000/manage/manpower/index/getIndexInfo',

        url: 'http://47.97.191.34:4088/manage/manpower/index/getIndexInfo',
        method: 'POST',
        data: params
    })
}

// 获取岗位招聘
export function objectList(params) {
    return request({
        url: 'http://47.97.191.34:3088/mobile/object/list',
        method: 'POST',
        data: params
    })
}

// 获取岗位招聘详情
export function objectInfo(params) {
    return request({
        url: 'http://47.97.191.34:3088/mobile/object/info',
        method: 'POST',
        data: params
    })
}
