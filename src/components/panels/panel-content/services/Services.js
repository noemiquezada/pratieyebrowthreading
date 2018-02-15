import React, { Component } from 'react';
import './Services.css';
import Panel from './service-panel/ServicePanel';
import Threading from '../../../../assets/icons/threading.PNG';
import Waxing from '../../../../assets/icons/wax.PNG';
import Facial from '../../../../assets/icons/facial.PNG';

class Services extends Component {
  render() {
    return(
      <div className="flex-grid-thirds">
        <div className="col">
          <Panel
            icon="icon-shape"
            heading="Threading"
            content="An ancient hair-removal technique utilizing a cotton thread that allows for well-defined edges that frame the eye."
            imgSource={Threading}
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-waxing"
            heading="Waxing"
            content="Waxing removes the entire hair shaft, growing back naturally without the stubbly look of shaving."
            imgSource={Waxing}
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-facial"
            heading="Facials"
            content="A multi-step skin treatment that can help clean, exfoliate and nourish the skin."
            imgSource={Facial}
          />
        </div>
      </div>
    );
  }
}

export default Services;
