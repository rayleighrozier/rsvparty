import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { partyFindById } from "../../actions/supabase";
import { useEffect } from "react";
import { SET_PARTYDETAILS } from "../../action-types";
import { useDispatch } from "react-redux";

export default function PartyList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parties = useSelector((state) => state.guest.parties);
  const partyDetails = useSelector((state) => state.partyDetails);
  const updatedDetails = [];
  const getPartyInfo = async () => {
    for (const party of parties) {
      let details = await partyFindById(party);
      updatedDetails.push(details);
    }
    if (updatedDetails.length > 0) {
      dispatch({ type: SET_PARTYDETAILS, payload: updatedDetails });
    }
    console.log("updatedDetails", updatedDetails);
  };
  const goToParty = (partyId) => {
    navigate(`/party/${partyId}`);
  };
  useEffect(() => {
    getPartyInfo();
  }, [parties]);

  return (
    <div>
      {partyDetails?.map((party) => {
        return (
          <div>
            <p>{party.name}</p>
            <p>{party.date}</p>
            <p>{party.time}</p>
            <button onClick={() => goToParty(party.partyId)}>{`->`}</button>
          </div>
        );
      })}
    </div>
  );
}
