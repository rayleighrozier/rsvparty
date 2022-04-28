import React from "react";
import { useSelector } from "react-redux";

export default function AdditionalDetails() {
  const party = useSelector((state) => state.party);
  return (
    <div className="party-additional-details">
      <p className="party-additional-details-header">More Details</p>
      <div className="party-additional-details-body">
        {party ? <p>{party.details}</p> : null}
      </div>
    </div>
  );
}
