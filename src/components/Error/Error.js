import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <>
      <div className="error">
        <img
          className="chicken"
          src="https://memegenerator.net/img/instances/61775477/party-foul.jpg"
        ></img>
        <br></br>
      </div>
      <div className="message">
        <h2>Stop monkeying around and get back to the party!</h2>
      </div>

      <div className="linkBackToParty">
        <a id="acutalLink" href="">
          Back to the party!
        </a>
      </div>
    </>
  );
}
