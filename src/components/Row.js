/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import axios from "../data/axios";
import "./style/Row.scss";
import Youtube from "react-youtube";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",

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
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            )
        )}
        <div className="button_right">
          <AiOutlineCaretRight color="#fff" className="Right" />
        </div>
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
