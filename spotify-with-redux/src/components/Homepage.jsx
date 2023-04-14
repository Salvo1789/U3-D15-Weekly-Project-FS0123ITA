import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Nav
            class="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div class="nav-container">
              <Navbar.Brand href="index.html">
                <img
                  src="logo/Spotify_Logo.png"
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav>
                  <ul>
                    <li>
                      <Nav.Link href="index.html">
                        <i class="fas fa-home fa-lg"></i>&nbsp; Home
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#">
                        <i class="fas fa-book-open fa-lg"></i> &nbsp; Your
                        Library{""}
                      </Nav.Link>
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
                        <div
                          class="input-group-append"
                          style="margin-bottom: 4%"
                        >
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
                </Nav>
              </Navbar.Collapse>
            </div>

            <div class="nav-btn">
              <button class="btn signup-btn" type="button">
                Sign Up
              </button>
              <button class="btn login-btn" type="button">
                Login
              </button>
              <Nav.Link href="#">Cookie Policy</Nav.Link> |
              <Nav.Link href="#"> Privacy</Nav.Link>
            </div>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};
