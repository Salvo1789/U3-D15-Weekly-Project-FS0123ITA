import { Container, Row, Col } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'
import AlbumCard from './AlbumCard'


const Homepage = () => {
  
  return (
    <>
    <Container fluid>
      <Row>
        <SiteNav />

        <Col xs={12} md={9} class="offset-md-3 mainPage">
          <Row>
            <Col xs={9} lg={11} class="mainLinks d-none d-md-flex">
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
                  >
                    <AlbumCard songInfo="albums"/>
                 </Row>
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

    <SiteFooter />
</>
  )
}

export default Homepage
