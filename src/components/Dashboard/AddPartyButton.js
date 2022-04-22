import React from "react";
import { SET_PAGE } from "../../action-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddPartyButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const launchAddPartyForm = () => {
    dispatch({ type: SET_PAGE, payload: "addDetails" });
    navigate("/addparty");
  };
  return (
    <button className="addPartyButton" onClick={launchAddPartyForm}>
      +
    </button>
  );
}
