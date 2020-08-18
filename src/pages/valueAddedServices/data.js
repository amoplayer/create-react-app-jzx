import React from 'react';
import png1 from '../../assets/img/valueAddedServices/png1.png'
import png2 from '../../assets/img/valueAddedServices/png2.png'

import index1 from "../../assets/img/valueAddedServices/1.png";
import index2 from "../../assets/img/valueAddedServices/2.png";
import index3 from "../../assets/img/valueAddedServices/3.png";
import index4 from "../../assets/img/valueAddedServices/4.png";
import index5 from "../../assets/img/valueAddedServices/5.png";
import index6 from "../../assets/img/valueAddedServices/6.png";

export const BannerDataSource = {
    wrapper: { className: 'banner kdflaz06unm-editor_css' },
    textWrapper: { className: 'banner-text-wrapper' },
    title: {
        className: 'banner-title kdflatelklc-editor_css',
        children: (
            <p>增值服务产品库</p>
        ),
    },
    content: {
        className: 'banner-content kdfle0wr33p-editor_css',
        children: (
            <p>Value Added Services</p>
        ),
    },
    button: {
        className: 'banner-button kdfle4njens-editor_css',
        children: (
            <a href='http://api.zjyboss.com/#/login' rel="noopener noreferrer" target="_blank">
                <p>Login</p>
            </a>
        ),
    },
};

export const FeatureRightDataSource = {
    wrapper: { className: 'home-page-wrapper feature-right-wrapper' },
    OverPack: { className: 'home-page feature-right', playScale: 0.3 },
    imgWrapper: { className: 'feature-right-img', md: 10, xs: 24 },
    img: {
        children: png1,
    },
    textWrapper: { className: 'feature-right-text', md: 14, xs: 24 },
    title: { className: 'feature-right-title', children: '商业保险' },
    content: {
        className: 'feature-right-content',
        children:
            '提供工伤保险、意外伤害险、团体人身意外伤害保险、雇主责任险、工程一切险、工程竞标保险、履约保证险、农民工工资支付保证险等商业保险服务。',
    },
};

export const FeatureLeftDataSource = {
    wrapper: { className: 'home-page-wrapper feature-left-wrapper' },
    OverPack: { className: 'home-page feature-left', playScale: 0.3 },
    imgWrapper: { className: 'feature-left-img', md: 10, xs: 24 },
    img: {
        children: png2,
    },
    textWrapper: { className: 'feature-left-text', md: 14, xs: 24 },
    title: { className: 'feature-left-title', children: '一站式管理' },
    content: {
        className: 'feature-left-content',
        children: '一次配置全年福利计划 定时提醒按时生效,福利预算分配合理规划 减轻HR工作负担',
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
                    <p>增值服务</p>
                ),
                className: 'title-h1',
            }
        ],
    },
    block: {
        className: 'content-components-img-wrapper',
        gutter: 24,
        children: [
            {
                name: 'block-1',
                className: 'block',
                md: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index1,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>电商购物</h3>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block-2',
                className: 'block',
                md: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index2,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>交通出行</h3>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block-3',
                className: 'block',
                md: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index3,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>餐饮美食</h3>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block-4',
                className: 'block',
                md: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index4,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>休闲娱乐</h3>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block-5',
                className: 'block',
                md: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index5,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>轻松生活</h3>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block-6',
                className: 'block',
                md: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: index6,
                    },
                    content: {
                        children: (
                            <span>
                                <h3>教育培训</h3>
                            </span>
                        ),
                    },
                },
            },
        ],
    },
};

