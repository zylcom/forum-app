import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { asyncAddComment } from "../states/threadDetail/action";

function CommentInput({ threadId }) {
  const [comment, onCommentChange, setComment] = useInput("");
  const dispatch = useDispatch();

  function addComment(e) {
    e.preventDefault();

    dispatch(asyncAddComment({ threadId, content: comment }));

    setComment("");
  }

  return (
    <form className="p-5 flex border-b">
      <label htmlFor="comment" className="block relative mb-3 w-full">
        <span className="text-base block mb-2">Add a comment</span>

        <textarea
          name="comment"
          id="comment"
          className="rounded-lg h-18 resize-none w-full p-3 pl-1 focus:ring-0 focus:border focus:border-scuff-blue
          focus:outline-none font-medium bg-rurikon-blue text-white-edgar"
          placeholder="Text your comment ..."
          autoComplete="off"
          value={comment}
          onChange={onCommentChange}
          required
        />
      </label>

      <button
        type="submit"
        className="bg-clear-chill h-12 self-end m-5 px-3 rounded"
        onClick={addComment}
      >
        Add
      </button>
    </form>
  );
}

CommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default CommentInput;
