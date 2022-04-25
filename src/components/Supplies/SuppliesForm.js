import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SUPPLIES, ADD_SUPPLIES } from "../../action-types";
// This component is when you click on
// supplies in the party page and it goes fullscreen

export default function SuppliesForm() {
  const dispatch = useDispatch();
  const supplies = useSelector((state) => state.party.supplies);
  const supplies2 = supplies;
  console.log(supplies);
  const captureSetSupplies = async (e) => {
    e.preventDefault();
    dispatch({
      type: SET_SUPPLIES,
      payload: {
        supplies: [...supplies, e.target.form[0].value],
      },
    });
    e.target.form[0].value = "";
  };

  const captureAddSupplies = async (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_SUPPLIES,
      payload: {
        supplies: e.target.form[0].value,
      },
    });
    e.target.form[0].value = "";
  };

  return (
    <div>
      <form>
        <label>Supplies</label>
        <input type="text" />
        <button onClick={(e) => captureSetSupplies(e)}>Submit</button>
      </form>
    </div>
  );
}
