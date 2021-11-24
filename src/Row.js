import React, { useEffect, useState } from "react";
import axios from "./axios";
import classes from "./row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [props.fetchUrl]);
  const rowPoster = [classes.Row_poster];
  const rowTitle = [classes.Row_title];
  if (props.isLarge) {
    rowPoster.push(classes.Row_posterLarge);
    rowTitle.push(classes.Row_titlelarge);
  }

  return (
    <div className={classes.Row}>
      <p className={rowTitle.join(" ")}>{props.title}</p>
      <div className={classes.Row_posters}>
        {movies.map((movie) => {
          return (
            <img
              className={rowPoster.join(" ")}
              key={movie.id}
              src={`${base_url}${movie.poster_path}`}
              alt="movie"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
