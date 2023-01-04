import "./play.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAudio } from "../../hooks/play";
import heart from "../../assets/heart.png";
import next from "../../assets/next.png";
import shuffle from "../../assets/shuffle.png";
import replay from "../../assets/replay.png";
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";
import volume from "../../assets/volume.png";
import devices from "../../assets/devices.png";
import queue from "../../assets/queue.png";
function Play() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const url = "https://samplesongs.netlify.app/Faded.mp3";
  const [playing, toggle] = useAudio(url);
  return (
    <div className="play">
      {!currentUser && (
        <div className="preview">
          <div className="texts">
            <span>SPOTIFY PREVİEW</span>
            <span>Register for limitless access to music and postcasts </span>
          </div>
          <Link to="/register">Register Free</Link>
        </div>
      )}
      {currentUser && (
        <div className="player">
          <div className="info">
            <img
              src="https://images.pexels.com/photos/10288854/pexels-photo-10288854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="cover"
            />
            <div className="infos">
              <div className="title">title 1</div>
              <div className="artist">artist1 </div>
            </div>
            <img src={heart}></img>
          </div>
          <div className="playCont">
            <div className="top">
              <img src={shuffle} alt="" />
              <img src={next} alt="" />
              <button className="playBtn" onClick={toggle}>
                {playing ? <img src={play} alt="" /> : <img src={pause} alt="" />}
              </button>
              <img src={next} alt="" />
              <img src={replay} alt="" />
            </div>
            <div className="bottom">
              <span>0:01</span>
              <input type="range" min="0" max="50" />
              <span>4:28</span>
            </div>
          </div>
          <div className="soundCont">
            <img src={queue} alt="" />
            <img src={devices} alt="" />
            <img src={volume} alt="" />
            <input type="range" min="0" max="50" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Play;
