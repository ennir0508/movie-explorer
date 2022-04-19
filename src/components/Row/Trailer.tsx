import { useEffect } from "react";
import ReactPlayer from "react-player/lazy";

import { isEmpty } from "../../helpers/string-utils";
import { TrailerConfig } from "../../types/Trailer";

interface TrailerProps {
  videoId: string;
  opts?: TrailerConfig;
}

const defaultOpts: TrailerConfig = {
  height: "390px",
  width: "640px",
  playerVars: {
    autoplay: 1,
  },
};

/**
 * ミニプレイヤー
 */
export const Trailer = ({ videoId, opts = defaultOpts }: TrailerProps) => {
  useEffect(() => {}, [videoId]);

  if (isEmpty(videoId)) {
    return <div />;
  } else {
    return (
      <div className="Player-container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          config={{
            youtube: {
              playerVars: opts.playerVars,
            },
          }}
        />
      </div>
    );
  }
};
