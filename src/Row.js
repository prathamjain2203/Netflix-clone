import React, { useEffect, useState } from "react";
import axios from "./axios";
import fetchTrending from "./fetchRequest";
import classes from "./row.modules.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchTrending).then((res) => {
      setMovies(res.data.results);
      console.log(res.data);
    });
  }, []);

  return (
    <div className={classes.Row}>
      <p className={classes.Row_title}>{props.title}</p>
      {movies.map((movie) => {
        return (
          <img
            className={classes.Image}
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt="movie"
          />
        );
      })}
    </div>
  );
};

export default Row;
