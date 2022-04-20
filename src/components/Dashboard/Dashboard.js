import React from "react";
import SignOutButton from "../SignIn/SignOutButton";
import AddPartyButton from "./AddPartyButton";
import Error from "../Error/Error";
import SearchParty from "./SearchParty";
import { checkToken } from "../../actions/token";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";

// Add Party, Search Exisiting Party, Look at Existing Parties

export default function Dashboard() {
  const token = checkToken();
  const searchResults = useSelector((state) => state.searchResults);
  return (
    <>
      {token ? (
        <div>
          <h1>Dashboard</h1>
          <AddPartyButton />
          <SearchParty />
          {searchResults ? <SearchResults /> : null}
          <SignOutButton />
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}
