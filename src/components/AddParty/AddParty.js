import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PartyDetails from "./PartyDetails";
import InviteGuests from "./InviteGuests";

export default function AddParty() {
  const page = useSelector((state) => state.page);
  return (
    <div>
      <h1>Add Party Form</h1>
      {page === "partyDetails" ? <PartyDetails /> : <InviteGuests />}
    </div>
  );
}
