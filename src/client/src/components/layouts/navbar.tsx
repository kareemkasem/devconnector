import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../store/configureStore";
import { logout } from "../../store/actions/auth";

function Navbar({ logout, isAuthenticated }: NavbarProps) {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <li onClick={logout} className="a">
            logout
          </li>
        )}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);

interface NavbarProps {
  isAuthenticated: boolean;
  logout: VoidFunction;
}
