import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../api/requests";
import classes from "./Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(requests.NetflixOriginal);
      const movies = data.results;
      let randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className={classes.banner}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`,
      }}
    >
      <div className={classes.banner__contents}>
        <h1 className={classes.banner__title}>{movie.name}</h1>
        <h2 className={classes.banner__description}>{movie.overview}</h2>
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>
        </div>
      </div>
      {/* <div className={classes["banner--fadebottom"]}></div> */}
    </header>
  );
};

export default Banner;
