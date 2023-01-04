import "./leftbar.scss";
import logo from "../../assets/logo.png";
import hearth from "../../assets/hearth.png";
import home from "../../assets/home.png";
import library from "../../assets/library.png";
import add from "../../assets/add.png";
import search from "../../assets/search.png";
import PageContext from "../../context/PageContext";
import PlaylistContext from "../../context/PlaylistContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PopUp from "../popUp/PopUp";

function LeftBar() {
  const { page } = useContext(PageContext);
  const { playlists, setPlaylist } = useContext(PlaylistContext);
  const [click, setClick] = useState("");
  const clicked = (clickedArea) => {
    setClick(`${clickedArea}`);
  };
  const { id } = useParams();

  const addPlaylist = () => {
    setPlaylist([...playlists, "new"]);
  };
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    setClick("");
  }, [page]);

  return (
    <div className="leftBar" style={{ height: "calc(100vh - 90px)" }}>
      <Link to="">
        <div className="logo">
          <div className="logoContainer">
            <img src={logo} alt="" />
          </div>
          <h2>
            Spotify
            <sup>
              <span>&reg;</span>
            </sup>
          </h2>
        </div>
      </Link>
      <div className="menu">
        <div className="menuContainer" style={{ opacity: page === "" && 1 }}>
          <img src={home} alt="" />
          <Link to="/" style={{ color: page === "" && "white" }}>
            Home
          </Link>
        </div>
        <div className="menuContainer" style={{ opacity: page === "search" && 1 }}>
          <img src={search} alt="" />
          <Link to="/search">Search</Link>
        </div>
        <div
          className="menuContainer"
          style={{ opacity: currentUser ? page === "playlists" && 1 : 1, color: !currentUser && "grey" }}
        >
          <img src={library} alt="" />
          {currentUser && <Link to="/collection/playlists">Your Library</Link>}
          {!currentUser && (
            <>
              <Link onClick={() => clicked("library")} style={{ color: "white", opacity: 0.7 }}>
                Your Library
              </Link>
              {click === "library" && <PopUp clicked={clicked} click={click} />}
            </>
          )}
        </div>
        <div className="menuContainer" style={{ opacity: !currentUser && 1 }}>
          <img src={add} alt="" />

          {currentUser && <Link onClick={addPlaylist}>Create Playlist</Link>}
          {!currentUser && (
            <>
              <Link onClick={() => clicked("playlist")} style={{ color: "white", opacity: 0.7 }}>
                Create Playlist
              </Link>
              {click === "playlist" && <PopUp clicked={clicked} click={click} />}
            </>
          )}
        </div>
        <div className="menuContainer" style={{ opacity: currentUser ? page === "tracks" && 1 : 1 }}>
          <div className="hearthContainer">
            <img src={hearth} alt="" />
          </div>

          {currentUser && <Link to="/collection/tracks">Liked Songs</Link>}
          {!currentUser && (
            <>
              <Link onClick={() => clicked("likedSongs")} style={{ color: "white", opacity: 0.7 }}>
                Liked Songs
              </Link>
              {click === "likedSongs" && <PopUp clicked={clicked} click={click} />}
            </>
          )}
        </div>
      </div>
      {currentUser && (
        <div className="playlists">
          {playlists &&
            playlists.map((playlist, i) => (
              <div key={i}>
                <Link to={`playlist/${i}`} className="list" style={{ opacity: Number(id) === i && 1 }}>
                  {playlist}
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default LeftBar;
