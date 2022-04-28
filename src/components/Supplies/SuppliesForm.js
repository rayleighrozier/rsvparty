import React from "react";
import { useDispatch } from "react-redux";
import { ADD_SUPPLIES } from "../../action-types";

export default function SuppliesForm(props) {
  const dispatch = useDispatch();

  const captureAddSupplies = async (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_SUPPLIES,
      payload: e.target.form[0].value,
    });
    e.target.form[0].value = "";
    props.setNewSupplies(true);
  };

  return (
    <form className="party-supplies-form">
      <p>Add to the list</p>
      <input type="text" />
      <button onClick={(e) => captureAddSupplies(e)}>+</button>
    </form>
  );
}
