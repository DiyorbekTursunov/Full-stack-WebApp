import React from "react";
import { Link, useNavigate } from "react-router-dom";
import closeIcon from "../assets/close.svg";
const Menu = ({ setmenuIsOpen }) => {
  const navigate = useNavigate()

  return (
    <div className="menu_wrapper">
      <button className="close_btn" onClick={() => setmenuIsOpen(false)}>
        <img src={closeIcon} alt="close icon" />
      </button>
      <div className="menu">
        <ul className="menu_ul">
          <li className="menu_li">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="menu_li">
            <Link to={"/properties"}>Properties</Link>
          </li>
          <li className="menu_li">
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
        <div className="menu_buttons">
          <button className="menu_login_btn"  onClick={() => {navigate('/login') ; setmenuIsOpen(false)}}>Login</button>
          <button className="menu_register_btn"  onClick={() => {navigate('/register') ; setmenuIsOpen(false)}}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
