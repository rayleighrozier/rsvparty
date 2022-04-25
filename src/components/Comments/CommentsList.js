import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CommentsList() {
  const comments = useSelector((state) => state.party.comments);
  useEffect(() => {}, []);

  //   change comments to json to get them to display
  const [commentsJSON, setCommentsJSON] = useState([]);
  return (
    <div>
      {comments
        ? comments.map((comment) => {
            return <p>{comment.firstName}</p>;
          })
        : null}
    </div>
  );
}
