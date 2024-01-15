import { Link } from "react-router-dom";
import "../styles/sass/navbar.sass/navbar.scss";
import logo from "../assets/logo.svg";
import NavMenu from '../assets/NavMenu.png'
import { useState } from "react";
import Menu from "./menu";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="navbar__wrapper">
      <div className="container navbar_container">
        <button className="navbar_menu_icon" onClick={() =>  setmenuIsOpen(!menuIsOpen)}><img src={NavMenu} alt="nav menu icon" /></button>
        <Link to={"/"} className="navbar_logo">
          <img src={logo} alt="logo" className="navbar_logo_img" />
        </Link>
        <nav className="navbar">
          <ul className="navbar_ul">
            <li className="navbar_list_item">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="navbar_list_item">
              <Link to={"/properties"}>Properties</Link>
            </li>
            <li className="navbar_list_item">
              <Link to={"/contacts"}>Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar_buttons">
          <button className="navbar_login_btn">Login</button>
          <button className="navbar_register_btn" onClick={() => navigate('/register')}>Register</button>
        </div>
        {menuIsOpen && <Menu setmenuIsOpen={setmenuIsOpen}/>}
      </div>
    </div>
  );
};

export default Navbar;
