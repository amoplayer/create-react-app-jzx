import React from 'react';
import { enquireScreen } from 'enquire-js';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './less/index.less';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Layout } from 'antd';
import home from '../home';
import about from '../about';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class ROUTER extends React.Component {
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
    const children =
      <Router>
        <Layout>
          <Nav
            id="Nav"
            key="Nav"
            isMobile={this.state.isMobile}
          />
          <Route exact path="/" component={ home } />
          <Route exact path="/about" component={ about } />
          <Footer
            id="Footer"
            key="Footer"
          />
        </Layout>
      </Router>;
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
