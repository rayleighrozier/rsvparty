import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_AVATARS, SET_PAGE, SET_GUEST_AVATAR } from "../../action-types";
import { captureAvatar } from "../../actions/input";
import { avatarsGetAll, guestUpdateAvatar } from "../../actions/supabase";
import "./ChooseAvatar.css";

export default function ChooseAvatar() {
  const dispatch = useDispatch();
  const avatars = useSelector((state) => state.avatars);
  const guest = useSelector((state) => state.guest);
  const getAvatars = async () => {
    const avatarsData = await avatarsGetAll();
    dispatch({ type: SET_AVATARS, payload: avatarsData });
  };
  const sendAvatar = async (e) => {
    let newAvatar = captureAvatar(e);
    if (newAvatar) {
      await guestUpdateAvatar(guest.guestId, newAvatar);
      dispatch({ type: SET_PAGE, payload: "dashboard" });
      dispatch({ type: SET_GUEST_AVATAR, payload: newAvatar });
    } else {
      window.alert("Please choose a party animal.");
    }
  };
  useEffect(() => {
    getAvatars();
  }, []);

  return (
    <div>
      <p>Choose Your Party Animal!</p>
      <form>
        {avatars
          ? avatars.map((avatar) => {
              return (
                <div>
                  <input type="radio" name="avatar" value={avatar.uuid} />
                  <img className="temporaryClass" src={avatar.url} />
                  <p>{avatar.name}</p>
                </div>
              );
            })
          : null}
        <button onClick={(e) => sendAvatar(e)}>Looks Good!</button>
      </form>
    </div>
  );
}
