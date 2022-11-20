import React from "react";
import { Link } from "react-router-dom";
import CommentIcon from "./CommentIcon";

function CommentButton() {
  return (
    <Link to="/threads/id" className="grow flex justify-center gap-x-2 items-center">
      <CommentIcon />

      <span className="text-sm">211102</span>
    </Link>
  );
}

export default CommentButton;
