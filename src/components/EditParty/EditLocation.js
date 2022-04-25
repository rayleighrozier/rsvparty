import React from "react";

export default function EditLocation(props) {
  return (
    <div>
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip Code" />
      <button>Submit</button>
      <button onClick={() => props.setState(false)}>X</button>
    </div>
  );
}
