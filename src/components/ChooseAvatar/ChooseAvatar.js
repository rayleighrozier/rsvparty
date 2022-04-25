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
      <p className="title">Choose Your Party Animal!</p>
      <form>
        <div className="mainContainer">
          <h2 className="avatarTitle">Monkey</h2>
          <h2 className="avatarTitle">Giraffe</h2>
          <h2 className="avatarTitle">Flamingo</h2>
          <h2 className="avatarTitle">Elephant</h2>
          <h2 className="avatarTitle">Zebra</h2>

          <div className="breakRowZero"></div>

          <div>
            <input type="radio" name="avatar" value={avatars[0].avatarId} />
            <img className="allAvatars" src={avatars[0].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[12].avatarId} />
            <img className="allAvatars" src={avatars[12].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[1].avatarId} />
            <img className="allAvatars" src={avatars[1].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[4].avatarId} />
            <img className="allAvatars" src={avatars[4].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[7].avatarId} />
            <img className="allAvatars" src={avatars[7].url} alt=""></img>
          </div>

          <div className="breakRowOne"></div>

          <div>
            <input type="radio" name="avatar" value={avatars[9].avatarId} />
            <img className="allAvatars" src={avatars[9].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[13].avatarId} />
            <img className="allAvatars" src={avatars[13].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[2].avatarId} />
            <img className="allAvatars" src={avatars[2].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[5].avatarId} />
            <img className="allAvatars" src={avatars[5].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[8].avatarId} />
            <img className="allAvatars" src={avatars[8].url} alt=""></img>
          </div>

          <div className="breakRowTwo"></div>

          <div>
            <input type="radio" name="avatar" value={avatars[11].avatarId} />
            <img className="allAvatars" src={avatars[11].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[14].avatarId} />
            <img className="allAvatars" src={avatars[14].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[3].avatarId} />
            <img className="allAvatars" src={avatars[3].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[6].avatarId} />
            <img className="allAvatars" src={avatars[6].url} alt=""></img>
          </div>
          <div>
            <input type="radio" name="avatar" value={avatars[10].avatarId} />
            <img className="allAvatars" src={avatars[10].url} alt=""></img>
          </div>
          {/* <div className="breakRowThree"></div> */}
        </div>
        <button className="avatarButton" onClick={(e) => sendAvatar(e)}>
          Looks Good!
        </button>

        {/* <form>
        {avatars
          ? avatars.map((avatar) => {
              return (
                <div>
                  <input type="radio" name="avatar" value={avatar.avatarId} />
                  <img className="temporaryClass" src={avatar.url} />
                  <p>{avatar.name}</p>
                </div>
              );
            })
          : null} */}
      </form>
    </div>
  );
}
