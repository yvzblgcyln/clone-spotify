import "./popup.scss";
import { Link } from "react-router-dom";
function PopUp({ clicked, click }) {
  return (
    <div className="popup" style={{ display: click ? "block" : "none" }}>
      <div className="bubble">
        <div className="triangular"></div>
        <div className="text">
          <h4>Enjoy</h4>
          <p>Register for easy access</p>
        </div>
        <div className="buttons">
          <Link onClick={clicked}>Not now</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
