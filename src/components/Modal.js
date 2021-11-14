import React, { useContext } from "react";
import classes from "./Modal.module.css";
import ModalDetailContext from "../store/ModalDetailContext";
import Backdrop from "../UI/Backdrop";

const Modal = () => {
  const ctx = useContext(ModalDetailContext);

  const { name, image, overview, rating, relaseDate } = ctx.movieDetails;

  return (
    <>
      <Backdrop></Backdrop>
      <div
        className={classes.modal}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}`,
        }}
      >
        <div className={classes.modal_container}>
          <h2 className={classes.modal_title}>{name}</h2>
          <div className={classes.modal_info}>
            <span className={classes.modal_rating}>Rating: {rating * 10}%</span>
            <span className={classes.modal_realseDate}>
              Release Date: {relaseDate}
            </span>
          </div>
          <p className={classes.modal_overview}>{overview}</p>

          <div className={classes.modal_buttons}>
            <button className={classes.modal_button}>
              <i className="fas fa-play"></i>
              Play
            </button>
            <button className={classes.modal_button}>
              <i className="fas fa-plus"></i>
              My List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
