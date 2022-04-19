export interface Movie {
  id: string;
  name?: string;
  title?: string;
  original_name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
}

export interface TrailerOpts {
  height: string;
  width: string;
  playerVars: {
    autoplay: number;
  };
}
