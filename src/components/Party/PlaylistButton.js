import React from "react";
import { useSelector } from "react-redux";

export default function PlaylistButton() {
  const party = useSelector((state) => state.party);
  return (
    <div>
      {party.playlist ? (
        <button>Add to the Playlist</button>
      ) : (
        <button>Create a Playlist</button>
      )}
    </div>
  );
}
