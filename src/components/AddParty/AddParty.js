import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PartyDetails from "./PartyDetails";
import InviteGuests from "./InviteGuests";
import Error from "../Error/Error";
import { checkToken } from "../../actions/token";

export default function AddParty() {
  const page = useSelector((state) => state.page);
  const token = checkToken();
  return (
    <>
      {token ? (
        <div>
          <h1>Add Party Form</h1>
          {page === "partyDetails" ? <PartyDetails /> : <InviteGuests />}
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}
