import React from 'react';
import { enquireScreen } from 'enquire-js';
import Banner from '../../components/Banner';
import FeatureRight from '../../components/FeatureRight'
import FeatureLeft from '../../components/FeatureLeft'

import {
  BannerDataSource,
  FeatureRightDataSource,
  FeatureLeftDataSource,
  FeatureRightDataSource2,
  FeatureLeftDataSource2
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
      />,
      <FeatureRight
          id="FeatureRight_Cloud"
          key="FeatureRight_Cloud"
          dataSource={FeatureRightDataSource}
      />,
      <FeatureLeft
          id="FeatureLeft_Cloud"
          key="FeatureLeft_Cloud"
          dataSource={FeatureLeftDataSource}
      />,
      <FeatureRight
          id="FeatureRight_Cloud2"
          key="FeatureRight_Cloud2"
          dataSource={FeatureRightDataSource2}
      />,
      <FeatureLeft
          id="FeatureLeft_Cloud2"
          key="FeatureLeft_Cloud2"
          dataSource={FeatureLeftDataSource2}
      />
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
