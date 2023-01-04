import "./footer.scss";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="topLeft">
          <div className="company">
            <div>Company</div>
            <a href="#">About</a>
            <a href="#">Jobs</a>
            <a href="#">For the Record</a>
          </div>
          <div className="communities">
            <div>Communities</div>
            <a href="#">For Artists</a>
            <a href="#">Developers</a>
            <a href="#">Advertising</a>
            <a href="#">Investors</a>
            <a href="#">Vendors</a>
          </div>
          <div className="links">
            <div>Useful links</div>
            <a href="#">Support</a>
            <a href="#">For Mobile App</a>
          </div>
        </div>
        <div className="topRight">
          <img src={facebook} alt=""></img>
          <img src={google} alt=""></img>
          <img src={apple} alt=""></img>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomLeft">
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About Ads</a>
        </div>
        <div className="bottomRight">&copy; 2022 Spotify AB</div>
      </div>
    </div>
  );
}

export default Footer;
