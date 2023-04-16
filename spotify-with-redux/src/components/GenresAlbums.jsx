
import { Row, Col } from 'react'
import AlbumCard from './AlbumCard'

const GenresAlbums = ({title, tracks}) => {

    return (
        <>
        <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row
                  class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3"
                ></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="rock">
                <h2>{title}</h2>
                <Row
                  class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3"
                  id="rockSection"
                  >
                  {tracks.map((track) => (
              <AlbumCard key={track.id} track={track} />
            ))} 
                 </Row>
              </div>
            </Col>
          </Row>
          </>
    )
}

export default GenresAlbums