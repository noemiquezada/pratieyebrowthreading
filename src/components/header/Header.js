import React, { Component } from 'react';
import './Header.css';
import Logo from "../../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <section className="outer-header">
        <header className="header row">
          <div className="columns col-sm-12">
            <div className="secondary-menu-container">
              <ul className="menu-secondary">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Prices</a>
                </li>
                <li>
                  <a href="#">Threading Process</a>
                </li>
              </ul>
            </div>
            <a className="logo-panel" href="#">
              <img src={Logo} alt="Prati's Eyebrow Threading"/>
            </a>
            <ul className="utilities">
              <li className="icon-yelp">
                <a href="#" title="Yelp"><span><i className="fab fa-yelp"></i></span></a>
              </li>
            </ul>
          </div>
        </header>
      </section>
    );
  }
}

export default Header;
