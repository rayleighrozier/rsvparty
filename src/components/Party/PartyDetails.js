import React from "react";
import { useSelector } from "react-redux";

export default function PartyDetails() {
  const party = useSelector((state) => state.party);

  return (
    <div className="party-details-container">
      {party ? (
        <>
          <div className="party-details-header">
            <p>{party.name}</p>
          </div>
          <div className="party-details-body">
            <p>{party.date}</p>
            <p>{party.time}</p>
            <p>{party.location.address}</p>
            <p>
              {party.location.city}
              {", "}
              {party.location.state}
              {"  "}
              {party.location.zip}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
