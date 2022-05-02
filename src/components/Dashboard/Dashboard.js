import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const token = checkToken();
  const searchResults = useSelector((state) => state.searchResults);
  const parties = useSelector((state) => state.guest.parties);
  const avatar = useSelector((state) => state.guest.avatar);
  const page = useSelector((state) => state.page);
  const guest = useSelector((state) => state.guest);
  const [loading, setLoading] = useState(true);
  const [allConditions, setAllConditions] = useState(false);
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
  };
  const checkForAvatar = () => {
    if (avatar) {
      dispatch({ type: SET_PAGE, payload: "dashboard" });
    } else {
      dispatch({ type: SET_PAGE, payload: "chooseAvatar" });
      setTimeout(() => setLoading(false), 3000);
    }
  };

  const checkAllConditions = () => {
    if (partyDetails && guest.avatarData) {
      setAllConditions(true);
    }
  };

  useEffect(() => {
    checkForAvatar();
  }, []);

  useEffect(() => {
    if (page === "dashboard") {
      setPartyDetails();
      setAvatar();
    }
  }, [page]);

  useEffect(() => {
    checkAllConditions();
  }, [partyDetails, guest.avatarData]);

  useEffect(() => {
    if (allConditions) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [allConditions]);

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
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <ChooseAvatar loading={loading} setLoading={setLoading} />
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
