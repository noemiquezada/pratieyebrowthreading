import React, { Component } from 'react';
import './ServicePanel.css';

class ServicePanel extends Component {
  render() {
    return(
      <div className="content service-content">
          {/* <span className={"icon " + this.props.icon}></span> */}
          <img className="img-icon" src={this.props.imgSource} />
          <h4>{this.props.heading}</h4>
          <p>{this.props.content}</p>
      </div>
    );
  }
}

export default ServicePanel;
