import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

export default function Comments() {
  const party = useSelector((state) => state.party);
  const [newComment, setNewComment] = useState(null);
  return (
    <div>
      <p className="party-comments-header">Comments</p>
      <div className="party-comments-list">
        {party?.comments?.length > 0 ? <CommentsList /> : null}
        <CommentsForm newComment={newComment} setNewComment={setNewComment} />
      </div>
    </div>
  );
}
