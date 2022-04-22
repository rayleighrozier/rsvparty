const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3008;
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
const client_id = "1e7b05cad3e94cc9bcf42d96cd780965";
const redirect_uri = "http://localhost:3000/";
const scope = "user-read-private user-read-email";

var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
var stateKey = "spotify_auth_state";
app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());

app.get("/spotifyAuth", (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
  res.send({ hi: "hi" });
});

app.listen(PORT, console.log(`On port ${PORT}`));
