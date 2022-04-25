import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { partyUpdateDetails } from "../../actions/supabase";

export default function EditInput(props) {
  const dispatch = useDispatch();
  const inputType = props.inputType;
  const party = useSelector((state) => state.party);
  const captureInput = (e) => {
    e.preventDefault();
    let input = e.target.form[0].value;
    console.log(input);
    props.setNewInputs({
      ...props.newInputs,
      [props.inputType]: input,
    });
  };
  useEffect(() => {
    partyUpdateDetails(party.partyId, props.newInputs);
  }, [props.newInputs]);

  return (
    <form>
      <input type={props.type} />
      <button onClick={(e) => captureInput(e)}>Submit</button>
      <button onClick={() => props.setState(false)}>X</button>
    </form>
  );
}
