const clientId = process.env.REACT_APP_SPOTIFY_CLIENTID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENTSECRET;

const getSpotifyToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await result.json();
  return data.access_token;
};

const getPlaylistById = async (playlistId) => {
  const token = await getSpotifyToken();
  console.log("tokeeeen", token);
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  console.log("data", data);
};
export { getSpotifyToken, getPlaylistById };
