import React from 'react';
import index1 from '../../assets/img/taxProduct/01.png'
import index2 from '../../assets/img/taxProduct/02.jpeg'
import index3 from '../../assets/img/taxProduct/03.png'
import index4 from '../../assets/img/taxProduct/04.png'
import Book from "../../assets/img/taxProduct/Book.png";
import Chat from "../../assets/img/taxProduct/Chat.png";
import Partnership from "../../assets/img/taxProduct/Partnership.png";
import Receiving_money_2 from "../../assets/img/taxProduct/Receiving_money_2.png";



export const BannerDataSource = {
    wrapper: { className: 'banner kdflaz06unm-editor_css' },
    textWrapper: { className: 'banner-text-wrapper' },
    title: {
        className: 'banner-title kdflatelklc-editor_css',
        children: (
            <p>税收筹划产品库</p>
        ),
    },
    content: {
        className: 'banner-content kdfle0wr33p-editor_css',
        children: (
            <p>Tax To Plan</p>
        ),
    },
    button: {
        className: 'banner-button kdfle4njens-editor_css'
    },
};


export const ContentDataSource = {
    wrapper: { className: 'home-page-wrapper content-components-wrapper' },
    page: { className: 'home-page content-components' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <p>您是否也经常遇到这些财税问题呢？</p>
                ),
                className: 'title-h1',
            }
        ],
    },
    block: {
        className: 'content-components-img-wrapper',
        gutter: 16,
        children: [
            {
                name: 'block0',
                className: 'block',
                md: 6,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index1,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>无进项，利润虚高</h3>
                                <p>全额缴纳增值税？</p>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block~kdnxr8h1v9',
                className: 'block',
                md: 6,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index2,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>股东分红25%企业所得税</h3>
                                <p>还有20%个人所得税？</p>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block~kdnxr9cqk9n',
                className: 'block',
                md: 6,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index3,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>金税三期票据取得不规范</h3>
                                <p>涉及风险难避免？</p>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block~kdnxr9cqksnX',
                className: 'block',
                md: 6,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index4,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>政策门槛太高</h3>
                                <p>享受税收优惠无门？</p>
                            </span>
                        ),
                    },
                },
            },
        ],
    },
};

export const FeatureDataSource = {
    wrapper: { className: 'home-page-wrapper content-wrapper' },
    page: { className: 'home-page content' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [{ name: 'title', children: '税务筹划业务逻辑'}],
    },
    childWrapper: {
        className: 'content-block-wrapper',
        children: [
            {
                name: 'block0',
                className: 'content-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content-block-icon',
                            children: 'https://gw.alipayobjects.com/zos/rmsportal/MmROsqZndrFBrIspzLlL.png',
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '业务逻辑合理性和业务量匹配的人员',
                        },
                    ],
                },
            },
            {
                name: 'block1',
                className: 'content-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content-block-icon',
                            children: 'https://gw.alipayobjects.com/zos/rmsportal/ONvKhpRAmkCfdEhkUZkJ.png',
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '合同、资金流、发票、业务确认一致',
                        },
                    ],
                },
            },
            {
                name: 'block2',
                className: 'content-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content-block-icon',
                            children: 'https://gw.alipayobjects.com/zos/rmsportal/oxmXLgGjCeXfYPcVSbKg.png',
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '合理的利润率',
                        },
                    ],
                },
            }
        ],
    },
};

export const StepDataSource = {
    wrapper: { className: 'home-page-wrapper step-wrapper' },
    page: { className: 'home-page step' },
    OverPack: { playScale: 0.3 },
    titleWrapper: {
        className: 'step-title-wrapper',
        children: [
            {
                name: 'title',
                className: 'step-title-h1',
                children: (
                    <span>
                        <p>合作流程</p>
                    </span>
                ),
            },
            {
                name: 'content',
                className: 'step-title-content',
                children: (
                    <span>
                        <p>四步 轻松节税，免去繁琐对接流程</p>
                     </span>
                ),
            },
        ],
    },
    childWrapper: {
        className: 'step-button-wrapper',
        children: [
        ],
    },
    Carousel: {
        dots: false,
        className: 'step-carousel',
        wrapper: { className: 'step-block-wrapper' },
        children: {
            className: 'step-block',
            titleWrapper: {
                className: 'step-carousel-title-wrapper',
                title: { className: 'step-carousel-title' },
            },
            children: [
                {
                    name: 'block0',
                    className: 'step-block-row',
                    gutter: 120,
                    title: {
                        className: 'step-carousel-title-block',
                        children: '平台自主训练流程',
                    },
                    children: [
                        {
                            className: 'step-block-col',
                            md: 6,
                            xs: 24,
                            name: 'child0',
                            arrow: {
                                className: 'step-block-arrow',
                                children:
                                    'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
                            },
                            children: {
                                className: 'step-block-child',
                                children: [
                                    {
                                        name: 'image',
                                        className: 'step-block-image',
                                        children:
                                        Chat,
                                    },
                                    {
                                        name: 'title',
                                        className: 'step-block-title',
                                        children: (
                                            <span>
                                                <p>平台在线咨询</p>
                                            </span>
                                        ),
                                    }
                                ],
                            },
                        },
                        {
                            className: 'step-block-col',
                            md: 6,
                            xs: 24,
                            name: 'child1',
                            arrow: {
                                className: 'step-block-arrow',
                                children:
                                    'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
                            },
                            children: {
                                className: 'step-block-child',
                                children: [
                                    {
                                        name: 'image',
                                        className: 'step-block-image',
                                        children:
                                            Book,
                                    },
                                    {
                                        name: 'title',
                                        className: 'step-block-title',
                                        children: (
                                            <span>
                                                <p>定制税筹方案</p>
                                            </span>
                                        ),
                                    },
                                ],
                            },
                        },
                        {
                            className: 'step-block-col',
                            md: 6,
                            xs: 24,
                            name: 'child2',
                            arrow: {
                                className: 'step-block-arrow',
                                children:
                                    'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
                            },
                            children: {
                                className: 'step-block-child',
                                children: [
                                    {
                                        name: 'image',
                                        className: 'step-block-image',
                                        children:
                                            Partnership,
                                    },
                                    {
                                        name: 'title',
                                        className: 'step-block-title',
                                        children: (
                                            <span>
                                                <p>签订合作协议</p>
                                            </span>
                                        ),
                                    },
                                ],
                            },
                        },
                        {
                            className: 'step-block-col',
                            md: 6,
                            xs: 24,
                            name: 'child3',
                            arrow: {
                                className: 'step-block-arrow',
                                children:
                                    'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
                            },
                            children: {
                                className: 'step-block-child',
                                children: [
                                    {
                                        name: 'image',
                                        className: 'step-block-image',
                                        children:
                                            Receiving_money_2,
                                    },
                                    {
                                        name: 'title',
                                        className: 'step-block-title',
                                        children: (
                                            <span>
                                                <p>享受税收优惠</p>
                                            </span>
                                        ),
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
    },
};
