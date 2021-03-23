/* eslint-disable no-undef */
import axios from "../../data/axios";
import React, { useEffect, useState } from "react";
import requests from "../../data/Requests";
import "./Banner.css";
import { BiPlus } from "react-icons/bi";
import { CgMoreVerticalO } from "react-icons/cg";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAnimeSeries);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
       )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner__button">
          <BiPlus className="banner__plus" />
          보고싶어요
        </div>
        <div className="banner__button">
          <CgMoreVerticalO className="banner__plus" />
          자세히 보기
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
