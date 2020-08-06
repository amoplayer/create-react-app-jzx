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
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
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
        {this.state.show && children}
      </div>
    );
  }
}
