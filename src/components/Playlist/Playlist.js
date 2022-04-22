import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import AddPlaylistForm from "./AddPlaylistForm";
import CurrentPlaylist from "./CurrentPlaylist";

export default function Playlist() {
  const party = useSelector((state) => state.party);

  return (
    <div>{party.playlist ? <CurrentPlaylist /> : <AddPlaylistForm />}</div>
  );
}
