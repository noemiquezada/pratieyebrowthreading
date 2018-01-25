import React, { Component } from 'react';
import './Header.css';
import Logo from "../../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <div id="header" className="">
        <div className="col-sm-10 col-sm-offset-1">
          <div id="inner-header">
            <span className="left-menu">
              <a href="javascript:void(0)" id="services">Services</a>
            <a href="javascript:void(0)" id="prices">Prices</a>
            </span>
            <a id="logo" href="javascript:void(0)"><img src={Logo}/></a>
            <span className="right-menu">
              <a href="javascript:void(0)" id="threading-process">Threading Process</a>
              <span id="yelp-link"><a href="#" title="Yelp"><span><i className="fab fa-yelp"></i></span></a></span>
            </span>
            <span className="right-menu-mobile">
              <span id="yelp-link"><a href="#" title="Yelp"><span><i className="fab fa-yelp"></i></span></a></span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
