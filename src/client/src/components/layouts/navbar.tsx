import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/index">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
