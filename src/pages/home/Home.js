import play from "./../../assets/playButtonGreen.png";
import "./home.scss";
import { title, data } from "../../data/data";
import { useContext, useEffect } from "react";
import PageContext from "../../context/PageContext";

function Home() {
  const { setPage } = useContext(PageContext);
  const page = window.location.href.split("/");
  useEffect(() => {
    setPage(page[page.length - 1]);
  }, [page]);

  return (
    <div className="home">
      {title.map((songs, i) => (
        <div className="cardsContainer" key={i}>
          <a href="#">{songs.title}</a>
          <div className="cards">
            {data.map((song, j) => (
              <div className="card" key={j}>
                <div className="imgCont">
                  <img className="cover" src={song.cover} alt=""></img>
                  <img className="playBtn" src={play} alt=""></img>
                </div>
                <div className="title">{song.title}</div>
                <div className="artists">{song.artist}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
