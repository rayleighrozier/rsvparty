import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../../actions/token";
import { partyFindById, avatarFindById } from "../../actions/supabase";
import { formatDate, formatTime } from "../../actions/format";
import {
  SET_PAGE,
  SET_GUEST_AVATARDATA,
  SET_PARTYDETAILS,
} from "../../action-types";
import AddPartyButton from "./AddPartyButton";
import Error from "../Error/Error";
import SearchParty from "./SearchParty";
import SearchResults from "./SearchResults";
import DashboardTop from "./DashboardTop";
import PartyList from "./PartyList";
import NoParties from "./NoParties";
import ChooseAvatar from "../ChooseAvatar/ChooseAvatar";
import Loading from "../Loading/Loading";
import "./Dashboard.css";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = checkToken();
  const searchResults = useSelector((state) => state.searchResults);
  const parties = useSelector((state) => state.guest.parties);
  const avatar = useSelector((state) => state.guest.avatar);
  const page = useSelector((state) => state.page);
  const guest = useSelector((state) => state.guest);
  const party = useSelector((state) => state.party);
  const [loading, setLoading] = useState(true);
  const partyDetails = useSelector((state) => state.partyDetails);

  const getPartyDetailsData = async () => {
    const data = [];
    for (const party of parties) {
      let details = await partyFindById(party);
      details.date = formatDate(details.date);
      details.time = formatTime(details.time);
      data.push(details);
    }
    return data;
  };
  const setPartyDetails = async () => {
    let data = await getPartyDetailsData();
    dispatch({ type: SET_PARTYDETAILS, payload: data });
  };
  const setAvatar = async () => {
    let avatarData = await avatarFindById(guest.avatar);
    dispatch({ type: SET_GUEST_AVATARDATA, payload: avatarData });
    setTimeout(() => setLoading(false), 6000);
  };

  useEffect(() => {
    checkForAvatar();
    setLoading(false);
  }, []);

  useEffect(() => {
    if (page === "dashboard") {
      setPartyDetails();
      setAvatar();
    }
  }, [page]);

  const checkForAvatar = () => {
    avatar
      ? dispatch({ type: SET_PAGE, payload: "dashboard" })
      : dispatch({ type: SET_PAGE, payload: "chooseAvatar" });
  };

  // useEffect(() => {
  //   if (partyDetails && guest.avatarData) {
  //     setTimeout(() => setLoading(false), 6000);
  //   }
  // }, [partyDetails, guest.avatarData]);

  return (
    <>
      {loading === false ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
}
