import request from '../utils/request'


// 获取新闻资讯
export function getIndex(params) {
    return request({
        //http://111.0.124.24:9000
        method: 'POST',
        data: params
    })
}
