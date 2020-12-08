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
        {!isAuthenticated ? (
          <>
            <li>
              <i
                className="fas fa-sitemap"
                style={{ marginLeft: "8px", marginRight: "-4px" }}
              />
              <Link to="/profiles">Developers</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <i
                className="fas fa-sitemap"
                style={{ marginLeft: "8px", marginRight: "-4px" }}
              />
              <Link to="/profiles">Developers</Link>
            </li>
            <li onClick={logout} className="a">
              <i
                className="fas fa-sign-out-alt"
                style={{ marginLeft: "8px", marginRight: "4px" }}
              />
              Logout
            </li>
          </>
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
