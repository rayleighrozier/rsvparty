import React from "react";
import { SET_PAGE } from "../../action-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddPartyButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const guestId = useSelector((state) => state.guest.guestId);
  const launchAddPartyForm = () => {
    dispatch({ type: SET_PAGE, payload: "addParty" });
    navigate(`/addparty/${guestId}`);
  };
  return <button onClick={launchAddPartyForm}>New Party</button>;
}
