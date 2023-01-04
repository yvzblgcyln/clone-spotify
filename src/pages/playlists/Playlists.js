import "./playlists.scss";
import { useContext, useEffect, useState } from "react";
import PageContext from "../../context/PageContext";
import { useNavigate } from "react-router-dom";
import playBtn from "../../assets/playButtonGreen.png";
import { songs } from "../../data/data";
import PlaylistContext from "../../context/PlaylistContext";
function Playlists() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const { setPage } = useContext(PageContext);
  const page = window.location.href.split("/");
  useEffect(() => {
    setPage(page[page.length - 1]);
  }, [page]);
  const navigate = useNavigate();
  const { playlists } = useContext(PlaylistContext);
  const [url, setUrl] = useState("");
  const handleClick = (i) => {
    setUrl(`/playlist/${i}`);
  };
  useEffect(() => {
    navigate(url);
  }, [url]);
  return (
    <div className="playlists">
      <h3>Playlists</h3>
      <div className="playlistsContainer">
        <div className="liked" onClick={() => navigate("/collection/tracks")}>
          <div className="infoContainer">
            <span className="artist">artist1 </span>
            <span className="music">music name </span>
            <span className="dot"> . </span>
            <span className="artist">artist1 </span>
            <span className="music">music name </span>
            <span className="dot"> . </span>
            <span className="artist">artist1 </span>
            <span className="music">music name </span>
            <span className="dot"> . </span> <span className="artist">artist1 </span>
            <span className="music">music name </span>
            <span className="dot"> . </span> <span className="artist">artist1 </span>
            <span className="music">music name </span>
            <span className="dot"> . </span>
          </div>
          <h1>Liked Songs</h1>
          <div className="counter">36 liked songs</div>
          <img src={playBtn} alt="" className="playBtn" />
        </div>
        {playlists.length &&
          playlists.map((playlist, i) => (
            <div className="coversArea" key={i}>
              <div
                className="covers"
                onClick={() => {
                  handleClick(i);
                }}
              >
                <img src={songs[0].cover} alt="" />
                <img src={songs[1].cover} alt="" />
                <img src={songs[2].cover} alt="" />
                <img src={songs[3].cover} alt="" />
                <img src={playBtn} alt="" className="playBtn" />
              </div>
              <h4>{playlist}</h4>
              <div className="user">{currentUser}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Playlists;
