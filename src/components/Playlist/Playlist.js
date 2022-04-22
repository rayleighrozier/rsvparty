import React, { useEffect } from "react";
import { getPlaylistById } from "../../actions/spotify";

export default function Playlist() {
  useEffect(() => {
    getPlaylistById("7cKcRrr6foPbrPHxu2YLq3");
  }, []);

  return (
    <div>
      <h1>Playlist</h1>
    </div>
  );
}
