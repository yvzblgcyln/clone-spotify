import "./tracks.scss";
import play from "../../assets/playButtonGreen.png";
import { songs } from "../../data/data";
import clock from "../../assets/clock.png";
import heart from "../../assets/heart.png";
import dots from "../../assets/dots.png";
import hearth from "../../assets/hearth.png";
import { useContext, useEffect } from "react";
import PageContext from "../../context/PageContext";

function Tracks() {
  const { setPage } = useContext(PageContext);
  const page = window.location.href.split("/");
  useEffect(() => {
    setPage(page[page.length - 1]);
  }, [page]);
  return (
    <div className="tracks">
      <div className="cover">
        <div className="coverArea">
          <img src={hearth} alt="" />
        </div>
        <div className="textArea">
          <h4>PLAYLIST</h4>
          <h1>Liked Songs</h1>
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
          {songs.map((song) => (
            <tbody key={song.id}>
              <tr>
                <td className="no">{song.id}</td>
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

export default Tracks;
