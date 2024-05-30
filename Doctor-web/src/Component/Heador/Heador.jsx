import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky-top bg-white">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Logo"
                className="me-2"
                style={{ height: "2rem" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/services"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Services
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <button type="button" className="btn btn-primary">
                      Login
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
