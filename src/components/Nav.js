import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import netflixLogo from "../images/logo.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <nav className={`${classes.nav} ${show && classes.navBackground}`}>
      <div className={classes.container}>
        <div className={classes.nav__rightside}>
          <img
            className={classes.nav__logo}
            src={netflixLogo}
            alt="Netflix Logo"
          ></img>
          <ul className={classes.nav__links}>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>TV Shows</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>Recently Added</a>
            </li>
            <li>
              <a>My List</a>
            </li>
          </ul>
        </div>
        <div className={classes.nav__leftside}>
          <div className={classes.search}>
            <i className={`fas fa-search ${classes.iconSearch}`} />
            <input className={`${classes.searchBox} ${classes.hide}`}></input>
          </div>
          <i className={`fas fa-bell ${classes.iconBell}`} />
          <img
            className={classes.nav__avatar}
            alt="Your Avatar Netflix"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          ></img>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
