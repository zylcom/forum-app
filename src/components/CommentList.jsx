import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";
import { commentItemPropTypes } from "./CommentItem";

function CommentList({ comments, threadId }) {
  const { authUser } = useSelector((states) => states);

  return (
    <>
      <h2 className="text-3xl font-bold px-3">Comments</h2>

      {authUser === null ? (
        <p className="text-sm my-4 px-3">
          You must login to add comment.{" "}
          <Link to="/login" className="text-olympic-blue">
            Sign In
          </Link>
        </p>
      ) : (
        <CommentInput threadId={threadId} />
      )}

      <div className="flex flex-col p-3 gap-y-5 border-t border-t-infinity">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} {...comment} authUser={authUser} />
          ))
        ) : (
          <div>
            <span>There no comments</span>
          </div>
        )}
      </div>
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemPropTypes)).isRequired,
  threadId: PropTypes.string.isRequired,
};

export default CommentList;
