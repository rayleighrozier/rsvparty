import React from "react";
import Countdown from "react-countdown";
// Countdown, Details, Playlist, Supplies, Comments

export default function Party() {
  const Completionist = () => <span>You are good to go!</span>;
  const endDate = `May 3, 2022`;
  let timeLeft = Date.now() - Date.parse(endDate);
  return (
    <div>
      <h1>Party</h1>
      <Countdown date={Date.now() + Math.abs(timeLeft)}>
        <Completionist />
      </Countdown>
    </div>
  );
}
