import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../../utils';
import './style.less'

class Content extends React.PureComponent {
    getChildrenToRender = (data) =>
        data.map((item) => {
            return (
                <Col key={item.name} {...item}>
                    <div {...item.children.wrapper}>
                        <span {...item.children.img}>
                          <img src={item.children.img.children} height="100%" alt="img" />
                        </span>
                        <div {...item.children.content}>{item.children.content.children}</div>
                    </div>
                </Col>
            );
        });

    render() {
        const { ...props } = this.props;
        const { dataSource } = props;
        delete props.dataSource;
        const childrenToRender = this.getChildrenToRender(
            dataSource.block.children
        );
        return (
            <div {...props} {...dataSource.wrapper}>
                <div {...dataSource.page}>
                    <div key="title" {...dataSource.titleWrapper}>
                        {dataSource.titleWrapper.children.map(getChildrenToRender)}
                    </div>
                    <OverPack
                        className={`content-template ${props.className}`}
                        {...dataSource.OverPack}
                    >
                        <TweenOneGroup
                            component={Row}
                            key="ul"
                            enter={{
                                y: '+=30',
                                opacity: 0,
                                type: 'from',
                                ease: 'easeInOutQuad',
                            }}
                            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
                            {...dataSource.block}
                        >
                            {childrenToRender}
                        </TweenOneGroup>
                    </OverPack>
                </div>
            </div>
        );
    }
}

export default Content;
