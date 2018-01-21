import React, { Component } from 'react';
import './Process.css';
import Panel from './process-panel/ProcessPanel';

class Process extends Component {
  render() {
    return(
      <div className="flex-grid-fourths">
        <div className="col">
          <Panel
            icon="icon-shape"
            heading="Shape"
            content="Through a cotton-twisting thread treatment unwanted hair is removed."
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-trim"
            heading="Trim"
            content="Brow hair is trimmed to make unruly hair look much neater."
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-cool"
            heading="Cool"
            content="To soothe and reduce redness choose between Aloe Vera, Rose Water and  Barbicide."
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-massage"
            heading="Massage"
            content="Experience a little brow massage of joy as the coolant agent is worked into your skin.  "
          />
        </div>
      </div>
    );
  }
}

export default Process;
