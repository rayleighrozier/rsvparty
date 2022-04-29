import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_PAGE } from "../../action-types";

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
