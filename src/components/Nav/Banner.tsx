import { useState, useEffect } from "react";

import "./Banner.scss";
import { IMG_URL } from "../../config";
import { API } from "../../helpers/axios";
import { requests } from "../../helpers/request";
import { truncate } from "../../helpers/string-utils";
import { Movie } from "../../types/Movie";

export const Banner = () => {
  const [movie, setMovie] = useState<Movie>({} as Movie);

  useEffect(() => {
    (async () => {
      const request = await API.get(requests.feachNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ] as Movie
      );
      return request;
    })();
  }, []);

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie.backdrop_path
          ? `url("${IMG_URL}${movie.backdrop_path}")`
          : "",
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>
        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
};
