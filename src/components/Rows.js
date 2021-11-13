import axios from "axios";
import classes from "./Rows.module.css";
import React, { useEffect, useState } from "react";

const Rows = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(fetchUrl);
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        throw new Error("Cannot fetch movie" || error.message);
      }
    };
    fetchMovies();
    // Will make this a different function latter or make it into redux
  }, [fetchUrl]);

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className={classes.row}>
      <h2>{title}</h2>

      <div className={classes.row__posters}>
        {movies.map((movie) => (
          <img
            className={`${classes.row__poster} ${
              isLarge && classes.row__posterLarge
            }`}
            key={movie.id}
            src={`${baseImgUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Rows;
