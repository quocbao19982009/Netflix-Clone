import React, { useState, useEffect } from "react";
import Rows from "./Rows";
import requests from "../api/requests";
import axios from "axios";

const MainContent = () => {
  const [moviesNetflix, setMoviesNetflix] = useState([]);
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [moviesAction, setMoviesAction] = useState([]);
  const [moviesComedy, setMoviesComedy] = useState([]);
  const [moviesHorror, setMoviesHorror] = useState([]);
  const [moviesRomance, setMoviesRomance] = useState([]);

  const fetchMovie = async (movieUrl, applyData) => {
    try {
      const { data } = await axios.get(movieUrl);
      const movies = await data.results;
      applyData(movies);
    } catch (error) {
      throw new Error(`Cannot fetch moive from ${movieUrl}`);
    }
  };

  useEffect(() => {
    fetchMovie(requests.NetflixOriginal, setMoviesNetflix);
    fetchMovie(requests.trending, setMoviesTrending);
    fetchMovie(requests.topRated, setMoviesTopRated);
    fetchMovie(requests.action, setMoviesAction);
    fetchMovie(requests.comedy, setMoviesComedy);
    fetchMovie(requests.horror, setMoviesHorror);
    fetchMovie(requests.romance, setMoviesRomance);
  }, []);

  return (
    <>
      <main>
        <Rows
          movies={moviesNetflix}
          title="NEXTFLIX ORIGNALS"
          isLarge={true}
        ></Rows>
        <Rows movies={moviesTrending} title="TRENDING"></Rows>
        <Rows movies={moviesTopRated} title="TOP RATED"></Rows>
        <Rows movies={moviesAction} title="ACTIONS"></Rows>
        <Rows movies={moviesComedy} title="COMEDY"></Rows>
        <Rows movies={moviesHorror} title="HORROR"></Rows>
        <Rows movies={moviesRomance} title="ROMANCE"></Rows>
      </main>
    </>
  );
};

export default MainContent;
