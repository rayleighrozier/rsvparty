import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SUPPLIES } from "../../action-types";
import { partyUpdateSupplies } from "../../actions/supabase";

export default function SuppliesForm() {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.party);

  const captureAddSupplies = async (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_SUPPLIES,
      payload: e.target.form[0].value,
    });
    e.target.form[0].value = "";
  };
  // const checkSupplies = (supplies) => {
  //   let supplyJSON = [];
  //   console.log("hello", supplyJSON);
  //   console.log("hello", supplies);

  //   for (const item of supplies) {
  //     let supplyData = JSON.parse(item);
  //     supplyJSON.push(supplyData);
  //     console.log("hello", supplyJSON);
  //   }
  // };
  // useEffect(() => {
  //   checkSupplies(supplies);
  // }, [supplies]);

  useEffect(() => {
    partyUpdateSupplies(party.partyId, party.supplies);
  }, [party.supplies]);

  return (
    <div>
      <form>
        <label>Supplies</label>
        <input type="text" />
        <button onClick={(e) => captureAddSupplies(e)}>Submit</button>
      </form>
      {/* {supplies?.map ? (
        supplies?.map((item) => {
          return <p>{item}</p>;
        })
      ) : (
        <p>Add new supplies</p>
      )} */}
    </div>
  );
}
