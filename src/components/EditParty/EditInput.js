import React from "react";

export default function EditInput(props) {
  return (
    <div>
      <input type={props.type} />
      <button>Submit</button>
      <button onClick={() => props.setState(false)}>X</button>
    </div>
  );
}
