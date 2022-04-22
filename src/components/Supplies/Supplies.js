import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { partyUpdateSupplies } from "../../actions/supabase";
import { SET_SUPPLIES } from "../../action-types";
import { captureAddSupplies } from "../../actions/input";
// This component is when you click on
// supplies in the party page and it goes fullscreen

export default function Supplies() {
  const dispatch = useDispatch();
  const sendSupplies = async (e) => {
    const input = captureAddSupplies(e);
    let userEntry = await partyUpdateSupplies(party.partyId, input);
    dispatch({ type: SET_SUPPLIES, userEntry });
    console.log(input);
  };

  const party = useSelector((state) => state.party);

  return (
    <div>
      <h1>Supplies</h1>
      <form>
        <label>Supplies</label>
        <input type="text" />
        <button onClick={(e) => sendSupplies(e)}>Submit</button>
      </form>
    </div>
  );
}
