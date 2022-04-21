import React from "react";
import { useEffect } from "react";
import SignOutButton from "../SignIn/SignOutButton";
import AddPartyButton from "./AddPartyButton";
import Error from "../Error/Error";
import SearchParty from "./SearchParty";
import { checkToken } from "../../actions/token";
import { useSelector, useDispatch } from "react-redux";
import SearchResults from "./SearchResults";
import DashboardTop from "./DashboardTop";
import PartyList from "./PartyList";
import NoParties from "./NoParties";
import { SET_PAGE } from "../../action-types";

export default function Dashboard() {
  const dispatch = useDispatch();
  const token = checkToken();
  const searchResults = useSelector((state) => state.searchResults);
  const parties = useSelector((state) => state.guest.parties);

  useEffect(() => {
    dispatch({ type: SET_PAGE, payload: "dashboard" });
  }, []);

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
