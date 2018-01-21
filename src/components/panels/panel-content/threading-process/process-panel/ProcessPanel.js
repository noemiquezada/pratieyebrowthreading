import React, { Component } from 'react';
import './ProcessPanel.css';

class ProcessPanel extends Component {
  render() {
    return(
      <div className="inner-panel-content process-content">
        <div>
          <span className={"icon " + this.props.icon}></span>
          <h4>{this.props.heading}</h4>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default ProcessPanel;
