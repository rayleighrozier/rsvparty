import React from "react";
import { useSelector } from "react-redux";
import { partyFindById } from "../../actions/supabase";
import { useEffect } from "react";
import { SET_PARTYDETAILS } from "../../action-types";
import { useDispatch } from "react-redux";

export default function PartyList() {
  const dispatch = useDispatch();
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
            <button> -> </button>
          </div>
        );
      })}
    </div>
  );
}
