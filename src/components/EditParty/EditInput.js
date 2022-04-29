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
    <form className="inputForm">
      <input
        id={props.inputType}
        className="editPartyInput"
        type={props.type}
      />
      <div className="center">
        <button
          className="editPartySubmitButton"
          onClick={(e) => captureInput(e)}
        >
          Submit
        </button>
      </div>

      <div className="center">
        <button onClick={() => props.setState(false)}>X</button>
      </div>
    </form>
  );
}
