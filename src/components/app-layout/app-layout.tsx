import * as React from 'react'
import AppHeader from './app-header'
import AppFooter from './app-footer'
import { BrowserRouter as Router } from 'react-router-dom';

const layoutStyle = {
}

export default class AppLayout extends React.Component {
  render() {
    let that = this;
    return (
      <div style={layoutStyle}>
        <Router>
          <AppHeader />
          <div style={layoutStyle}>
            {that.props.children}
          </div>
          <AppFooter />
        </Router>
      </div>
    )
  }


}

