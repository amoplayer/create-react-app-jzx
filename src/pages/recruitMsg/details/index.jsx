import { Row, Col, Button } from 'antd';
import './style.less'
import React from 'react';
import * as api from '../../../utils/request'
import { getSearch, isJSON } from '../../../utils'
import { dictionary }  from '../../../utils/dictionary'
import {
    CodeToText,
} from 'element-china-area-data'

const fakeDataUrl = 'http://47.97.191.34:3088/mobile/object/info';

export default class RecruitMsgDetails extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: {},
        params: {}
    };
    componentDidMount() {
        let params = {
            objectId: getSearch(this.props.location.search).id || ''
        }
        this.initData(params)
    }

    initData(event) {
        api.post(fakeDataUrl, event).then((res) => {
            dictionary.payCycle.forEach(item => {
                if (item.value === res.data.payCycle) {
                    res.data.payCycle = item.label
                }}
            )
            let workAddr = ''
            if (isJSON(res.data.workAddr)) {
                const map = JSON.parse(res.data.workAddr)
                workAddr = CodeToText[map[0]] + CodeToText[map[1]] + CodeToText[map[2]]
                res.data.workAddr = workAddr
            }
            this.setState(
                {
                    loading: false,
                    initLoading: false,
                    data: res.data,
                }
            );
        })
    };

    render() {
        const { data } = this.state;
        return (
            <div className="recruit-msg-details-wrapper">
               <div className="recruit-msg-details-content">
                   <div className="recruit-msg-details-msg" >
                       <Row gutter={[32, 48]}>
                           <Col span={12}>岗位: {data.objectName}</Col>
                           <Col span={12}>薪资: {data.budgetAmount}</Col>
                       </Row>
                       <Row gutter={[32, 48]}>
                           <Col span={12}>行业: {data.industry}</Col>
                           <Col span={12}>标签: {data.objectTag}</Col>
                       </Row>
                       <Row gutter={[32, 48]}>
                           <Col span={12}>标签: {data.objectName}</Col>
                           <Col span={12}>公司名称: {data.objectOwner}</Col>
                       </Row>
                       <Row gutter={[32, 48]}>
                           <Col span={12}>工作地点: {data.workAddr}</Col>
                           <Col span={12}>结算方式: {data.payCycle}</Col>
                       </Row>
                       <Row gutter={[32, 48]}>
                           <Col span={12}>工作时间: {data.objectDays}</Col>
                           <Col span={12}>工作内容: {data.objectInfo}</Col>
                       </Row>
                   </div>
                   <div className="recruit-msg-details-sidebar">
                       <div className="recruit-msg-details-sidebar-title">
                           <Button block size="large" onClick={() => {window.open('http://api.zjyboss.com/#/login')}}>岗位发布</Button>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}
