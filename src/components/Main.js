import React, { Component } from 'react';
import './Main.css';
import Header from "./header/Header.js";
import Hero from "./hero/Hero.js";
import Panel from "./panels/Panel.js";

import Services from "./panels/panel-content/services/Services.js";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header/>
        <Hero/>
        <Panel heading="Services" subheading="What we offer?" content={<Services/>}/>
      </div>
    );
  }
}

export default Main;
