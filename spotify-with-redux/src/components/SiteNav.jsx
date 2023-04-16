import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addUserSearchAction } from '../redux/action'
import { Col, Nav, NavLink, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "./Spotify_Logo.png";

const SiteNav = () => {

  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const location = useLocation()

  const search = (e) => {
    dispatch(addUserSearchAction(query));
  }
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

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
            <span className="navbar-toggler-icon"></span>
          </NavbarToggle>
          <NavbarCollapse id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <NavLink to='/'>
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item nav-link" to='/'>
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library{" "}
                  </NavLink>
                </li>
                {!location.pathname.includes("album") && !location.pathname.includes("artist") && (
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                    />
                    <div className="input-group-append mb-4">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                        onClick={search}
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
                )}
              </ul>
            </div>
          </NavbarCollapse>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <NavLink to='/'>Cookie Policy</NavLink> |
          <NavLink to='/'> Privacy</NavLink>
        </div>
      </Nav>
    </Col>
  );
};

export default SiteNav;
