import React from 'react';
import { Link } from "react-router-dom"
import icon1 from '../../assets/img/home/icon1.png'
import icon2 from '../../assets/img/home/icon2.png'
import icon3 from '../../assets/img/home/icon3.png'
import icon4 from '../../assets/img/home/icon4.png'
import icon5 from '../../assets/img/home/icon5.png'
import icon6 from '../../assets/img/home/icon6.png'


export const BannerDataSource = {
    wrapper: { className: 'banner kdflaz06unm-editor_css' },
    textWrapper: { className: 'banner-text-wrapper' },
    title: {
        className: 'banner-title kdflatelklc-editor_css',
        children: (
            <p>益兴致力于</p>
        ),
    },
    content: {
        className: 'banner-content kdfle0wr33p-editor_css',
        children: (
            <p>成为中国最具影响力的企业人力资源+税务+法务系统解决方案提供商</p>
        ),
    },
    button: {
        className: 'banner-button kdfle4njens-editor_css',
        children: (
            <Link to='/about'>
                <p>Learn More</p>
            </Link>
        ),
    },
};

export const FeatureDataSource = {
    wrapper: { className: 'home-page-wrapper content-wrapper' },
    page: { className: 'home-page content' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [{ name: 'title', children: '产品与服务' }],
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
                            children: icon1,
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '服务业',
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
                            children: icon2,
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '互联网',
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
                            children: icon3,
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '贸易',
                        },
                    ],
                },
            },
            {
                name: 'block~kdfoi9q7csp',
                className: 'content-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content-block-icon',
                            children: icon4
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '房地产',
                        },
                    ],
                },
            },
            {
                name: 'block~kdfoiaeqhsq',
                className: 'content-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content-block-icon',
                            children: icon5
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '教育',
                        },
                    ],
                },
            },
            {
                name: 'block~kdfoiayxcsd',
                className: 'content-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content-block-icon',
                            children: icon6
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '直播',
                        },
                    ],
                },
            },
        ],
    },
};
