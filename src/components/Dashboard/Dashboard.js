import React from "react";
import SignOutButton from "../SignIn/SignOutButton";
import AddPartyButton from "./AddPartyButton";
import Error from "../Error/Error";
import SearchParty from "./SearchParty";
import { checkToken } from "../../actions/token";

// Add Party, Search Exisiting Party, Look at Existing Parties

export default function Dashboard() {
  const token = checkToken();
  return (
    <>
      {token ? (
        <div>
          <h1>Dashboard</h1>
          <AddPartyButton />
          <SearchParty />
          <SignOutButton />
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}
