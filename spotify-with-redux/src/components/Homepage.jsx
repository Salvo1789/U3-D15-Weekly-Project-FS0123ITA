import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { useSelector } from 'react-redux'
import GenresAlbums from './GenresAlbums'

const Homepage = () => {
  const userSearchResults = useSelector((state) => state.userSearchResults)
  const mainSearchResults = useSelector((state) => state.mainSearchResults)

  return (
    <>
      {userSearchResults.length > 0 && <GenresAlbums title="Search Results" tracks={userSearchResults} />}
      {mainSearchResults.map((genresTrack) => (
        <GenresAlbums
          key={`genres-${genresTrack.title}`}
          title={genresTrack.title}
          tracks={genresTrack.trackList}
        />
      ))}
    </>
  )
}
export default Homepage
