import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGE } from "../../action-types/index";

export default function SignInNav() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const ChangePage = (destination) => {
    dispatch({ type: SET_PAGE, payload: destination });
  };
  return (
    <div>
      {page === "signIn" ? (
        <div>
          <p>New to RSVParty?</p>
          <button onClick={() => ChangePage("signUp")}>Sign up here</button>
        </div>
      ) : (
        <div>
          <p>Already have an RSVParty account?</p>
          <button onClick={() => ChangePage("signIn")}>Sign in here</button>
        </div>
      )}
    </div>
  );
}
