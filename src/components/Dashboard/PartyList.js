import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PartyList() {
  const navigate = useNavigate();
  const partyDetails = useSelector((state) => state.partyDetails);

  const goToParty = (partyId) => {
    navigate(`/party/${partyId}`);
  };

  return (
    <>
      {partyDetails?.map((party) => {
        return (
          <div key={party.partyId} className="individualParty">
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
