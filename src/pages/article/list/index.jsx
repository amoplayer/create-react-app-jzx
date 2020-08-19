import {Avatar, Button, List, Skeleton} from 'antd';
import './style.less'
import React from 'react';
import {Link} from "react-router-dom"
import * as api from '../../../utils/request'
import Banner from '../../../components/Banner';
import {BannerDataSource} from './data';
import {parseTime, textReplace} from '../../../utils'

const fakeDataUrl = 'http://47.97.191.34:4088/manage/manpower/index/getIndex';

export default class articleList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
        params: {
            page: 1,
            limit: 5
        }
    };

    componentDidMount() {
        this.initData(this.state.params)
    }

    initData(data) {
        api.get(fakeDataUrl, data).then((res) => {
            this.setState(
                {
                    loading: false,
                    initLoading: false,
                    data: res.data,
                    list: res.data
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        })
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(this.state.params.limit)].map(() => ({ loading: true, name: {} }))),
        });
        this.initData(this.state.params)
    };

    render() {
        const { initLoading, loading, list } = this.state;
        // 更多按钮
        const loadMore =
            !initLoading && !loading ? (
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
                    <List.Item>
                        <Skeleton avatar title={ false } loading={ item.loading } active>
                            <List.Item.Meta
                                avatar={
                                    <Link to="/articleDetails">
                                        <Avatar shape="square" size={window.screen.width <= 767 ? 30 : 150} src={ item.imgUrl } />
                                    </Link>
                                }
                                title={ <Link to="/articleDetails">{item.name}</Link> }
                                description={
                                    item.info ? textReplace(item.info, 150, 100) : ''
                                }
                            />
                            <div className="article-list-time">{ parseTime(item.createTime) }</div>
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
