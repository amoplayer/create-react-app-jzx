import { List, Skeleton } from 'antd';
import './style.less'
import React from 'react';
import {getSearch, parseTime} from '../../../utils'
import { getIndex, getIndexInfo } from '../../../api'


export default class articleList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
        params: {},
        details: {}
    };

    componentDidMount() {
        let params = {
            id: getSearch(this.props.location.search).id || ''
        }
        this.initData()
        this.initIfo(params)
    }
    initIfo() {
        getIndexInfo({
            id: getSearch(this.props.location.search).id
        }).then(res => {
            this.setState(
                {
                    loading: false,
                    initLoading: false,
                    details: res.data
                }
            );
        })
    }
    initData(data) {
        getIndex({
            page: 1,
            limit: 5
        }).then((res) => {
            this.setState(
                {
                    loading: false,
                    initLoading: false,
                    data: res.data.items,
                    list: res.data.items
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        })
    };
    initSearch(event) {
        this.props.history.push({pathname:"/articleDetails", search: '?id=' + event.id });
        let  params = {
            id: event.id || ''
        }
        this.initIfo(params)
    }
    render() {
        const { initLoading, list, details } = this.state;
        const msg = { __html: details ? details.info: '' }
        return (
            <div className="article-details-wrapper">
               <div className="article-details-content">

                   <div className="article-details-msg" >
                       <h1>{details ? details.name : ''}</h1>
                       <div dangerouslySetInnerHTML={msg}/>
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
                                               <a href="javascript:void(0)" onClick={() => this.initSearch(item)}>{item.name}</a>
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
