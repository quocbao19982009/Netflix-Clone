import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div>
        Made by Bao Nguyen with{" "}
        <i style={{ color: "red" }} className="fas fa-heart"></i> {year}
      </div>
    </footer>
  );
};

export default Footer;
