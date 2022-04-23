import React from "react";
import { useDispatch } from "react-redux";

export default function EditInput(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <input type={props.type} />
      <button>Submit</button>
      <button onClick={() => props.setState(false)}>X</button>
    </div>
  );
}
