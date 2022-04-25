import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SUPPLIES } from "../../action-types";
// This component is when you click on
// supplies in the party page and it goes fullscreen

export default function SuppliesForm() {
  const dispatch = useDispatch();
  const supplies = useSelector((state) => state.party.supplies);

  const captureAddSupplies = async (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_SUPPLIES,
      payload: e.target.form[0].value,
    });
    e.target.form[0].value = "";
  };
  const checkSupplies = (supplies) => {
    let supplyJSON = [];
    if (supplies) {
      for (const item of supplies) {
        let supplyData = JSON.parse(item);
        supplyJSON.push(supplyData);
      }
    }
  };
  useEffect(() => {
    checkSupplies();
  }, [supplies]);
  return (
    <div>
      <form>
        <label>Supplies</label>
        <input type="text" />
        <button onClick={(e) => captureAddSupplies(e)}>Submit</button>
      </form>
      {supplies?.map ? (
        supplies?.map((item) => {
          return <p>{item}</p>;
        })
      ) : (
        <p>Add new supplies</p>
      )}
    </div>
  );
}
