import React, { Component } from 'react';
import './Process.css';
import Panel from './process-panel/ProcessPanel';
import Shape from '../../../../assets/icons/threading.PNG';
import Cool from '../../../../assets/icons/cool.png';
import Trim from '../../../../assets/icons/trim.PNG';
import Massage from '../../../../assets/icons/massage.PNG';

class Process extends Component {
  render() {
    return(
      <div className="flex-grid-fourths">
        <div className="col">
          <Panel
            icon="icon-shape"
            heading="Shape"
            content="Through a cotton-twisting thread treatment unwanted hair is removed."
            imgSource={Shape}
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-trim"
            heading="Trim"
            content="Brow hair is trimmed to make unruly hair look much neater."
            imgSource={Trim}
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-cool"
            heading="Cool"
            content="To soothe and reduce redness choose between Aloe Vera, Rose Water and  Barbicide."
            imgSource={Cool}
          />
        </div>
        <div className="col">
          <Panel
            icon="icon-massage"
            heading="Massage"
            content="Experience a little brow massage of joy as the coolant agent is worked into your skin.  "
            imgSource={Massage}
          />
        </div>
      </div>
    );
  }
}

export default Process;
