import "./navbar.scss";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import down from "../../assets/down.png";
import searchDark from "../../assets/searchDark.png";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import PageContext from "../../context/PageContext";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const { page } = useContext(PageContext);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [open, setOpen] = useState(false);
  const swap = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")) || null);
    setOpen(false);
  }, [page]);

  return (
    <div className="navbar">
      <div className="left">
        <div className="arrows">
          <img src={left} alt="" title="Go back" onClick={() => navigate(-1)} />
          <img src={right} alt="" title="Go forward" onClick={() => navigate(+1)} />
        </div>
        {page === "search" && (
          <div className="search">
            <img src={searchDark} alt="" />
            <input placeholder="What do you want to listen?" />
          </div>
        )}
        {page === "playlists" && (
          <div className="library">
            <button>Playlist</button>
            <button>Podcast</button>
            <button>Artists</button>
            <button>Albums</button>
          </div>
        )}
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user" onClick={swap}>
            <img
              src="https://images.pexels.com/photos/14845056/pexels-photo-14845056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            ></img>
            <span className="dropdown">
              <div className="username">
                {currentUser}
                <span>
                  <img src={down}></img>
                </span>
              </div>
              <div className="dropdown-content" style={{ display: open ? "block" : "none" }}>
                <a href="#">Account</a>
                <a href="#">Profile</a>
                <a href="#">Support</a>
                <a href="#">Download</a>
                <a href="#">Settings</a>
                <a href="/" onClick={logout}>
                  Log out
                </a>
              </div>
            </span>
          </div>
        ) : (
          <div className="info">
            <a href="#">Premium</a>
            <a href="#">Support</a>
            <a href="#">Download</a>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
