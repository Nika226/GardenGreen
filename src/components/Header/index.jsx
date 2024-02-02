import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/images/logo.png";
import cart_icon from "../../assets/images/cart_icon.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="hLogo">
        <img src={logo} alt="" />
        <p>Garden Products</p>
      </div>
      <ul className="menu">
        <li>Main page</li>
        <li>Categories</li>
        <li>All products</li>
        <li>All sales</li>
      </ul>
      <div className="navLoginCart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  );
};

export default Header;
