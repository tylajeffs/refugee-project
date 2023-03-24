import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
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
      </ul>
    </nav>
  );
}

export default Navbar;