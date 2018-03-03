import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div id="footer" className="outer-panel">
        <div className="main-content">
          <div className="panel-content">
            <div className="flex-grid-thirds">
              <div className="col">
                <div className="content">
                  <div className="center-content">
                    <h4>Where we at?</h4>
                    <div className="contact">
                      <address>
                        1321 S. Harbor Blvd.<br/>
                        Fullerton CA, 92832<br/><br/>
                        Call: <a href="tel:714-447-9074">(714)447-9074</> <br/>
                        Email: <a href="mailto:pratikrp2002@yahoo.com">pratikrp2002@yahoo.com</>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content work">
                  <div className="center-content">
                    <h4>Work Hours</h4>
                    <div className="hours">
                      Mon 	10 am - 7:30 pm<br/>
                      Tue 	10 am - 7:30 pm<br/>
                      Wed	10 am - 7:30 pm<br/>
                      Thurs	10 am - 7:30 pm<br/>
                      Fri		10 am - 7:30 pm<br/>
                      Sat		10 am - 7:30 pm<br/>
                      Sun 	11 am - 6 pm<br/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content">
                  <div className="center-content">
                    <h4>Follow us On</h4>
                    <span className="follow-link">
                      <span id="yelp-link"><a href="https://www.yelp.com/biz/prati-eyebrow-threading-fullerton-2" target="_blank" title="Yelp"><span><i className="fab fa-yelp"></i></span></a></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              © 2018 Prati Eyebrow Threading. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
