import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_NEWPARTY_GUESTLIST } from "../../action-types/index";

function InviteGuestsForm() {
  const dispatch = useDispatch();
  // const form = useRef();
  const guestList = useSelector((state) => state.newParty.guestList);

  const captureGuest = (e) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_NEWPARTY_GUESTLIST,
      payload: {
        firstName: e.target.form[0].value,
        lastName: e.target.form[1].value,
        email: e.target.form[2].value,
      },
    });
  };

  return (
    <>
      <div className="mainContainer">
        <form>
          <label>First name</label>
          <input type="text" name="user_name" />

          <label>Last name</label>
          <input type="text" name="user_lastName" />

          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>

          <textarea name="message" />

          <button onClick={(e) => captureGuest(e)}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default InviteGuestsForm;
