import React from 'react';
import { enquireScreen } from 'enquire-js';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import {
  FeatureDataSource,
  BannerDataSource,
} from './data';

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
