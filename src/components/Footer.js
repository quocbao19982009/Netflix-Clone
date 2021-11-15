import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>
        Made by Bao Nguyen with{" "}
        <i style={{ color: "red" }} className="fas fa-heart"></i> {year}
      </p>
    </footer>
  );
};

export default Footer;
