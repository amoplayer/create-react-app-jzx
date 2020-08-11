import React from 'react';
import { enquireScreen } from 'enquire-js';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import FeatureCard from '../../components/FeatureCard';
import FeatureLeft from '../../components/FeatureLeft';
import Content from '../../components/Content'
import ContentBusiness from '../../components/ContentBusiness'

import {
  FeatureDataSource,
  BannerDataSource,
  FeatureCardDataSource,
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
      <FeatureCard
          id="FeatureCard_About"
          key="FeatureCard_About"
          dataSource={FeatureCardDataSource}
      />,
      <Content
          id="Content_About"
          key="Content_About"
          dataSource={ContentDataSource}
      />,
      <ContentBusiness
          id="ContentBusinessDataSource_About"
          key="ContentBusinessDataSource_About"
          dataSource={ContentBusinessDataSource}
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
