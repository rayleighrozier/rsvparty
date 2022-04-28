import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatCommentDate } from "../../actions/format";

export default function CommentsList() {
  const comments = useSelector((state) => state.party.comments);

  return (
    <div>
      {comments
        ? comments.map((comment) => {
            return (
              <div className="party-comment">
                <p>
                  {comment.firstName}
                  {"  "} {comment.lastName}
                </p>
                <p>{comment.comment}</p>
                {comment.timestamp ? (
                  <p className="text-grey">{comment.timestamp}</p>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
}
