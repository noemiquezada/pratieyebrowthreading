import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div id="hero" className="hero-image">
        <div className="hero-overlay">
          <div className="hero-text">
            <span>
              <h1>The Eyebrow Threading Expert</h1>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
