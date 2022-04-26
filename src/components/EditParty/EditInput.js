import React from "react";

export default function EditInput(props) {
  const captureInput = (e) => {
    e.preventDefault();
    let input = e.target.form[0].value;
    props.setNewInputs({
      ...props.newInputs,
      [props.inputType]: input,
    });
    e.target.form[0].value = "";
    props.setState(false);
  };

  return (
    <form>
      <input type={props.type} />
      <button onClick={(e) => captureInput(e)}>Submit</button>
      <button onClick={() => props.setState(false)}>X</button>
    </form>
  );
}
