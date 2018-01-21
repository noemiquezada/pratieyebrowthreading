import React, { Component } from 'react';
import './CTA.css';

class CTA extends Component {
  render() {
    return(
      <div className="call-to-action panel">
        <div className="visual"></div>
        <div className="text">
          <div className="inner-text">
            <h2>Free eyebrow threading on your 11th visit.</h2>
            <p>with our loyalty punch card</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CTA;
