import { message } from 'antd';

const request = (url, config) => {
    return fetch(url, config).then((res) => {
        if (!res.ok) {
            // 服务器异常返回
            throw Error('');
        }
        return res.json();
    }).then((res) => {
        if (res.code !== 1000 && res.code !== 2000) {
            // 项目内部认为的错误
            throw Error('');
        } else {
            return res;
        }
    }).catch((error) => {
        // 公共错误处理
        message.error('内部错误');
        return Promise.reject('error')
    });
};

function format_data (data) {
    var params = new URLSearchParams()
    for (var key in data) {
        var value = data[key]
        if (value !== null && value !== undefined) {
            if (value instanceof Object || value instanceof Array) {
                value = JSON.stringify(value)
            }
            params.append(key, value)
        }
    }
    return params
}

export default (event) => {
    const { url, data, method } = event
    return request(url, {
        body: format_data(data),
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: method || 'POST'
    });
};
