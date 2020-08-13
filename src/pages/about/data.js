import React from 'react';
import gsjsImg from '../../assets/img/about/gsjs.jpg'
import yuanjing from '../../assets/img/about/yuanjing.png'
import shiming from '../../assets/img/about/shiming.png'
import hexinjiazhiguan from '../../assets/img/about/hexinjiazhiguan.png'

export const BannerDataSource = {
    wrapper: { className: 'banner kdflaz06unm-editor_css' },
    textWrapper: { className: 'banner-text-wrapper' },
    title: {
        className: 'banner-title kdflatelklc-editor_css',
        children: (
            <p>紧跟政策法规变化</p>
        ),
    },
    content: {
        className: 'banner-content kdfle0wr33p-editor_css',
        children: (
            <p>深耕人力资源、共享经济服务行业</p>
        ),
    },
    button: {
        className: 'banner-button kdfle4njens-editor_css'
    },
};

export const FeatureDataSource = {
    wrapper: { className: 'home-page-wrapper content-wrapper' },
    page: { className: 'home-page content' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [{ name: 'title', children: '企业文化' }],
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
                            className: 'content-block-icon-about',
                            children: yuanjing,
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '愿景',
                        },
                        {
                            name: 'content',
                            children: (
                                <span>
                                    <p>整合资源，倾力打造“益兴人力资源”品牌</p>
                                </span>
                            ),
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
                            className: 'content-block-icon-about',
                            children: shiming,
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '使命',
                        },
                        {
                            name: 'content',
                            children: (
                                <span>
                                    <p>让所有人力财税变得简单、安全、合规！</p>
                                </span>
                            ),
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
                            className: 'content-block-icon-about',
                            children: hexinjiazhiguan,
                        },
                        {
                            name: 'title',
                            className: 'content-block-title',
                            children: '核心价值观',
                        },
                        {
                            name: 'content',
                            children: (
                                <span>
                                    <p>以风控为核心，让信任更简单</p>
                                </span>
                            ),
                        },
                    ],
                },
            }
        ],
    },
};

// {/*export const FeatureCardDataSource = {*/}
//     wrapper: { className: 'home-page-wrapper feature-card-wrapper' },
//     page: { className: 'home-page feature-card' },
//     OverPack: { playScale: 0.3 },
//     titleWrapper: {
//         className: 'feature-card-title-wrapper',
//         children: [
//             {
//                 name: 'title',
//                 className: 'feature-card-title-h1',
//                 children: (
//                     <span>
//                         <p>COMPANY CULTURE</p>
//                     </span>
//                 ),
//             },
//             {
//                 name: 'content',
//                 className: 'feature-card-title-content',
//                 children: (
//                     <span>
//                         <p>公司理念</p>
//                     </span>
//                 ),
//             },
//         ],
//     },
//     blockWrapper: {
//         className: 'feature-card-block-wrapper',
//         gutter: 24,
//         children: [
//             {
//                 md: 8,
//                 xs: 24,
//                 name: 'block0',
//                 className: 'feature-card-block',
//                 children: {
//                     className: 'feature-card-block-group',
//                     children: [
//                         {
//                             name: 'image',
//                             className: 'feature-card-block-image',
//                             children:
//                                 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
//                         },
//                         {
//                             name: 'title',
//                             className: 'feature-card-block-title',
//                             children: (
//                                 <span>
//                                     <p>风控先行</p>
//                                 </span>
//                             ),
//                         },
//                         {
//                             name: 'content',
//                             className: 'feature-card-block-content',
//                             children: (
//                                 <span>
//                                     <p>
//                                       公司定位：数字风控，360°安全守护，用安全、合规、高效服务大众
//                                     </p>
//                                 </span>
//                             ),
//                         },
//                     ],
//                 },
//             },
//             {
//                 md: 8,
//                 xs: 24,
//                 name: 'block~kdnxm0608ca',
//                 className: 'feature-card-block',
//                 children: {
//                     className: 'feature-card-block-group',
//                     children: [
//                         {
//                             name: 'image',
//                             className: 'feature-card-block-image',
//                             children:
//                                 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
//                         },
//                         {
//                             name: 'title',
//                             className: 'feature-card-block-title',
//                             children: (
//                                 <span>
//                                     <span>
//                                        <p>专业极致</p>
//                                     </span>
//                                 </span>
//                             ),
//                         },
//                         {
//                             name: 'content',
//                             className: 'feature-card-block-content',
//                             children: (
//                                 <span>
//                                     <p>
//                                         经营理念："为我所有"到"为我所用"的企业经营管理新思维
//                                     </p>
//                                 </span>
//                             ),
//                         },
//                     ],
//                 },
//             },
//             {
//                 md: 8,
//                 xs: 24,
//                 name: 'block~kdnxm0wpcq',
//                 className: 'feature-card-block',
//                 children: {
//                     className: 'feature-card-block-group',
//                     children: [
//                         {
//                             name: 'image',
//                             className: 'feature-card-block-image',
//                             children:
//                                 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
//                         },
//                         {
//                             name: 'title',
//                             className: 'feature-card-block-title',
//                             children: (
//                                 <span>
//                                     <span>
//                                         <p>合作共赢</p>
//                                     </span>
//                                 </span>
//                             ),
//                         },
//                         {
//                             name: 'content',
//                             className: 'feature-card-block-content',
//                             children: (
//                                 <span>
//                                     <span>
//                                         <span>
//                                             <p>
//                                                 团队管理：尊重人才，敬重专业，员工与公司共发展，以服务赢得市场，以品质满意客户
//                                             </p>
//                                         </span>
//                                     </span>
//                                 </span>
//                             ),
//                         },
//                     ],
//                 },
//             },
//         ],
//     },
// };

