import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getCurrentUser,
  getPlaylistById,
  getPlaylists,
} from "../../actions/spotify";

export default function AddPlaylistForm() {
  const party = useSelector((state) => state.party);

  // useEffect(() => {
  //   getCurrentUser();
  // }, []);
  return (
    <div>
      <p>Create a Playlist</p>
      <form>
        <p>Spotify Username</p>
        <input type="text" />
        <p>Playlist Name</p>
        <input type="text" placeholder={party?.name} />
        <button>Create Playlist</button>
      </form>
    </div>
  );
}