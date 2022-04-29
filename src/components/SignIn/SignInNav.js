import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGE } from "../../action-types/index";
import "./SignIn.css";

export default function SignInNav() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const changePage = (destination) => {
    dispatch({ type: SET_PAGE, payload: destination });
  };
  return (
    <div className="signInContainer">
      {page === "signIn" ? (
        <div className="questionContainer">
          <p className="homePageQuestion">New to RSVParty?</p>
          <button
            className="homePageButton"
            onClick={() => changePage("signUp")}
          >
            Sign up here
          </button>
        </div>
      ) : (
        <div className="questionContainer">
          <p className="homePageQuestion">Already have an RSVParty account?</p>
          <button
            className="homePageButton"
            onClick={() => changePage("signIn")}
          >
            Sign in here
          </button>
        </div>
      )}
    </div>
  );
}
