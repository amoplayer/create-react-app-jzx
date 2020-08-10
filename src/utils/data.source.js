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
          url: '/',
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
          url: 'product',
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
          url: '',
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
          url: '',
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
          url: '/about',
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
export const BannerDataSource = {
  wrapper: { className: 'banner kdflaz06unm-editor_css' },
  textWrapper: { className: 'banner-text-wrapper' },
  title: {
    className: 'banner-title kdflatelklc-editor_css',
    children: (
      <span>
        <p>益兴致力于</p>
      </span>
    ),
  },
  content: {
    className: 'banner-content kdfle0wr33p-editor_css',
    children: (
      <span>
        <p>成为中国最具影响力的企业人力资源+税务+法务系统解决方案提供商</p>
      </span>
    ),
  },
  button: {
    className: 'banner-button kdfle4njens-editor_css',
    children: (
      <span>
        <p>Learn More</p>
      </span>
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
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
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
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
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
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
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
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
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
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
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
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
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
              url: '',
              children: (
                <span>
                  <p>人事外包产品库</p>
                </span>
              ),
            },
            {
              name: 'link1',
              url: '',
              children: (
                <span>
                  <p>税收筹划产品库</p>
                </span>
              ),
            },
            {
              name: 'link2',
              url: '',
              children: (
                <span>
                  <span>
                    <p>增值服务产品库</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'link3',
              url: '',
              children: (
                <span>
                  <p>专家云</p>
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
              url: '',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <p>客服热线：4000098708</p>
                  </span>
                </span>
              ),
            },
            {
              url: '',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>商务合作：zhang.rong@esing.net (工作时段24小时回复)</p>
                  </span>
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
              name: 'image~kdflxl41qzd',
              className: '',
              children:
                'https://zos.alipayobjects.com/rmsportal/HzvPfCGNCtvGrdk.png',
            },
          ],
        },
      },
      {
        name: 'block~kdflqp2anyj',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <p>人力宝</p>
                </span>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'image~kdflxajvxu6',
              className: '',
              children:
                'https://zos.alipayobjects.com/rmsportal/HzvPfCGNCtvGrdk.png',
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
