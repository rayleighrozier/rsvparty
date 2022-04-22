import React from "react";
import { useSelector } from "react-redux";

export default function AddPlaylistForm() {
  const party = useSelector((state) => state.party);
  return (
    <div>
      <p>Create a Playlist</p>
      <form>
        <p>Spotify Username</p>
        <input type="text" />
        <p>Playlist Name</p>
        <input type="text" value={party?.name} />
        <button>Create Playlist</button>
      </form>
    </div>
  );
}
