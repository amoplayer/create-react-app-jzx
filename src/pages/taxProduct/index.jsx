import React from 'react';
import { enquireScreen } from 'enquire-js';
import Banner from '../../components/Banner';
import Content from '../../components/Content'
import Steps from '../../components/Steps'

import {
  BannerDataSource,
  ContentDataSource,
  FeatureDataSource,
  StepDataSource
} from './data';
import Feature from "../../components/Feature";

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
      <Content
          id="Content_About"
          key="Content_About"
          dataSource={ContentDataSource}
      />,
      <Feature
          id="Feature_taxProduct"
          key="Feature_taxProduct"
          dataSource={FeatureDataSource}
      />,
      <Steps
          id="Steps_taxProduct"
          key="Steps_taxProduct"
          dataSource={StepDataSource}
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
