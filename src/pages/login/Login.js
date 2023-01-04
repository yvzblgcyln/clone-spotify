import "./login.scss";
import logoDark from "../../assets/logoDark.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import warning from "../../assets/warning.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

function Login() {
  const { login } = useContext(UserContext);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(input));
    login();
  };

  return (
    <div className="login">
      <div className="logo">
        <div className="logoContainer">
          <img src={logoDark} alt="" />
          <h1>
            Spotify
            <sup>&reg;</sup>
          </h1>
        </div>
      </div>
      <div className="contWith">
        <p>Login with</p>
        <div className="card">
          <img src={facebook} alt="" />
          <span className="contWithName">FACEBOOK</span>
        </div>
        <div className="card">
          <img src={apple} alt="" />
          <span className="contWithName">APPLE</span>
        </div>
        <div className="card">
          <img src={google} alt="" />
          <span className="contWithName">GOOGLE</span>
        </div>
      </div>
      <fieldset>
        <legend>OR</legend>
      </fieldset>
      <form>
        <div className="inputContainer">
          <div className="text">E-mail or username</div>
          <input className="input" placeholder="E-mail or username" onChange={handleChange} required />
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter e-mail or username.</div>
          </div>
        </div>
        <div className="inputContainer">
          <div className="text">Password</div>
          <input className="input" placeholder="Password" />
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter password.</div>
          </div>
        </div>
        <a className="forgetPassword" href="#">
          Did you forget your password?
        </a>
        <div className="checkArea">
          <div className="remember">
            <input className="check" type="checkbox" />
            <span className="remember">Remember me</span>
          </div>
          <Link to="/" className="loginBtn" onClick={handleClick}>
            Login
          </Link>
        </div>
      </form>
      <div className="registerContainer">
        <div className="registerText">Don't you have account</div>
        <Link to="/register" className="registerBtn">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
