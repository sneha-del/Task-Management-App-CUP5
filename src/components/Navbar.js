import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router";
const Navbar = ({ user }) => {
  const history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          TO-DO
        </NavLink>
        {user ? (
          <button
            className="nav-item"
            onClick={() => {
              auth.signOut();
              history.push("/login");
            }}
          >
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </button>
        ) : (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
