import { useDispatch } from "react-redux";
import { UPDATE_NEWPARTY_GUESTLIST } from "../../action-types/index";

function InviteGuestsForm() {
  const dispatch = useDispatch();
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
    e.target.form[0].value = "";
    e.target.form[1].value = "";
    e.target.form[2].value = "";
  };

  return (
    <>
      <div className="mainContainer">
        <form>
          <label>First name</label>
          <input type="text" />
          <label>Last name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <button onClick={(e) => captureGuest(e)}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default InviteGuestsForm;
