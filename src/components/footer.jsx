import "../styles/sass/footer.sass/footer.scss";
import { Link } from "react-router-dom";
import pinLocation from "../assets/pin.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import logoIcon from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="container">
        <div className="footer">
          <div className="footer_uls">
            <ul className="footer_ul">
              <li className="footer_li">
                <span>Contact Us</span>
              </li>
              <li className="footer_li">
                <img src={pinLocation} alt="pinLocation" />
                <Link to={"https://yandex.uz/maps/-/CDaKeLPE"} target="_blank">
                  122 Yunusobod Street, Toshkent , Uzbekistan.
                </Link>
              </li>
              <li className="footer_li">
                <img src={phoneIcon} alt="phoneIcon" />
                <Link to={"/"} target="_blank">
                  123 456 7890
                </Link>
              </li>
              <li className="footer_li">
                <img src={emailIcon} alt="emailIcon" />
                <Link to={"/"} target="_blank">
                  support@houzing.com
                </Link>
              </li>
              <div className="footer_socials">
                <Link to={"/"} target="_blank" className="footer_social_media">
                  {/* <img src={faceBookIcon} alt="faceBookIcon" /> */}
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to={"/"} target="_blank" className="footer_social_media">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
                <Link to={"/"} target="_blank" className="footer_social_media">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link to={"/"} target="_blank" className="footer_social_media">
                  <i class="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </ul>
            <ul className="footer_ul">
              <li className="footer_li">
                <span>Discover</span>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Chicago
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Los Angeles
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Miami
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  New York
                </Link>
              </li>
            </ul>
            <ul className="footer_ul">
              <li className="footer_li">
                <span>Lists by Category</span>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Apartments
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Condos
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Houses
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Offices
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Retail
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Villas
                </Link>
              </li>
            </ul>
            <ul className="footer_ul">
              <li className="footer_li">
                <span>Lists by Category</span>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Chicago
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Los Angeles
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  Miami
                </Link>
              </li>
              <li className="footer_li">
                <Link to={"/"} target="_blank">
                  New York
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container footer_bottom">
        <Link className="footer_bottom_logo"><img src={logoIcon} alt="site logo" /></Link>
        <div className="footer_bottom_titles">
          <span className="footer_bottom_title">Copyright © 2021 CreativeLayers. All Right Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
