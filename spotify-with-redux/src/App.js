import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";

function App() {
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
