import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addMainSearchAction } from '../redux/action'
import GenresAlbums from './GenresAlbums'

const Homepage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addMainSearchAction("rock"))
    dispatch(addMainSearchAction("pop"))
    dispatch(addMainSearchAction("hiphop"))
  }, []);

  const mainSearchResults = useSelector((state) => state.mainSearchResults)
  const userSearchResults = useSelector(
    (state) => state.userSearchResults.content
  );

  return (
  <>
    {userSearchResults.length > 0 && (
      <GenresAlbums title='Search results' trackStore='userSearchResults' content='content' />
    )}
    {mainSearchResults && (
      Object.keys(mainSearchResults).map((genresTrack) => (
        <GenresAlbums key={genresTrack} title={genresTrack} trackStore='mainSearchResults' content={genresTrack} />
      ))
    )}
  </>
  )
};

export default Homepage
