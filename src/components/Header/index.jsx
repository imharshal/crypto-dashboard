import React, { useState, ChangeEventHandler } from "react";
import { ButtonFilled } from "../Utilities/Buttons";
import DrawerMenu from "./Drawer";
import "./styles.css";
function Header() {
  const [darkTheme, setDarkTheme] = useState(true);
  // 1
  const setDark = () => {
    // 2
    localStorage.setItem("theme", "dark");

    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (darkTheme) {
      setDark();
    } else {
      setLight();
    }
    setDarkTheme(!darkTheme);
  };
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </a>
      <button onClick={() => toggleTheme()}>Dark</button>
      <div className="links-flex">
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/compare">
          <p className="links">Compare</p>
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
