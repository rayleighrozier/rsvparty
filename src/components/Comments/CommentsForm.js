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
    let date = new Date();
    props.setNewComment({
      guestId: guest.guestId,
      firstName: guest.firstName,
      lastName: guest.lastName,
      comment: comment,
      timestamp: date,
    });
  };

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  useEffect(() => {
    if (party.comments.length > 0) {
      let updatedComments = [...party.comments, props.newComment];
      dispatch({
        type: SET_PARTY_COMMENTS,
        payload: updatedComments,
      });
    } else {
      dispatch({
        type: SET_PARTY_COMMENTS,
        payload: [props.newComment],
      });
    }
  }, [props.newComment]);

  useEffect(() => {
    if (props.newComment !== "[]") {
      partyUpdateComments(party.partyId, party.comments);
    }
  }, [party.comments]);

  return (
    <form>
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