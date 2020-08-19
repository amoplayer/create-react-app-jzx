import {Button, List, Skeleton, Tag, Space} from 'antd'

import './style.less'
import React from 'react'
import {Link} from "react-router-dom"
import * as api from '../../../utils/request'
import {parseTime, textReplace} from '../../../utils'

const fakeDataUrl = 'http://47.97.191.34:3088/mobile/object/list'

export default class recruitList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        tempData: [],
        list: [],
        total: 0,
        params: {
            page: 1,
            limit: 5
        }
    }

    componentDidMount() {
        this.initData(this.state.params)
    }

    initData(data) {
        api.post(fakeDataUrl, data).then((res) => {
            this.setState(
                {
                    loading: false,
                    initLoading: false,
                    tempData: [...this.state.tempData, ...res.data.items],
                    list: [...this.state.tempData, ...res.data.items],
                    total: res.data.total
                },
                () => {
                    window.dispatchEvent(new Event('resize'))
                },
            )
        })
    }

    onLoadMore = () => {
        let params = this.state.params
        params.page ++
        this.setState({
            loading: true,
            list: this.state.tempData.concat([...new Array(this.state.params.limit)].map(() => ({ loading: true, name: {} }))),
            params
        })
        this.initData(this.state.params)
    }

    render() {
        const { initLoading, loading, list, total, params } = this.state
        let ifMore = params.page < Math.ceil(total / params.limit) // 计算最后一夜
        // 更多按钮
        const loadMore =
            !initLoading && !loading && ifMore ? (
                <div className="recruit-list-more">
                    <Button size="large" onClick={ this.onLoadMore }>浏览更多</Button>
                </div>
            ) : null
        // 列表
        const recruitList = <List
                className="recruit-list-content"
                size="large"
                loading={ initLoading }
                itemLayout="vertical"
                loadMore={ loadMore }
                dataSource={ list }
                renderItem={ item => (
                    <List.Item
                        actions={
                            item.objectTag && item.objectTag.split(',').map(val => {
                                return <Tag>{val}</Tag>
                            })
                        }
                        extra={[
                            <h3 key="extra1">公司名称: {item.objectOwner}</h3>,
                            <div key="extra2">联系人: 张三</div>,
                            <div key="extra3">联系人手机号: 18288888888</div>,
                        ]}
                    >
                        <Skeleton avatar title={ false } loading={ item.loading } active>
                            <List.Item.Meta
                                title={ <Link to="/recruitDetails">{item.objectName} [ {item.workAddr} ]</Link> }
                            />
                            <Space size="large">
                                <span>
                                    { item.budgetAmount }
                                </span>
                                <span>
                                    全职 兼职：线上
                                </span>
                            </Space>
                        </Skeleton>
                    </List.Item>
                )}
            />
        const sidebar = <div>
        </div>
        const children = [
            <div className="recruit-list-wrapper" key="recruitList">
                {recruitList}
                {sidebar}
            </div>
        ]
        return (
            children
        )
    }
}
