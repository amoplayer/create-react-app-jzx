import React from 'react';
import { List, Skeleton, Tag, Space} from 'antd'
import { dictionary }  from '../../../../utils/dictionary'
import { isJSON } from '../../../../utils'
import {
    CodeToText,
} from 'element-china-area-data'

class RecruitList extends React.Component {
    linkToDetails = (event) => {
        this.props.history.push({pathname:"/recruitMsgDetails", search: '?id=' + event.id });
    }
    render() {
        const { dataSource } = this.props
        const { initLoading, list, loadMore } = dataSource;
        list.forEach(item => {
            dictionary.objectTypeThree.forEach(val => {
                if (item.objectTypeThree === val.value) {
                    item.objectTypeThree = val.label
                }
            })
            let workAddr = ''
            if (isJSON(item.workAddr)) {
                const map = JSON.parse(item.workAddr)
                workAddr = CodeToText[map[0]] + CodeToText[map[1]] + CodeToText[map[2]]
                item.workAddr = workAddr
            }
        })
        return (
            <List
                className="recruit-list-RecruitList"
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
                        extra={
                            <Space direction="vertical" size="large" style={{ width: 280 }}>
                                <h3 key="extra1">{item.objectOwner}</h3>
                                <div key="extra2">联系邮箱: {item.email}</div>
                                <div key="extra3">手机号: {item.mobile}</div>
                            </Space>
                        }
                    >
                        <Skeleton avatar title={ false } loading={ item.loading } active>
                            <List.Item.Meta
                                title={ <a href="javascript:void(0)" onClick={() => this.linkToDetails(item)}>{item.objectName} [ {item.workAddr} ]</a> }
                            />
                            <Space size="large">
                                <span>
                                    { item.budgetAmount }
                                </span>
                                <span>
                                    { item.objectTypeThree }
                                </span>
                            </Space>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}
export default RecruitList;
