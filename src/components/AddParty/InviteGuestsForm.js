import "./InviteGuests.css";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_NEWPARTY_GUESTLIST,
  SET_PARTY_GUESTS,
} from "../../action-types/index";

function InviteGuestsForm() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const captureGuest = (e) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_NEWPARTY_GUESTLIST,
      payload: {
        firstName: e.target.form[0].value,
        lastName: e.target.form[1].value,
        email: e.target.form[2].value,
        attending: "undecided",
      },
    });
    e.target.form[0].value = "";
    e.target.form[1].value = "";
    e.target.form[2].value = "";
  };

  return (
    <>
      <div className="mainContainer ">
        <form className="inviteGuestContainer">
          <div className="inviteGuestContent">
            <label className="inviteGuestLabel">First name</label>
            <input className="inviteGuestInput" type="text" />
          </div>
          <div className="inviteGuestContent">
            <label className="inviteGuestLabel">Last name</label>
            <input className="inviteGuestInput" type="text" />
          </div>
          <div className="inviteGuestContent">
            <label className="inviteGuestLabel">Email</label>
            <input className="inviteGuestInput" type="email" />
          </div>
          <button
            className="submitGuestButton"
            onClick={(e) => captureGuest(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default InviteGuestsForm;
