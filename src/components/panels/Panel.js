import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    return(
      <div className="outer-panel">
          <div className="main-content">
            <div className="panel-header">
              <h2>{this.props.heading}</h2>
              <h3>{this.props.subheading}</h3>
            </div>
            <div className="panel-content">
              {this.props.content}
            </div>
          </div>
      </div>
    );
  }
}

export default Panel;
