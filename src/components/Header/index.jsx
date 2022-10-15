import React from "react";
import { ButtonFilled } from "../Utilities/Buttons";
import DrawerMenu from "./Drawer";
import "./styles.css";
function Header() {
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </a>
      <div className="links-flex">
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/search">
          <p className="links">Search</p>
        </a>
        <a href="/about-us">
          <p className="links">About Us</p>
        </a>
        <a href="/dashboard">
          <p className="links">
            <ButtonFilled>Dashboard </ButtonFilled>
          </p>
        </a>
      </div>
      <div className="menu-div">
        <DrawerMenu />
      </div>
    </div>
  );
}

export default Header;
