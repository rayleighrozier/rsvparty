import React from "react";
import { useSelector, useDispatch } from "react-redux";
import userAvatar from "../../assets/userAvatar.JPG";
import { SET_PAGE } from "../../action-types";

export default function DashboardTop() {
  const dispatch = useDispatch();
  const changeAvatar = () => {
    dispatch({ type: SET_PAGE, payload: "chooseAvatar" });
  };
  const guest = useSelector((state) => state.guest);
  return (
    <div>
      <img className="userAvatar" src={userAvatar} />
      <button onClick={changeAvatar}>Change Animal</button>
      <p className="guestName">Hi {guest?.firstName}!</p>
    </div>
  );
}
