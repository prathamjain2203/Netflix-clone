import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from "./axios";
import classes from "./Banner.module.css";

class Banner extends Component {
  state = {
    movie: [],
  };

  componentDidMount() {
    axios.get(this.props.fetchUrl).then((res) => {
      const randomMovie =
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ];
      this.setState({ movie: randomMovie });
    });
  }

  render() {
    return (
      <header
        className={classes.Banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${this.state.movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className={classes.Banner_content}>
          <h1 className={classes.Banner_title}>
            {this.state.movie?.title ||
              this.state.movie?.name ||
              this.state.movie?.original_name}
          </h1>
          <div className={classes.Banner_buttons}>
            <button className={classes.Banner_button}>Play</button>
            <button className={classes.Banner_button}>My List</button>
          </div>
          <h1 className={classes.Banner_Overview}>
            {this.state.movie?.overview}
          </h1>
        </div>
      </header>
    );
  }
}
export default Banner;
