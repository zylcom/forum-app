import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CommentIcon from "./icons/CommentIcon";

function CommentButton({ threadId, totalComments }) {
  return (
    <Link to={`/threads/${threadId}`} className="flex justify-center gap-x-1 items-center" title="Comments">
      <CommentIcon />

      <span className="text-sm">{totalComments}</span>
    </Link>
  );
}

CommentButton.propTypes = {
  threadId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default CommentButton;
