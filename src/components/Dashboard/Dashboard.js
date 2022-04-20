import React from "react";
import SignOutButton from "../SignIn/SignOutButton";
import AddPartyButton from "./AddPartyButton";
import Error from "../Error/Error";
import SearchParty from "./SearchParty";
import { checkToken } from "../../actions/token";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import DashboardTop from "./DashboardTop";
import PartyList from "./PartyList";
import NoParties from "./NoParties";
import { formatDate, formatDate2 } from "../../actions/format";

export default function Dashboard() {
  console.log("daaate", formatDate2("2022-09-30"));
  const token = checkToken();
  const searchResults = useSelector((state) => state.searchResults);
  const parties = useSelector((state) => state.guest.parties);
  return (
    <>
      {token ? (
        <div>
          <DashboardTop />
          {parties != null && parties.length > 0 ? (
            <PartyList />
          ) : (
            <NoParties />
          )}
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
