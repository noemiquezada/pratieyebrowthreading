import React, { Component } from 'react';
import './ProcessPanel.css';

class ProcessPanel extends Component {
  render() {
    return(
      <div className="content process-content">
          <span className={"icon " + this.props.icon}></span>
          <h4>{this.props.heading}</h4>
          <p>{this.props.content}</p>
      </div>
    );
  }
}

export default ProcessPanel;
