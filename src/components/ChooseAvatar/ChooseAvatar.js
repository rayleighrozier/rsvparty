import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { captureAvatar } from "../../actions/input";
import { avatarsGetAll, guestUpdateAvatar } from "../../actions/supabase";
import { SET_AVATARS, SET_PAGE, SET_GUEST_AVATAR } from "../../action-types";
import Loading from "../Loading/Loading";
import "./ChooseAvatar.css";

export default function ChooseAvatar() {
  const dispatch = useDispatch();
  const avatars = useSelector((state) => state.avatars);
  const guest = useSelector((state) => state.guest);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (avatars) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [avatars]);

  return (
    <div className="outerContainer">
      {loading === false ? (
        <>
          {avatars ? (
            <>
              <h1 className="chooseAvatarTitle">CHOOSE YOUR PARTY ANIMAL</h1>
              <form>
                <div className="mainContainer">
                  <p className="avatarTitle">Monkey</p>
                  <p className="avatarTitle">Giraffe</p>
                  <p className="avatarTitle">Flamingo</p>
                  <p className="avatarTitle">Elephant</p>
                  <p className="avatarTitle">Zebra</p>

                  <div className="breakRowZero"></div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[3].avatarId}
                      />
                      <img
                        className="allAvatars"
                        id="yellow"
                        src={avatars[3].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[2].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[2].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[0].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[0].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[1].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[1].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[4].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[4].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div className="breakRowOne"></div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[12].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[12].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[14].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[14].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[6].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[6].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[10].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[10].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[8].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[8].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div className="breakRowTwo"></div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[11].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[11].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[13].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[13].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[5].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[5].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[9].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[9].url}
                        alt=""
                      ></img>
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatars[7].avatarId}
                      />
                      <img
                        className="allAvatars"
                        src={avatars[7].url}
                        alt=""
                      ></img>
                    </label>
                  </div>
                </div>
                <div className="buttonDiv">
                  <button
                    className="avatarButton"
                    onClick={(e) => sendAvatar(e)}
                  >
                    Looks good!
                  </button>
                </div>
              </form>
            </>
          ) : null}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
