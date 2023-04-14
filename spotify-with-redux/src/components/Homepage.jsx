import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Homepage = () => {
  return (
    <>
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

        <Col xs={12} md={9} class=" offset-md-3 mainPage">
          <Row>
            <Col xs={9} lg={11} class=" mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="searchResults" style={{display: 'none'}}>
                <h2>Search Results</h2>
                <Row
                  class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                ></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row
                  class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                ></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row
                  class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                ></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row
                  class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                ></Row>
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>

<Container fluid className=" fixed-bottom bg-container pt-1">
<Row>
  <Col lg={10 }className="offset-lg-2">
    <Row>
      <Col xs={6} md={4} lg={2}
        className=" offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
      >
        <Row>
          <a href="#">
            <img src="playerbuttons/Shuffle.png" alt="shuffle" />
          </a>
          <a href="#">
            <img src="playerbuttons/Previous.png" alt="previous" />
          </a>
          <a href="#">
            <img src="playerbuttons/Play.png" alt="play" />
          </a>
          <a href="#">
            <img src="playerbuttons/Next.png" alt="next" />
          </a>
          <a href="#">
            <img src="playerbuttons/Repeat.png" alt="repeat" />
          </a>
        </Row>
      </Col>
    </Row>
    <Row className="justify-content-center playBar py-3">
      <Col xs={8} md={6}>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </Col>
    </Row>
  </Col>
</Row>
</Container>
</>
  );
};
