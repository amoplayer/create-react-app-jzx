import React from 'react';
import png1 from '../../assets/img/expertCloud/1.png'
import png2 from '../../assets/img/expertCloud/2.png'
import png3 from '../../assets/img/expertCloud/3.png'
import png4 from '../../assets/img/expertCloud/4.png'

export const BannerDataSource = {
    wrapper: { className: 'banner kdflaz06unm-editor_css' },
    textWrapper: { className: 'banner-text-wrapper' },
    title: {
        className: 'banner-title kdflatelklc-editor_css',
        children: (
            <p>专家云</p>
        ),
    },
    content: {
        className: 'banner-content kdfle0wr33p-editor_css',
        children: (
            <p>Expert Cloud</p>
        ),
    },
    button: {
        className: 'banner-button kdfle4njens-editor_css',
        children: (
            <a href='#' rel="noopener noreferrer">
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
    title: { className: 'feature-right-title', children: '技术安全保障' },
    content: {
        className: 'feature-right-content',
        children:
            '企业大神级技术研发保障团队，第三方备付金账户和银行内部监管账户，全方位保护，让您安全无虞',
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
    title: { className: 'feature-left-title', children: '电子签约中心' },
    content: {
        className: 'feature-left-content',
        children: '个人独立签约、在线认证、权证报告在线生成、证据链完善',
    },
};

export const FeatureRightDataSource2 = {
    wrapper: { className: 'home-page-wrapper feature-right-wrapper' },
    OverPack: { className: 'home-page feature-right', playScale: 0.3 },
    imgWrapper: { className: 'feature-right-img', md: 10, xs: 24 },
    img: {
        children: png3,
    },
    textWrapper: { className: 'feature-right-text', md: 14, xs: 24 },
    title: { className: 'feature-right-title', children: '智能风控中心' },
    content: {
        className: 'feature-right-content',
        children:
            '十项评分纬度，全方位企业风险评估',
    },
};

export const FeatureLeftDataSource2 = {
    wrapper: { className: 'home-page-wrapper feature-left-wrapper' },
    OverPack: { className: 'home-page feature-left', playScale: 0.3 },
    imgWrapper: { className: 'feature-left-img', md: 10, xs: 24 },
    img: {
        children: png4,
    },
    textWrapper: { className: 'feature-left-text', md: 14, xs: 24 },
    title: { className: 'feature-left-title', children: '智能支付中心' },
    content: {
        className: 'feature-left-content',
        children: '大数据精准匹配信息、多渠道合作、一键发佣金、秒级到账体验',
    },
};
