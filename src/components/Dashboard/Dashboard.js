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
import "./Dashboard.css";
import ChooseAvatar from "../ChooseAvatar/ChooseAvatar";

export default function Dashboard() {
  const dispatch = useDispatch();
  const token = checkToken();
  const searchResults = useSelector((state) => state.searchResults);
  const parties = useSelector((state) => state.guest.parties);
  const avatar = useSelector((state) => state.guest.avatar);
  const page = useSelector((state) => state.page);

  const checkForAvatar = () => {
    avatar
      ? dispatch({ type: SET_PAGE, payload: "dashboard" })
      : dispatch({ type: SET_PAGE, payload: "chooseAvatar" });
  };

  useEffect(() => {
    checkForAvatar();
  }, []);

  return (
    <>
      {token ? (
        page === "dashboard" ? (
          <div className="dashboardContainer">
            <div className="userContainer">
              <DashboardTop />
              <SearchParty />
              {searchResults ? <SearchResults /> : null}
            </div>
            <div className="partyContainer">
              <p className="partiesHeader">Parties</p>
              <div className="partiesContainer">
                <AddPartyButton />
                {parties != null && parties.length > 0 ? (
                  <PartyList />
                ) : (
                  <NoParties />
                )}
              </div>
            </div>
          </div>
        ) : (
          <ChooseAvatar />
        )
      ) : (
        <Error />
      )}
    </>
  );
}
