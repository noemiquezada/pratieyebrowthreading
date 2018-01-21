import React, { Component } from 'react';
import './Main.css';
import Header from "./header/Header.js";
import Hero from "./hero/Hero.js";
import Panel from "./panels/Panel.js";

import Services from "./panels/panel-content/services/Services.js";
import Process from "./panels/panel-content/threading-process/Process.js";
import Prices from "./panels/panel-content/prices/Prices.js";
import CallToAction from "./panels/panel-content/call-to-action/CTA.js";
import Statement from "./panels/panel-content/statement/Statement.js";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header/>
        <Hero/>
        <Panel heading="Services" subheading="What we offer?" content={<Services/>}/>
        <Panel heading="Prices" subheading="Browse our best deals." content={<Prices />}/>
        <CallToAction />
        <Panel heading="Threading Process" subheading="A glance at our eyebrow threading process focused on ultimate care and results. " content={<Process/>}/>
        <Statement />
      </div>
    );
  }
}

export default Main;
