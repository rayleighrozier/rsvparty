import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGE, SET_GUEST_AVATARDATA } from "../../action-types";
import { avatarFindById } from "../../actions/supabase";

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
      {/* here we can replace null with a default image if we want to */}
      <button className="changeAnimalButton" onClick={changeAvatar}>
        Change Animal
      </button>
      {guest.avatarData ? (
        <img className="userAvatar" src={guest.avatarData.url} />
      ) : null}

      <p className="guestName">Hi {guest?.firstName}!</p>
    </div>
  );
}
