import { Avatar, Button, List, Skeleton } from 'antd';
import './style.less'
import React from 'react';
import { Link } from "react-router-dom"
import { getIndex } from '../../../api'
import Banner from '../../../components/Banner';
import { BannerDataSource } from './data';
import { parseTime, textReplace } from '../../../utils'

export default class articleList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        tempData: [],
        list: [],
        params: {
            page: 1,
            limit: 5
        },
        total: 0
    };

    componentDidMount() {
        this.initData(this.state.params)
    }

    initData(data, type) {

        getIndex(data).then((res) => {
            let list = type === 'Refresh' ? res.data.items : [...this.state.tempData, ...res.data.items]
            let tempData = type === 'Refresh' ? res.data.items : [...this.state.tempData, ...res.data.items]
            this.setState(
                {
                    loading: false,
                    initLoading: false,
                    tempData: tempData,
                    list: list,
                    total: res.data.total
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        })
    };

    onLoadMore = () => {
        let params = this.state.params
        params.page ++
        this.setState({
            params,
            loading: true,
            list: this.state.tempData.concat([...new Array(this.state.params.limit)].map(() => ({ loading: true, name: {} }))),
        });
        this.initData(this.state.params)
    };

    render() {
        const { initLoading, loading, list, total, params  } = this.state;
        let ifMore = params.page < Math.ceil(total / params.limit) // 计算最后一夜
        // 更多按钮
        const loadMore =
            !initLoading && !loading && ifMore? (
                <div className="article-list-more">
                    <Button size="large" onClick={ this.onLoadMore }>浏览更多</Button>
                </div>
            ) : null;
        // 列表
        const articleList = <List
                className="article-list-content"
                loading={ initLoading }
                itemLayout="horizontal"
                loadMore={ loadMore }
                dataSource={ list }
                renderItem={ item => (
                    <List.Item
                        actions={[
                            parseTime(item.createTime),
                        ]}
                    >
                        <Skeleton avatar title={ false } loading={ item.loading } active>
                            <List.Item.Meta
                                avatar={
                                    <Link to={'/articleDetails?id=' + item.id}>
                                        <Avatar shape="square" size={window.screen.width <= 767 ? 30 : 150} src={ item.imgUrl } />
                                    </Link>
                                }
                                title={ <Link to={'/articleDetails?id=' + item.id}>{item.name}</Link> }
                                description={
                                    item.info ? textReplace(item.info, 150, 100) : ''
                                }
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />

        const children = [
            <Banner
                id="Banner"
                key="Banner"
                dataSource={BannerDataSource}
            />,
            <div className="article-list-wrapper" key="articleList">
                {articleList}
            </div>
        ]

        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d;
                }}
            >
                { children }
            </div>
        )
    }
}
