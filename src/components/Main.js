import React, { Component } from 'react';
import './Main.css';
import Header from "./header/Header.js";
import Hero from "./hero/Hero.js";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header/>
        <Hero/>
      </div>
    );
  }
}

export default Main;
