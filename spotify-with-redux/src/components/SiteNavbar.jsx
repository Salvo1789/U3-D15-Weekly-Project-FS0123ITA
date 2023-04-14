import { Col, Nav, NavLink, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../logo/Spotify_Logo.png";

const MyNav = () => {
  return (
    <Col md={2}>
      <Nav
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <NavbarBrand>
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </NavbarBrand>
          <NavbarToggle
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </NavbarToggle>
          <NavbarCollapse id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul>
                <li>
                  <NavLink href="index.html">
                    <i class="fas fa-home fa-lg"></i>&nbsp; Home
                  </NavLink>
                </li>
                <li>
                  <NavLink class="nav-item nav-link" href="#">
                    <i class="fas fa-book-open fa-lg"></i>&nbsp; Your Library{" "}
                  </NavLink>
                </li>
                <li>
                  <div class="input-group mt-3">
                    <input
                      type="text"
                      class="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append" className="mb-4">
                      <button
                        class="btn btn-outline-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                        onClick="search()"
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </NavbarCollapse>
        </div>
        <div class="nav-btn">
          <button class="btn signup-btn" type="button">
            Sign Up
          </button>
          <button class="btn login-btn" type="button">
            Login
          </button>
          <NavLink href="#">Cookie Policy</NavLink> |
          <NavLink href="#"> Privacy</NavLink>
        </div>
      </Nav>
    </Col>
  );
};

export default MyNav;