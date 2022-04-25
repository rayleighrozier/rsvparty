import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatCommentDate } from "../../actions/format";

export default function CommentsList() {
  const comments = useSelector((state) => state.party.comments);

  useEffect(() => {
    formatCommentDate("2022-04-25T19:33:30.402Z");
  }, []);

  //   change comments to json to get them to display

  return (
    <div>
      {comments
        ? comments.map((comment) => {
            return (
              <div>
                <p>{comment.firstName}</p>
                <p>{comment.lastName}</p>
                <p>{comment.comment}</p>
                {comment.timestamp ? <p>{comment.timestamp}</p> : null}
              </div>
            );
          })
        : null}
    </div>
  );
}
