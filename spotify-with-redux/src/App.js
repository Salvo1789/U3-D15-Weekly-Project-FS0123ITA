import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { addMainSearchAction } from './redux/action'
import Homepage from "./components/Homepage";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addMainSearchAction('rock'))
    dispatch(addMainSearchAction('pop'))
    dispatch(addMainSearchAction('hiphop'))
  }, [])

  return (
    <BrowserRouter>
    <SiteNav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/artist/:id' element={<ArtistPage />} />
        <Route path='/album/:id' element={<AlbumPage />} />
      </Routes>
    <SiteFooter />
    </BrowserRouter>
  );
}

export default App;
