import React, { useContext } from "react";
import ModalDetailContext from "../store/ModalDetailContext";
import classes from "./Backdrop.module.css";

const Backdrop = ({ children }) => {
  const ctx = useContext(ModalDetailContext);

  return (
    <div
      className={classes.backdrop}
      onClick={() => ctx.closeModalHandler()}
    ></div>
  );
};

export default Backdrop;
