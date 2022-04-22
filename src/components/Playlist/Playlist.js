import React, { useEffect } from "react";
import { getPlaylistById } from "../../actions/spotify";
import { useSelector } from "react-redux";
import AddPlaylistForm from "./AddPlaylistForm";
import CurrentPlaylist from "./CurrentPlaylist";

export default function Playlist() {
  const party = useSelector((state) => state.party);

  //move to CurrentPlaylist
  // useEffect(() => {
  //   getPlaylistById("7cKcRrr6foPbrPHxu2YLq3");
  // }, []);

  return (
    <div>{party.playlist ? <CurrentPlaylist /> : <AddPlaylistForm />}</div>
  );
}
