import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ReactComponent as Brand } from './assets/logo.svg';
import './css/nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="nav-elements">
          <ul>
            <li>
              <Link to="/ap-to-europe">Asia Pacific to Europe</Link>
            </li>
            <li>
              <Link to="/ap-to-ap">Asia Pacific to Asia Pacific</Link>
            </li>
            <li>
              <Link to="/ap-to-sa">Asia Pacific to Southern Africa</Link>
            </li>
            <li>
              <Link to="/ap-to-am">Asia Pacific to the Americas</Link>
            </li>
            <li>
              <Link to="/ap-to-wca">Asia Pacific to West and Central Africa</Link>
            </li>
            <li>
              <Link to="/ap-to-me-and-na">Asia Pacific to Middle East and North Africa</Link>
            </li>
            <li>
              <Link to="/ap-to-e-ha">Asia Pacific to East and Horn of Africa</Link>
            </li>
            <li>
              <Link to="/ap-to-region">Asia Pacific to Each Region</Link>
            </li>
          </ul>

        </div>

      </div>
      

      
      
    </nav>
  );
}

export default Navbar;