export const FeatureLeftDataSource = {
    wrapper: { className: 'home-page-wrapper feature-left-wrapper' },
    OverPack: { className: 'home-page feature-left', playScale: 0.3 },
    imgWrapper: { className: 'feature-left-img', md: 10, xs: 24 },
    img: {
        children: gsjsImg,
    },
    textWrapper: { className: 'feature-left-text', md: 14, xs: 24 },
    title: {
        className: 'feature-left-title',
        children: (
            <span>
                <p>公司简介</p>
            </span>
        ),
    },
    content: {
        className: 'feature-left-content',
        children: (
            <span>
                <p>
                    益兴集团:&nbsp;
                    <span>
                        总部位于浙江杭州，旗下的人力服务机构最早成立于2010年，于2014年起开始对多家人力公司进行整合，在南京、宁波、上海、深圳、成都等地设立八家全资控股子公司，在北京、广州拥有多家参股公司。业务涵盖服务外包、人才派遣、人事代理、薪酬优化、政府采购、福利外包、自由职业者、建筑劳务等综合服务。公司拥有来自全国各地的人力专家，均拥有超过10年以上的行业服务经验；截止2018年，公司在全国合作的集团客户有3000多家，合作的个人客户50000+。未来，益兴集团将整合集团和社会资源，倾力打造“益兴人力资源”的品牌，建设成为国内最大的人税法系统解决方案提供商。
                    </span>
                </p>
            </span>
        ),
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
                    <p>COMPANY CULTURE</p>
                ),
                className: 'title-h1',
            },
            {
                name: 'content',
                className: 'title-content',
                children: (
                    <p>公司理念</p>
                ),
            },
        ],
    },
    block: {
        className: 'content-components-img-wrapper',
        gutter: 16,
        children: [
            {
                name: 'block0',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: 'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
                    },
                    content: {
                        children: (
                            <span>
                                <h3>风控先行</h3>
                                <p>公司定位：数字风控，360°安全守护，用安全、合规、高效服务大众</p>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block~kdnxr8h1v9',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: 'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
                    },
                    content: {
                        children: (
                            <span>
                                <h3>专业极致</h3>
                                <p>经营理念："为我所有"到"为我所用"的企业经营管理新思维</p>
                            </span>
                        ),
                    },
                },
            },
            {
                name: 'block~kdnxr9cqk9n',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'content-components-block-content' },
                    img: {
                        children: 'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
                    },
                    content: {
                        children: (
                            <span>
                                <h3>合作共赢</h3>
                                <p>团队管理：尊重人才，敬重专业，员工与公司共发展，以服务赢得市场，以品质满意客户</p>
                            </span>
                        ),
                    },
                },
            },
        ],
    },
};

export const ContentBusinessDataSource = {
    wrapper: { className: 'home-page-wrapper content-business-wrapper' },
    page: { className: 'home-page content-business' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'image',
                children:
                    'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
                className: 'title-image',
            },
            {
                name: 'title',
                children: (
                    <span>
                        <p>3000+企业用户的选择</p>
                    </span>
                )
            },
            {
                name: 'content',
                children: (
                    <span>
                        <p>覆盖互联网、保险、房地产、物流运输、教育、企业服务、医药等众多领域</p>
                    </span>
                ),
            },
        ],
    },
    block: {
        className: 'img-wrapper',
        children: [
            {
                name: 'block0',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'block-content' },
                    img: {
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
                    },
                },
            },
            {
                name: 'block1',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'block-content' },
                    img: {
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
                    },
                },
            },
            {
                name: 'block2',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'block-content' },
                    img: {
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
                    },
                },
            },
            {
                name: 'block3',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'block-content' },
                    img: {
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
                    },
                },
            },
            {
                name: 'block4',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'block-content' },
                    img: {
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
                    },
                },
            },
            {
                name: 'block5',
                className: 'block',
                md: 8,
                xs: 24,
                children: {
                    wrapper: { className: 'block-content' },
                    img: {
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
                    },
                },
            },
        ],
    },
};

