import React from 'react';
import { Link } from "react-router-dom"
import gzhImg from '../../../assets/img/footer/gzh.jpeg'
import xcxImg from '../../../assets/img/footer/xcx.png'


export const FooterDataSource = {
    wrapper: { className: 'home-page-wrapper footer-wrapper' },
    OverPack: { className: 'footer', playScale: 0.2 },
    block: {
        className: 'home-page',
        gutter: 0,
        children: [
            {
                name: 'block1',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    children: (
                        <span>
                            <p>三库一云</p>
                         </span>
                    ),
                },
                childWrapper: {
                    children: [
                        {
                            name: 'link0',
                            children: (
                            <span>
                                <Link to='/'>人事外包产品库</Link>
                             </span>
                            ),
                        },
                        {
                            name: 'link1',
                            children: (
                                <span>
                                    <Link to='/'>税收筹划产品库</Link>
                                 </span>
                            ),
                        },
                        {
                            name: 'link2',
                            children: (
                                <span>
                                     <Link to='/'>增值服务产品库</Link>
                                 </span>
                            ),
                        },
                        {
                            name: 'link3',
                            children: (
                                <span>
                                    <Link to='/'>专家云</Link>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block2',
                xs: 24,
                md: 6,
                className: 'block',
                title: { children: '关于' },
                childWrapper: {
                    children: [
                        {
                            name: 'link0',
                            children: (
                                <span>
                                    <p>客服热线：4000098708</p>
                                 </span>
                            ),
                        },
                        {
                            name: 'link1',
                            children: (
                                <span>
                                    <p>商务合作：zhang.rong@esing.net (工作时段24小时回复)</p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block3',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    children: (
                        <span>
                            <p>公众号</p>
                         </span>
                    ),
                },
                childWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'code-img',
                            children: gzhImg,
                        },
                    ],
                },
            },
            {
                name: 'block4',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    children: (
                        <span>
                            <p>人力宝</p>
                        </span>
                    ),
                },
                childWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'code-img',
                            children: xcxImg,
                        },
                    ],
                },
            },
        ],
    },
    copyrightWrapper: { className: 'copyright-wrapper' },
    copyrightPage: { className: 'home-page' },
    copyright: {
        className: 'copyright',
        children: (
        <span>
            <span>©</span>
            <span>
              浙ICP备19043834号-1&nbsp; &nbsp; &nbsp; &nbsp;
            </span>浙江益兴劳务服务有限公司
        </span>
        ),
    },
};
