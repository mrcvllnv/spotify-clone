import React from "react";
import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="flex flex-col px-8 space-y-1 text-white pb-28">
      {playlist?.tracks.items.map((item, i) => (
        <Song key={item.track.id} track={item} order={i} />
      ))}
    </div>
  );
};

export default Songs;
