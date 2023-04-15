import { useSelector } from 'react-redux'
import AlbumCard from './AlbumCard'

const GenresAlbums = ({title, trackStore, content}) => {
    const tracks = useSelector((state) => state[trackStore][content])

    return (
        <>
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
                  {tracks.map((track) => (
              <AlbumCard key={track.id} track={track} />
            ))} 
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
                >
                    {tracks.map((track) => (
              <AlbumCard key={track.id} track={track} />
            ))}
                </Row>
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