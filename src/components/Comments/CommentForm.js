import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
import { SET_PARTY_COMMENTS } from "../../action-types";
import { partyUpdateComments } from "../../actions/supabase";
import "./Comments.css";

export default function CommentForm(props) {
  const dispatch = useDispatch();
  const guest = useSelector((state) => state.guest);
  const party = useSelector((state) => state.party);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const captureComment = (e) => {
    e.preventDefault();
    let comment = e.target.form[0].value;
    props.setNewComment({
      guestId: guest.guestId,
      firstName: guest.firstName,
      lastName: guest.lastName,
      comment: comment,
    });
  };

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  useEffect(() => {
    dispatch({
      type: SET_PARTY_COMMENTS,
      payload: [...party.comments, props.newComment],
    });
  }, [props.newComment]);
  useEffect(() => {
    partyUpdateComments(party.partyId, party.comments);
  }, [party.comments]);

  return (
    <form>
      <p>Comments</p>
      <div className="pickerContainer">
        <input
          name="comments"
          className="inputStyle"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <img
          className="emojiIcon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
          <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
      </div>
      <button onClick={(e) => captureComment(e)}>Submit</button>
    </form>
  );
}
