import React from 'react';
import { enquireScreen } from 'enquire-js';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import FeatureLeft from '../../components/FeatureLeft';
import Content from '../../components/Content'
import ContentBusiness from '../../components/ContentBusiness'
import FeaterBubble from '../../components/FeaterBubble'

import {
  FeatureDataSource,
  BannerDataSource,
  FeatureLeftDataSource,
  ContentDataSource,
  ContentBusinessDataSource
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
          id="Banner_About"
          key="Banner_About"
          dataSource={BannerDataSource}
      />,
      <FeatureLeft
          id="FeatureLeft_About"
          key="FeatureLeft_About"
          dataSource={FeatureLeftDataSource}
          isMobile={this.state.isMobile}
      />,
      <Feature
          id="Feature_About"
          key="Feature_About"
          dataSource={FeatureDataSource}
      />,
      <Content
          id="Content_About"
          key="Content_About"
          dataSource={ContentDataSource}
      />,
      <FeaterBubble
          id="FeaterBubble_About"
          key="FeaterBubble_About"
      />,
      <ContentBusiness
          id="ContentBusinessDataSource_About"
          key="ContentBusinessDataSource_About"
          dataSource={ContentBusinessDataSource}
      />
    ];
    return (
        <div
            ref={(d) => {
              this.dom = d;
            }}
        >
          {this.state.show && children}
        </div>
    );
  }
}
