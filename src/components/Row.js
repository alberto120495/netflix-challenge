import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          const movieName = movie.title || movie.name || movie.original_name;
          return (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path) ? (
            <span
              key={movie.id}
              className={`image__container ${
                isLargeRow && "largeImage__container"
              }`}
            >
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <p className="movie_name">{movieName}</p>
            </span>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Row;
