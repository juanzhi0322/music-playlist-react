import React from "react";
import OneSong from "./OneSong";

export default function Listened(props) {
  const oneSongContainer = props.playList.map((each) => {
    return each.listened ? (
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
      <h1>Listened</h1>
      {oneSongContainer}
    </div>
  );
}
