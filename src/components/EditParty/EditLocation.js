import React from "react";

export default function EditLocation(props) {
  const captureInput = (e) => {
    e.preventDefault();
    let input = {
      address: e.target.form[0].value,
      city: e.target.form[1].value,
      state: e.target.form[2].value,
      zip: e.target.form[3].value,
    };
    props.setNewInputs({
      ...props.newInputs,
      location: input,
    });
    e.target.form[0].value = "";
    e.target.form[1].value = "";
    e.target.form[2].value = "";
    e.target.form[3].value = "";
    props.setState(false);
  };

  return (
    <form>
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip Code" />
      <button onClick={(e) => captureInput(e)}>Submit</button>
      <button onClick={() => props.setState(false)}>X</button>
    </form>
  );
}
