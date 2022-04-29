import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { partyFindById } from "../../actions/supabase";
import { formatDate, formatTime } from "../../actions/format";
import { SET_PARTYDETAILS } from "../../action-types";

export default function PartyList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parties = useSelector((state) => state.guest.parties);
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
  const goToParty = (partyId) => {
    navigate(`/party/${partyId}`);
  };

  useEffect(() => {
    setPartyDetails();
  }, []);

  return (
    <>
      {partyDetails?.map((party) => {
        return (
          <div className="individualParty">
            <p className="partyTitle">{party?.name}</p>
            <div className="partyDetails">
              <p className="partyDate">{party?.date}</p>
              <p className="partyTime">{party?.time}</p>
              <button
                className="visitPartyButton"
                onClick={() => goToParty(party?.partyId)}
              >
                VISIT PARTY
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
