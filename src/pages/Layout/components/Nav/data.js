import React from 'react';

export const NavDataSource = {
    wrapper: { className: 'header home-page-wrapper kdfllcy10k-editor_css' },
    page: { className: 'home-page' },
    logo: {
        className: 'header-logo',
        children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    },
    Menu: {
        className: 'header-menu',
        children: [
            {
                name: 'item0',
                className: 'header-item',
                children: {
                    to: '/',
                    children: [
                        {
                            children: (
                                <span>
                  <span>
                    <p>首页</p>
                  </span>
                </span>
                            ),
                            name: 'text',
                        },
                    ],
                }
            },
            {
                name: 'item1',
                className: 'header-item',
                children: {
                    to: 'product',
                    children: [
                        {
                            children: (
                                <span>
                  <p>产品与解决方案</p>
                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
                subItem: [
                    {
                        name: 'sub0',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: '专家云',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '您身边随时随地的专家',
                                },
                            ],
                        },
                    },
                    {
                        name: 'sub1',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: '人事外包产品库',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '"劳务外包"一种可跨地区、跨行业新型的用工方式',
                                },
                            ],
                        },
                    },
                    {
                        name: 'sub2',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: '税收筹划产品库',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '您是否也经常遇到这些财税问题呢？',
                                },
                            ],
                        },
                    },
                    {
                        name: 'sub3',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: '增值服务产品库',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '一次配置全年福利计划 + 商业保险',
                                },
                            ],
                        },
                    }
                ],
            },
            {
                name: 'item2',
                className: 'header-item',
                children: {
                    to: '',
                    children: [
                        {
                            children: (
                                <span>
                  <p>职位</p>
                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
            },
            {
                name: 'item3',
                className: 'header-item',
                children: {
                    to: '',
                    children: [
                        {
                            children: (
                                <span>
                  <p>新闻资讯</p>
                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
            },
            {
                name: 'item4',
                className: 'header-item',
                children: {
                    to: '/about',
                    children: [
                        {
                            children: (
                                <span>
                  <p>关于益兴</p>
                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
            },
        ],
    },
    mobileMenu: { className: 'header-mobile-menu' },
};
