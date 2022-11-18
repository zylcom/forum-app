import React from "react";
import CommentIcon from "./CommentIcon";

function CommentButton() {
  return (
    <button className="grow flex justify-center gap-x-2 items-center border rounded-r">
      <CommentIcon />

      <span className="text-sm">211102</span>
    </button>
  );
}

export default CommentButton;
