import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";

export default function Comments() {
  const guest = useSelector((state) => state.guest);
  const [newComment, setNewComment] = useState([]);
  return (
    <div>
      <CommentForm newComment={newComment} setNewComment={setNewComment} />
    </div>
  );
}
