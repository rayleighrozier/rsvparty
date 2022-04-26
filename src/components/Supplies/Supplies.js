import React from "react";
import SuppliesForm from "./SuppliesForm";
import { useSelector } from "react-redux";
import { partyUpdateSupplies } from "../../actions/supabase";

export default function Supplies(props) {
  const party = useSelector((state) => state.party);
  const sendSupplies = async () => {
    await partyUpdateSupplies(party.partyId, party.supplies);
  };

  return (
    <div>
      <p>Supplies</p>
      {props.host ? (
        <p>Ask for guests to bring something</p>
      ) : (
        <p>Volunteer to bring something</p>
      )}
      {props.host ? <SuppliesForm /> : null}
      {party.supplies
        ? party.supplies.map((item) => {
            return (
              <div>
                <p>{item.item}</p>
                {item.guest ? <p>{item.guest}</p> : <p>Not claimed</p>}
                {props.host ? (
                  <button>X</button>
                ) : item.guest ? null : (
                  <button>I'll bring this</button>
                )}
              </div>
            );
          })
        : null}
      {/* <>
        <p>{party?.supplies}</p>
      </> */}
      {/* <button onClick={sendSupplies}>Confirm Supplies</button> */}
    </div>
  );
}
