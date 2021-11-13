import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import netflixLogo from "../images/logo.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`${classes.nav} ${show && classes.navBackground}`}>
      <div className={classes.container}>
        <img
          className={classes.nav__logo}
          src={netflixLogo}
          alt="Netflix Logo"
        ></img>
        <img
          className={classes.nav__avatar}
          alt="Your Avatar Netflix"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        ></img>
      </div>
    </nav>
  );
};

export default Nav;
