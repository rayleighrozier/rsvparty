import React from "react";
import SuppliesForm from "./SuppliesForm";
import { useSelector } from "react-redux";
import { partyUpdateSupplies } from "../../actions/supabase";
export default function Supplies() {
  const party = useSelector((state) => state.party);
  const sendSupplies = async () => {
    await partyUpdateSupplies(party.partyId, party.supplies);
  };
  return (
    <div>
      <h1>Supplies</h1>
      <SuppliesForm />
      <p>{party?.supplies?.supplies}</p>

      <button onClick={sendSupplies}>Confirm Supplies</button>
    </div>
  );
}
