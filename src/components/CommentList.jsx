import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

function CommentList() {
  const { authUser } = useSelector((states) => states);

  return (
    <>
      <h2 className="text-3xl font-bold mt-10 px-3">Comments</h2>

      {authUser === null ? (
        <p className="text-sm my-4 px-3">
          You must login to add comment.{" "}
          <Link to="/login" className="text-olympic-blue">
            Sign In
          </Link>
        </p>
      ) : (
        <CommentInput />
      )}

      <div className="flex flex-col p-3 gap-y-5 border-t border-t-infinity">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </>
  );
}

export default CommentList;
