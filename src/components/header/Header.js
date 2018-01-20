import React, { Component } from 'react';
import './Header.css';
import Logo from "../../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <div id="header" className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div id="inner-header">
            <span className="left-menu">
              <a href="#">Services</a>
              <a href="#">Prices</a>
            </span>
            <a id="logo" href="#"><img src={Logo}/></a>
            <span className="right-menu">
              <a href="#">Threading Process</a>
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

//
// <section className="outer-header">
//   <header className="header row">
//     <div className="columns col-sm-12">
//       <div className="secondary-menu-container">
//         <ul className="menu-secondary">
//           <li>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">Prices</a>
//           </li>
//           <li>
//             <a href="#">Threading Process</a>
//           </li>
//         </ul>
//       </div>
//       <a className="logo-panel" href="#">
//         <img src={Logo} alt="Prati's Eyebrow Threading"/>
//       </a>
//       <ul className="utilities">
//         <li className="icon-yelp">
//           <a href="#" title="Yelp"><span><i className="fab fa-yelp"></i></span></a>
//         </li>
//       </ul>
//     </div>
//   </header>
// </section>
