import React from "react";
import { useSelector } from "react-redux";

export default function AdditionalDetails() {
  const party = useSelector((state) => state.party);
  return (
    <div className="party-additional-details">
      {party ? <p>{party.details}</p> : null}
    </div>
  );
}
