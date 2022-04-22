import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGE } from "../../action-types/index";
import "./SignIn.css";

export default function SignInNav() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const ChangePage = (destination) => {
    dispatch({ type: SET_PAGE, payload: destination });
  };
  return (
    <div>
      {page === "signIn" ? (
        <div className="questionContainer">
          <p className="homePageQuestion">New to RSVParty?</p>
          <button
            className="homePageButton"
            onClick={() => ChangePage("signUp")}
          >
            Sign up here
          </button>
        </div>
      ) : (
        <div className="questionContainer">
          <p className="homePageQuestion">Already have an RSVParty account?</p>
          <button
            className="homePageButton"
            onClick={() => ChangePage("signIn")}
          >
            Sign in here
          </button>
        </div>
      )}
    </div>
  );
}
