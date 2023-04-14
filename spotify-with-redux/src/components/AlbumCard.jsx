import { useEffect, useState } from "react";

const AlbumCard = () => {
  const [albums, setAlbums] = useState({});
  const fetchAlbums = async () => {
    
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/75621062"
      );
      if (response.ok) {
        const data = await response.json();
        setAlbums(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAlbums();
  }, [])

    return (
        <div class="col-sm-auto col-md-auto text-center mb-5">
            <a href="/album_page.html?id=${songInfo.album.id}">
              <img class="img-fluid" src={
                albums.cover_medium // creating the album image anchor
              } alt="1" />
            </a>
            <p>
              <a href="#">
                Track: "{
                  (albums.title.length < 16)
                    ? `${albums.title}`
                    : `${albums.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </a><br/>
              <a href="/album_page.html?id=${songInfo.album.id}">
                Album: "{
                  (albums.tracks.data[0].album.title.length < 16)
                    ? `${albums.tracks.data[0].album.title}`
                    : `${albums.tracks.data[0].album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </a>
            </p>
          </div>
    )
}

export default AlbumCard