import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
import { partyUpdateComments } from "../../actions/supabase";
import { formatCommentDate } from "../../actions/format";
import { SET_PARTY_COMMENTS } from "../../action-types";
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
    date = date.toString();
    date = formatCommentDate(date);
    props.setNewComment({
      guestId: guest.guestId,
      firstName: guest.firstName,
      lastName: guest.lastName,
      comment: comment,
      timestamp: date,
    });
    e.target.form[0].value = "";
  };
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  useEffect(() => {
    if (props.newComment !== null) {
      let updatedComments = [...party.comments, props.newComment];
      dispatch({
        type: SET_PARTY_COMMENTS,
        payload: updatedComments,
      });
    }
  }, [props.newComment]);

  useEffect(() => {
    if (props.newComment !== "[]") {
      partyUpdateComments(party.partyId, party.comments);
    }
  }, [party.comments]);

  return (
    <form className="party-comment-form">
      <p>Leave a comment</p>
      <textarea
        name="comments"
        placeholder="Leave a comment here"
        className="party-comment-text"
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
      />
      <div className="party-comment-buttons">
        <button
          onClick={(e) => {
            captureComment(e);
            setInputStr(() => "");
          }}
        >
          Post
        </button>
        <img
          className="party-comment-buttons-emoji"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
          <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
      </div>
    </form>
  );
}
