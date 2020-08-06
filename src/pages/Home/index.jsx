/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';

import {
  NavDataSource,
  BannerDataSource,
  FeatureDataSource,
  FooterDataSource,
} from './data.source';

import './less/index.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav
        id="Nav"
        key="Nav"
        dataSource={NavDataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner
        id="Banner"
        key="Banner"
        dataSource={BannerDataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature
        id="Feature"
        key="Feature"
        dataSource={FeatureDataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer
        id="Footer"
        key="Footer"
        dataSource={FooterDataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
