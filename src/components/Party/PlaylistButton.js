import React from "react";
import { useSelector } from "react-redux";

export default function PlaylistButton() {
  const party = useSelector((state) => state.party);
  return (
    <div>
      <button>Add To The {party.name} Playlist</button>
    </div>
  );
}
