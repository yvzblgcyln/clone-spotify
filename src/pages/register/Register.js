import "./register.scss";
import logoDark from "../../assets/logoDark.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import warning from "../../assets/warning.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Register() {
  const { login } = useContext(UserContext);
  return (
    <div className="register">
      <div className="logo">
        <div className="logoContainer">
          <img className="logoSpotify" src={logoDark} alt="" />
          <h1>
            Spotify
            <sup>&reg;</sup>
          </h1>
        </div>
      </div>
      <div className="contWith">
        <p>Sign up for free to start listening.</p>
        <div className="card">
          <img src={facebook} alt="" />
          <span className="contWithName">FACEBOOK</span>
        </div>
        <div className="card">
          <img src={google} alt="" />
          <span className="contWithName">GOOGLE</span>
        </div>
      </div>
      <fieldset>
        <legend>OR</legend>
        <div>Register with e-mail</div>
      </fieldset>
      <form>
        <div className="inputContainer">
          <div className="text">E-mail</div>
          <input className="input" placeholder="E-mail" />
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter e-mail.</div>
          </div>
        </div>
        <div className="inputContainer">
          <div className="text"> Confirm your e-mail</div>
          <input className="input" placeholder="Rewrite e-mail" />
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter e-mail.</div>
          </div>
        </div>
        <div className="inputContainer">
          <div className="text">Create password</div>
          <input className="input" placeholder="Create password" />
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter password.</div>
          </div>
        </div>
        <div className="inputContainer">
          <div className="text">What is your name?</div>
          <input className="input" placeholder="Enter profile name" />
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter your name.</div>
          </div>
        </div>
        <div className="inputContainer">
          <div className="text">What is your birthday?</div>
          <div className="birthday">
            <div className="birthdayInput">
              <div className="text">Day</div>
              <input className="input" placeholder="DD" />
            </div>
            <div className="birthdayInput">
              <div className="text">Month</div>
              <input className="input" placeholder="Month" />
            </div>
            <div className="birthdayInput">
              <div className="text">Year</div>
              <input className="input" placeholder="YYYY" />
            </div>
          </div>
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter day.</div>
          </div>
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter month.</div>
          </div>
          <div className="warningContainer">
            <img className="warning" src={warning} alt="" />
            <div className="error">Please enter year.</div>
          </div>
        </div>
        <div className="inputContainer">
          <div className="text">What is your gender?</div>
          <div className="genderContainer">
            <div className="gender">
              <input className="radio" type="radio" />
              <div className="genderText">Male</div>
            </div>
            <div className="gender">
              <input className="radio" type="radio" />
              <div className="genderText">Male</div>
            </div>
            <div className="gender">
              <input className="radio" type="radio" />
              <div className="genderText">Male</div>
            </div>
            <div className="gender">
              <input className="radio" type="radio" />
              <div className="genderText">Others</div>
            </div>
          </div>
        </div>
        <div className="check">
          <input type="checkbox" />
          <span>I want to receive offers </span>
        </div>
        <div className="check">
          <input type="checkbox" />
          <span>
            Share my registration data with Spotify's content providers for marketing purposes. Note that your data may
            be transferred to a country outside of the EEA as outlined in our privacy policy.
          </span>
        </div>
        <div className="buttonContainer">
          <Link to={"/"} className="loginBtn">
            Register
          </Link>
        </div>
      </form>
      <div className="registerContainer">
        <div className="registerText">Do you have account</div>
        <Link to={"/login"} className="registerBtn">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
