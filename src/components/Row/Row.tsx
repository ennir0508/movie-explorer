import { useState, useEffect } from "react";

import "./Row.scss";
import { API_KEY, IMG_URL } from "../../config";
import { API } from "../../helpers/axios";
import { isEmpty } from "../../helpers/string-utils";
import { Movie } from "../../types/Movie";

import { Trailer } from "./Trailer";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLarge?: boolean;
}

export const Row = ({ title, fetchUrl, isLarge }: RowProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  /**
   * `fetchUrl` 更新時処理
   */
  useEffect(() => {
    (async () => {
      const request = await API.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    })();
  }, [fetchUrl]);

  /**
   * 映画サムネイルクリック時処理
   * @param { Movie } movie  映画
   */
  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const res = await API.get(`/movie/${movie.id}/videos?api_key=${API_KEY}`);
      setTrailerUrl(res.data.results[0]?.key);
    }
  };

  if (movies?.length === 0) {
    return <div />;
  }

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie) => {
          if (isLarge && isEmpty(movie.poster_path)) {
            return <div key={movie.id} />;
          } else if (!isLarge && isEmpty(movie.backdrop_path)) {
            return <div key={movie.id} />;
          }
          return (
            <img
              key={movie.id}
              className={`Row-poster ${isLarge && "Row-poster-large"}`}
              src={`${IMG_URL}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
              onClick={() => {
                handleClick(movie);
              }}
              aria-hidden="true"
            />
          );
        })}
      </div>
      <div className="Row-trailer">
        <Trailer videoId={trailerUrl} />
      </div>
    </div>
  );
};
