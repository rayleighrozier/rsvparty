import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { partyAddRow } from "../../actions/supabase";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

export default function Comments() {
  const guest = useSelector((state) => state.guest);
  const party = useSelector((state) => state.party);
  const [newComment, setNewComment] = useState(null);
  return (
    <div>
      <p>Comments</p>
      {party?.comments?.length > 0 ? <CommentsList /> : null}
      <CommentsForm newComment={newComment} setNewComment={setNewComment} />
    </div>
  );
}
