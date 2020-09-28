import React from 'react';
import png1 from '../../assets/img/personnelProduct/1.png'
import png2 from '../../assets/img/personnelProduct/2.png'
import png3 from '../../assets/img/personnelProduct/3.png'
import png4 from '../../assets/img/personnelProduct/4.png'

export const BannerDataSource = {
    wrapper: { className: 'banner kdflaz06unm-editor_css' },
    textWrapper: { className: 'banner-text-wrapper' },
    title: {
        className: 'banner-title kdflatelklc-editor_css',
        children: (
            <p>人事外包产品库</p>
        ),
    },
    content: {
        className: 'banner-content kdfle0wr33p-editor_css',
        children: (
            <p>Personnel outsourcing</p>
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
    title: { className: 'feature-right-title', children: '劳务外包' },
    content: {
        className: 'feature-right-content',
        children:
            '外包业务是一种可跨地区、跨行业新型的用工方式。用工单位根据业务发展需要，由人力资源公司派遣所需员工，并由人力资源公司与员工建立劳动关系，负责员工的管理。其最大特点是劳动力的使用与管理相分离，人力资源公司雇佣工人但不使用工人，用人单位使用工人但不雇佣工人。',
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
    title: { className: 'feature-left-title', children: '劳务派遣' },
    content: {
        className: 'feature-left-content',
        children: '劳务派遣又称人才派遣、人才租赁、劳动力派遣、劳动力租赁，是指由劳务派遣机构与派遣员工签订劳动合同，派遣员工向用工企业提供劳务的一种新型用工模式。 劳务派遣的最显著特征就是劳动力的雇佣和使用分离，不仅可以节省用工企业劳动力的使用和管理成本，更重要的是有利于用人单位用人的灵活性，并且可以减少劳动关系风险。',
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
    title: { className: 'feature-right-title', children: '招聘外包' },
    content: {
        className: 'feature-right-content',
        children:
            'RPO业务是益兴面向企业提供的招聘项目整体外包解决方案，为企业提供点到点的“一站式”专业招聘服务。 RPO业务以解决企业招聘需求为目标，为客户提出的招聘需求进行分析和评估，提供最适合的招聘渠道、人才搜寻与人才甄选等方案，整合线上及线下多种资源挖掘目标招聘人群，并协助客户进行简历筛选与初期面试，为客户定位关键候选人，帮助客户以最快速度解 决人才招聘问题。',
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
    title: { className: 'feature-left-title', children: '建筑劳务' },
    content: {
        className: 'feature-left-content',
        children: '益兴在建筑人力、财力、物力资源有效整合方面经验丰富，聚集了众多管理人才和专业施工班组，承揽全国范围内的地铁高铁站、学校、市政园林、河道治理、公路绿化等工程项目的劳务服务。合作方式包括但不限于劳务总分包、劳务分项分包、劳务管理总分包、劳务资源共享等。',
    },
};
