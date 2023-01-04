import "./playlist.scss";
import play from "../../assets/playButtonGreen.png";
import clock from "../../assets/clock.png";
import heart from "../../assets/heart.png";
import dots from "../../assets/dots.png";
import { songs } from "../../data/data";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageContext from "../../context/PageContext";
import PlaylistContext from "../../context/PlaylistContext";

function Playlist() {
  const { setPage } = useContext(PageContext);
  const { playlists } = useContext(PlaylistContext);
  const page = window.location.href.split("/");
  useEffect(() => {
    setPage(page[page.length - 1]);
  }, [page]);
  const { id } = useParams();
  return (
    <div className="playlist">
      <div className="cover">
        <div className="coverArea">
          <img src={songs[0].cover} alt="" />
          <img src={songs[1].cover} alt="" />
          <img src={songs[2].cover} alt="" />
          <img src={songs[3].cover} alt="" />
        </div>
        <div className="textArea">
          <h4>PLAYLIST</h4>
          <h1>{playlists[id]}</h1>
          <h4>
            yvzblgcyln <span> . </span> 65 songs, <span>3 hr 45 min</span>
          </h4>
        </div>
      </div>
      <div className="mid">
        <img src={play} alt=""></img>
        <div className="dots" title="more options for playlist">
          ...
        </div>
      </div>
      <div className="songs">
        <table>
          <tbody>
            <tr>
              <td className="no">#</td>
              <td className="title">TITLE</td>
              <td className="album">ALBUM</td>
              <td className="date">DATE ADDED</td>
              <td className="heart"></td>
              <td className="duration">
                <img src={clock} alt=""></img>
              </td>
              <td className="dots"></td>
            </tr>
          </tbody>
          {songs.map((song, i) => (
            <tbody key={i}>
              <tr>
                <td className="no">{i + 1}</td>
                <td className="titleContainer">
                  <img src={song.cover} alt="" />
                  <div className="info">
                    <div>{song.song}</div>
                    <div>{song.artist}</div>
                  </div>
                </td>
                <td className="album">{song.album}</td>
                <td className="dateContainer">
                  <div className="date">{song.date}</div>
                </td>
                <img src={heart} alt="" className="heart" />
                <td className="duration">{song.duration}</td>
                <img src={dots} alt="" className="dots" />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Playlist;
