import React from "react";
import SignOutButton from "../SignIn/SignOutButton";
import AddPartyButton from "./AddPartyButton";

// Add Party, Search Exisiting Party, Look at Existing Parties

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddPartyButton />
      <SignOutButton />
    </div>
  );
}
