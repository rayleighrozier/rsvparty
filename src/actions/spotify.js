const clientId = process.env.REACT_APP_SPOTIFY_CLIENTID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENTSECRET;
const scope = "user-read-private user-read-email";
const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const getSpotifyToken = async () => {
  const result = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await result.json();
  console.log("token data", data);
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

const getCurrentUser = async () => {
  const token = await getSpotifyToken();
  console.log("tokeeeen", token);
  const nodeserver = await fetch("http://localhost:3008/spotifyAuth", {
    method: "GET",
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  console.log(nodeserver);
  const data = await nodeserver.json();
  console.log(data);
  //   const result = await fetch(`https://api.spotify.com/v1/me`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //       scope: "playlist-read-private",
  //     },
  //   });
  //   const data = await result.json();
  //   console.log("current user data", data);
};

const getPlaylists = async () => {
  const token = await getSpotifyToken();
  const result = await fetch(
    "https://api.spotify.com/v1/me/playlists?limit=100",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = await result.json();
  console.log("current user playlists", data);
};
// const createPlaylist = async (userId, playlistName) => {
//   const token = await getSpotifyToken();
//   console.log("tokeeeen", token);
//   const result = await fetch(
//     `https://api.spotify.com/v1/playlists/${playlistId}`,
//     {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     }
//   );
//   const data = await result.json();
//   console.log("data", data);
// };

export { getSpotifyToken, getPlaylistById, getCurrentUser, getPlaylists };
