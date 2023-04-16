import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TrackHover from "./TrackHover";

const AlbumPage = () => {
  const [albumData, setAlbumData] = useState(null);

  const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  const params = useParams();

  useEffect(() => {
    const fetchAlbumData = async (url) => {
      try {
        const resp = await fetch(url);
        if (resp.ok) {
          const data = await Response.json();
          setAlbumData(data);
        } else {
          console.log("Fetching album data error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbumData(`${ALBUM_URL}${params.id}`);
  }, []);

  return (
    <>
      {albumData && (
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img
              src={albumData.cover_medium}
              className="card-img img-fluid"
              alt="Album"
            />
            <div className="mt-4 text-center">
              <p className="album-title">{albumData.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">{albumData.artist.name}</p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {albumData.tracks.data.map((track) => (
                  <TrackHover key={track.id} track={track} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlbumPage;
