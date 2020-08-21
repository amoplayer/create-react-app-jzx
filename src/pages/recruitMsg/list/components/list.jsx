import React from 'react';
import { List, Skeleton, Tag, Space} from 'antd'
import {Link} from "react-router-dom";

class RecruitList extends React.PureComponent {
    render() {
        const { dataSource } = this.props
        const { initLoading, list, loadMore } = dataSource;
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
                            <Space direction="vertical" size="large">
                                <h3 key="extra1">{item.objectOwner}</h3>
                                <div key="extra2">联系人: 张三</div>
                                <div key="extra3">联系人手机号: 18288888888</div>
                            </Space>
                        }
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
        );
    }
}
export default RecruitList;
