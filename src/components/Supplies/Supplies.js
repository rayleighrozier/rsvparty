import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { partyUpdateSupplies } from "../../actions/supabase";
import { SET_ALL_SUPPLIES } from "../../action-types/index";
import SuppliesForm from "./SuppliesForm";

export default function Supplies(props) {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.party);
  const guest = useSelector((state) => state.guest);
  const [newSupplies, setNewSupplies] = useState(false);

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
    setNewSupplies(true);
  };
  const deleteItem = (e) => {
    let itemName = e.target.name;
    let updatedSupplies = party.supplies;
    updatedSupplies = updatedSupplies.filter((data) => data.item !== itemName);
    dispatch({ type: SET_ALL_SUPPLIES, payload: updatedSupplies });
    setNewSupplies(true);
  };

  useEffect(() => {
    if (newSupplies) {
      partyUpdateSupplies(party.partyId, party.supplies);
      setNewSupplies(false);
    }
  }, [newSupplies]);

  return (
    <div className="party-bottom-container">
      <p className="party-supplies-header">Supplies</p>
      <div className="party-supplies">
        {props.host ? (
          <p className="party-supplies-top">Ask guests to bring something</p>
        ) : (
          <p className="party-supplies-top">Volunteer to bring something</p>
        )}
        <div className="party-supplies-left">
          {party.supplies
            ? party.supplies.map((item, index) => {
                return (
                  <>
                    {item.claimed ? null : (
                      <div
                        key={index}
                        className="party-supplies-item light-pink"
                      >
                        <p>{item.item}</p>
                        <div className="party-supplies-item-right">
                          <p>Not claimed</p>
                          {props.host ? (
                            <button
                              name={item.item}
                              onClick={(e) => deleteItem(e)}
                            >
                              X
                            </button>
                          ) : (
                            <button
                              name={item.item}
                              onClick={(e) => claimItem(e)}
                            >
                              I'll bring this
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                );
              })
            : null}
          {props.host ? (
            <SuppliesForm
              newSupplies={newSupplies}
              setNewSupplies={setNewSupplies}
            />
          ) : null}
        </div>
        <div className="party-supplies-right">
          {party.supplies
            ? party.supplies.map((item, index) => {
                return (
                  <>
                    {item.claimed ? (
                      <div
                        key={index}
                        className="party-supplies-item light-blue"
                      >
                        <p>{item.item}</p>{" "}
                        <p className="text-blue">
                          Claimed by {"  "}
                          {item.guest.firstName}
                        </p>
                      </div>
                    ) : null}
                  </>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
