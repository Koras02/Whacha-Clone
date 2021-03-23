/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import axios from "../data/axios";
import "./style/Row.scss";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import YouTube from "react-youtube";
import { YouTubeForm } from "./style/RowStyle";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, title2, name, desciprtion, title3 }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "400px",
    width: "40%",
    padding: "30px",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerUrl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
      setTrailerUrl(trailerUrl.data.results[0]?.key);
    }
  };

  return (
    <div className="row">
      <h2 className="rowH1">{title}</h2>
      <div className="row__posters">
        <div className="button_left">
          <AiOutlineCaretLeft color="#fff" className="Left" />
        </div>
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
        <div className="button_right">
          <AiOutlineCaretRight color="#fff" className="Right" />
        </div>
      </div>
      {trailerUrl && (
        <>
          <YouTubeForm>
            <YouTube videoId={trailerUrl} opts={opts} className="Youtube" />
            <h1 className="MovieH1" alt={movies.name}>
              {movies.name}
            </h1>
            <h1 className="MovieH1">{title}</h1>
            <p className="MovieP">{title3}</p>
          </YouTubeForm>
        </>
      )}
    </div>
  );
}

export default Row;
