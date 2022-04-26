import React, { useEffect } from "react";
import SuppliesForm from "./SuppliesForm";
import { useSelector } from "react-redux";
import { partyUpdateSupplies } from "../../actions/supabase";
import { useDispatch } from "react-redux";
import { SET_ALL_SUPPLIES } from "../../action-types/index";

export default function Supplies(props) {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);
  const claimItem = (e) => {
    let itemName = e.target.name;
    let updateItem = party.supplies;
    let updatedSupplies = party.supplies;
    updatedSupplies = updatedSupplies.filter((data) => data.item !== itemName);
    updateItem = updateItem.filter((data) => data.item === itemName);
    updateItem[0].guest = {
      firstName: guest.firstName,
      lastName: guest.lastName,
      guestId: guest.guestId,
    };
    updateItem[0].claimed = true;
    updatedSupplies.push(updateItem[0]);
    dispatch({ type: SET_ALL_SUPPLIES, payload: updatedSupplies });
  };

  const deleteItem = (e) => {
    let itemName = e.target.name;
    let updatedSupplies = party.supplies;
    updatedSupplies = updatedSupplies.filter((data) => data.item !== itemName);
    dispatch({ type: SET_ALL_SUPPLIES, payload: updatedSupplies });
  };

  useEffect(() => {
    partyUpdateSupplies(party.partyId, party.supplies);
  }, [party.supplies]);

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
                {item.guest ? (
                  <p>
                    {item.guest.firstName} {item.guest.lastName} is bringing
                    this
                  </p>
                ) : (
                  <p>Not claimed</p>
                )}
                {props.host ? (
                  item.claimed ? null : (
                    <button name={item.item} onClick={(e) => deleteItem(e)}>
                      X
                    </button>
                  )
                ) : item.guest ? null : (
                  <button name={item.item} onClick={(e) => claimItem(e)}>
                    I'll bring this
                  </button>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}
