import classes from "./Rows.module.css";
import React, { useContext } from "react";
import ModalDetailContext from "../store/ModalDetailContext";
import ScrollContainer from "react-indiana-drag-scroll";

const Rows = ({ title, movies, isLarge }) => {
  const ctx = useContext(ModalDetailContext);
  const openMovieDetail = (movie) => {
    ctx.openModalHandler();
    console.log(movie);
    ctx.setMovieDetails({
      name: movie.name || movie.title || movie.original_title,
      overview: movie.overview,
      rating: movie.vote_average,
      relaseDate: movie.release_date || movie.first_air_date,
      image: movie.backdrop_path || movie.poster_path,
    });
  };
  const baseImgUrl = "https://image.tmdb.org/t/p/original/";

  const loadedMovies = movies.filter(
    (movie) => movie.backdrop_path && movie.poster_path
  );

  const posterClass = `${classes.row__poster} ${
    isLarge && classes.row__posterLarge
  }`;

  return (
    <div className={classes.row}>
      <h2 className={classes.row_title}>{title}</h2>
      <ScrollContainer className={classes.row__posters}>
        {loadedMovies.map((movie) => (
          <img
            className={posterClass}
            key={movie.id}
            src={`${baseImgUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => openMovieDetail(movie)}
          ></img>
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Rows;
