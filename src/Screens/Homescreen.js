import React from "react";
import Row from "../Row";
import Navbar from "../Navbar";
import Banner from "../Banner";
import request from "../fetchRequest";
import classses from "./Homescreen.module.css";
const Homescreen = () => {
  return (
    <div className={classses.Homescreen}>
      <Navbar />
      <Banner fetchUrl={request.fetchNetflixOriginals} />

      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending now" fetchUrl={request.fetchTrending} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romantic" fetchUrl={request.fetchRomanticMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
    </div>
  );
};

export default Homescreen;
