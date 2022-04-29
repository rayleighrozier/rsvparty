import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { avatarFindById } from "../../actions/supabase";
import { SET_PAGE, SET_GUEST_AVATARDATA } from "../../action-types";
import pencilImg from "../../assets/pencil.png";

export default function DashboardTop() {
  const dispatch = useDispatch();
  const guest = useSelector((state) => state.guest);

  const changeAvatar = () => {
    dispatch({ type: SET_PAGE, payload: "chooseAvatar" });
  };
  const setAvatar = async () => {
    let avatarData = await avatarFindById(guest.avatar);
    dispatch({ type: SET_GUEST_AVATARDATA, payload: avatarData });
  };

  useEffect(() => {
    setAvatar();
  }, []);

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
