import { List, Avatar, Button, Skeleton } from 'antd';
import './style.less'
import React from 'react';
import { Link } from "react-router-dom"
import * as api from '../../../utils/request'
const count = 5;
const fakeDataUrl = `http://47.97.191.34:4088/manage/manpower/index/getIndex`;

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
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.initData(this.state.params)
    };

    textFun (str) {
        const temp = str
            .replace(/\s*/g, "")
            .replace(/<[^>]+>/g, '')
            .replace(/↵/g, '')
            .replace(/[\r\n]/g, '')
            .replace(/&nbsp;/ig,'')
            .replace(/&rdquo;/ig,'')
            .replace(/&middot;/ig,'')
            .replace(/&middot;/ig,'')
            .replace(/&ldquo;/ig,'')
        let i = Math.floor(Math.random() * (200 - 150)) + 150;
        return temp.slice(0, i)
    }

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div className="article-list-more">
                    <Button onClick={this.onLoadMore}>浏览更多</Button>
                </div>
            ) : null;

        return (
            <div className="article-list-wrapper">
                <List
                    className="article-list-content"
                    loading={initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={item => (
                        <List.Item>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={
                                        <Link to="/about">
                                            <Avatar src={item.imgUrl} />
                                        </Link>
                                    }
                                    title={ <Link to="/about">{item.name}</Link> }
                                    description={
                                        item.info ? this.textFun(item.info) : ''
                                    }
                                />
                                <div>{item.createTime}</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
