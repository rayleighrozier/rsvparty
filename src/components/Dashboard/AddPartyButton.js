import React from "react";
import { SET_PAGE } from "../../action-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddPartyButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const launchAddPartyForm = () => {
    dispatch({ type: SET_PAGE, payload: "partyDetails" });
    navigate("/addparty");
  };
  return <button onClick={launchAddPartyForm}>New Party</button>;
}