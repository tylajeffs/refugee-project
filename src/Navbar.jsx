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
      </ul>
    </nav>
  );
}

export default Navbar;