import React from "react";
import OneSong from "./OneSong";

export default function AllSongs(props) {
  console.log("props", props.playList);
  const oneSongContainer = props.playList.map((each) => {
    return (
      <OneSong
        key={each.id}
        id={each.id}
        songInfo={each}
        handelClick={props.handelClick}
      />
    );
  });
  return (
    <div className="threeCards">
      <h1>All Songs</h1>
      {oneSongContainer}
    </div>
  );
}
