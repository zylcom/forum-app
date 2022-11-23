import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CommentIcon from "./icons/CommentIcon";

function CommentButton({ threadId, totalComments }) {
  return (
    <Link
      to={`/threads/${threadId}`}
      className="grow flex justify-center gap-x-2 items-center"
    >
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
