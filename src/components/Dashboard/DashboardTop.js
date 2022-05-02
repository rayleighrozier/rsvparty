import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGE } from "../../action-types";
import pencilImg from "../../assets/pencil.png";

export default function DashboardTop() {
  const dispatch = useDispatch();
  const guest = useSelector((state) => state.guest);

  const changeAvatar = () => {
    dispatch({ type: SET_PAGE, payload: "chooseAvatar" });
  };

  return (
    <div className="dashBoardTop">
      {guest.avatarData ? (
        <img className="userAvatar" src={guest.avatarData.url} />
      ) : null}
      <button className="changeAnimalButton" onClick={changeAvatar}>
        <img src={pencilImg} className="pencil" />
      </button>
      <p className="guestName">Hi {guest?.firstName}!</p>
    </div>
  );
}
