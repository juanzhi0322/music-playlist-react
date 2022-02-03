import React from "react";
import OneSong from "./OneSong";

export default function Favorites(props) {
  const oneSongContainer = props.playList.map((each) => {
    return each.favorite ? (
      <OneSong
        key={each.id}
        id={each.id}
        songInfo={each}
        handelClick={props.handelClick}
      />
    ) : null;
  });
  return (
    <div className="threeCards">
      <h1>Favorites</h1>
      {oneSongContainer}
    </div>
  );
}
