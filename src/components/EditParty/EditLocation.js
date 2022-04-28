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
      <input
        className="addressLabel addressLine1 addPartyInput"
        type="text"
        placeholder="Address"
      />
      <div className="editCityStateZip">
        <input
          className="cityInput addPartyInput"
          type="text"
          placeholder="City"
        />
        <input
          className="stateInput addPartyInput"
          type="text"
          placeholder="State"
        />
        <input
          className="zipInput addPartyInput"
          type="text"
          placeholder="Zip Code"
        />
      </div>
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
