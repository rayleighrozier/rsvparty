import { useDispatch } from "react-redux";
import { UPDATE_NEWPARTY_GUESTLIST } from "../../action-types/index";

function EditGuestsForm() {
  const dispatch = useDispatch();
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
        <form className="e-guests-input-form">
          <div>
            <label className="e-guests-input-label">First name</label>
            <input className="inviteGuestInput" type="text" />
          </div>
          <div>
            <label className="e-guests-input-label">Last name</label>
            <input className="inviteGuestInput" type="text" />
          </div>
          <div>
            <label className="e-guests-input-label">Email</label>
            <input className="inviteGuestInput" type="email" />
          </div>
          <button className="e-guests-submit" onClick={(e) => captureGuest(e)}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EditGuestsForm;
