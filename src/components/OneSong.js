import React from "react";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

export default function OneSong(props) {
  const songInfo = props.songInfo;
  return (
    <div className="songCard">
      <div className="left">
        <p>{songInfo.artist}</p>
        <p>{songInfo.track}</p>
      </div>
      <div className="right">
        <span
          onClick={() =>
            props.handelClick(songInfo.id, "listened", songInfo.listened)
          }
        >
          {songInfo.listened ? <BsPlusSquareFill /> : <BsPlusSquare />}
        </span>
        <span
          onClick={() =>
            props.handelClick(songInfo.id, "favorite", songInfo.favorite)
          }
        >
          {songInfo.favorite ? (
            <MdOutlineFavorite />
          ) : (
            <MdOutlineFavoriteBorder />
          )}
        </span>
      </div>
    </div>
  );
}
