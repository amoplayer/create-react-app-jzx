import  { Button, Input, Tabs } from 'antd'
// import { DownOutlined } from '@ant-design/icons';
import './style.less'
import React from 'react'
import * as api from '../../../utils/request'
import RecruitList from './components/list'
const fakeDataUrl = 'http://47.97.191.34:3088/mobile/object/list'
const { Search } = Input;
const { TabPane } = Tabs;
export default class Recruit extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        tempData: [],
        list: [],
        total: 0,
        params: {
            page: 1,
            limit: 5,
            searchParams: {
                objectTypeThree: ''
            }
        }
    }

    componentDidMount() {
        this.initData(this.state.params)
    }

    initData(data, type) {
        api.post(fakeDataUrl, data).then((res) => {
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
    onSearch (event) {
        let params = this.state.params
        params.searchParams.keyWord = event
        this.setState({
            params
        })
        this.initData(this.state.params, 'Refresh')
    }
    callback(event) {
        let params = this.state.params
        params.searchParams.objectTypeThree = event
        this.setState({
            params: params
        })
        this.initData(this.state.params, 'Refresh')
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
        let dataSource = {
            loadMore,
            initLoading,
            list
        }
        const searchTabs =  <Tabs defaultActiveKey="" onChange={value => this.callback(value)}>、
            <TabPane tab="热招兼职" key="">
            </TabPane>
            <TabPane tab="线上兼职" key="1">
            </TabPane>
            <TabPane tab="短期兼职" key="2">
            </TabPane>
            <TabPane tab="周末兼职" key="3">
            </TabPane>
            <TabPane tab="长期兼职" key="4">
            </TabPane>
        </Tabs>
        // const searchMenu = (
        //     <Dropdown overlay={
        //         <Menu>
        //             <Menu.Item>上午</Menu.Item>
        //             <Menu.Item>下午</Menu.Item>
        //             <Menu.Item>晚上</Menu.Item>
        //             <Menu.Item>周末</Menu.Item>
        //             <Menu.Item>工作日</Menu.Item>
        //         </Menu>
        //     }>
        //         <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        //             工作时间段<DownOutlined />
        //         </div>
        //     </Dropdown>
        // )
        return (
            <div className="recruit-list-wrapper">
                <div className="recruit-list-search">
                    <div className="recruit-list-search-item">
                        {searchTabs}
                        <Search
                            placeholder="请输入搜索关键字"
                            onSearch={value => this.onSearch(value)}
                            size="large"
                            className="recruit-list-search-input"
                        />
                    </div>
                </div>
                <div className="recruit-list-content">
                    <RecruitList dataSource={dataSource}/>
                    {/*<div className="recruit-list-sidebar">*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

