import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postedAt } from "../utils";
import Avatar from "./Avatar";
import VoteDownButton from "./VoteDownButton";
import VoteUpButton from "./VoteUpButton";
import {
  asyncNeutralizeCommentVote,
  asyncVoteDownComment,
  asyncVoteUpComment,
} from "../states/threadDetail/action";

function CommentItem({
  id,
  owner,
  content,
  createdAt,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const [commentContainerHeight, setCommentContainerHeight] = useState(0);
  const { id: threadId } = useParams();
  const isCommentVotedUp = upVotesBy.includes(authUser?.id);
  const isCommentVotedDown = downVotesBy.includes(authUser?.id);
  const dispatch = useDispatch();
  const commentContainer = useRef(null);

  async function onVoteUpComment() {
    if (authUser === null) {
      return Swal.fire({
        icon: "info",
        title: "You must sign in to vote a comment.",
        confirmButtonText: "<a href='/login'>Sign In</a>",
        showCancelButton: true,
      });
    }

    if (isCommentVotedUp) {
      return dispatch(
        asyncNeutralizeCommentVote({
          threadId,
          commentId: id,
          isCommentVotedUp,
        }),
      );
    }

    dispatch(
      asyncVoteUpComment({ threadId, commentId: id, isCommentVotedDown }),
    );
  }

  function onVoteDownComment() {
    if (authUser === null) {
      return Swal.fire({
        icon: "info",
        title: "You must sign in to vote a comment.",
        confirmButtonText: "<a href='/login'>Sign In</a>",
        showCancelButton: true,
      });
    }

    if (isCommentVotedDown) {
      return dispatch(asyncNeutralizeCommentVote({ threadId, commentId: id }));
    }

    dispatch(
      asyncVoteDownComment({ threadId, commentId: id, isCommentVotedUp }),
    );
  }

  function onResizeHandler() {
    setCommentContainerHeight(commentContainer.current.clientHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", onResizeHandler);

    return () => {
      window.removeEventListener("resize", onResizeHandler);
    };
  }, []);

  return (
    <div>
      <div className="flex gap-x-2 mb-2">
        <Avatar url={owner.avatar} />

        <div className="w-full overflow-hidden">
          <span className="text-sm break-all">
            {owner.name} &bull;{" "}
          </span>

          <span className="text-[length:10px] font-light">
            {postedAt(createdAt)}
          </span>
        </div>
      </div>

      <div
        className="font-montserrat overflow-hidden leading-5 max-h-[calc(3*16px*1.25)] relative before:content-['']
        before:absolute before:h-[calc(16px*1.25)] before:w-full before:bottom-0 before:pointer-events-none
        before:bg-gradient-to-t [&:has(+_input:not(:checked))]:before:from-black-wash
        [&:has(+_input:checked)]:max-h-[none]"
        ref={commentContainer}
      >
        {parse(content)}
      </div>

      {commentContainerHeight >= 60 && (
        <input
          type="checkbox"
          className="expand-btn mt-2 rounded appearance-none border px-2 cursor-pointer hover:bg-navy-blazer
        before:content-['Expand'] checked:before:content-['Collapse']"
        />
      )}

      <div className="flex rounded my-2">
        <VoteUpButton
          voteUp={onVoteUpComment}
          totalVotesUp={upVotesBy.length}
          isVoted={isCommentVotedUp}
        />
        <VoteDownButton
          voteDown={onVoteDownComment}
          totalVotesDown={downVotesBy.length}
          isVoted={isCommentVotedDown}
        />
      </div>

      <hr />
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.object,
};

export default CommentItem;
