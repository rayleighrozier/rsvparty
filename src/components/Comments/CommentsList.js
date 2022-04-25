import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CommentsList() {
  const comments = useSelector((state) => state.party.comments);
  const commentsToJSON = (commentData) => {
    let JSON = [];
    for (const comment of commentData) {
      console.log("comment", comment);
      if (comment !== "[]") {
        comment = JSON.parse(comment);
        JSON.push(comment);
      }
    }
    console.log("JSON", JSON);
  };
  useEffect(() => {
    if (comments) {
      commentsToJSON(comments);
    }
  }, []);

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
