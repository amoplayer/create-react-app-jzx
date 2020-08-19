import { List, Skeleton } from 'antd';
import './style.less'
import React from 'react';
import { Link } from "react-router-dom"
import * as api from '../../../utils/request'
import { parseTime } from '../../../utils'
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

    render() {
        const { initLoading, list } = this.state;
        const msg = { __html: list[1] ? list[1].info: '' }
        return (
            <div className="article-details-wrapper">
               <div className="article-details-content">

                   <div className="article-details-msg" >
                       <h1>{list[1] ? list[1].name : ''}</h1>
                       <div dangerouslySetInnerHTML={ msg }></div>
                   </div>
                   <div className="article-details-sidebar">
                       <div className="article-details-sidebar-title">
                           <h2>热门新闻</h2>
                       </div>
                       <List
                           className="article-details-sidebar-list"
                           loading={ initLoading }
                           itemLayout="horizontal"
                           dataSource={ list }
                           renderItem={ item => (
                               <List.Item>
                                   <Skeleton avatar title={ false } loading={ item.loading } active>
                                       <List.Item.Meta
                                           title={
                                               <Link to="/articleDetails">{item.name}</Link>
                                           }
                                           description={
                                               parseTime(item.createTime)
                                           }
                                       />
                                       <div className="article-details-time"></div>
                                   </Skeleton>
                               </List.Item>
                           )}
                       />
                   </div>
               </div>
            </div>
        );
    }
}
