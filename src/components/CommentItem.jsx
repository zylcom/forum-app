import React from "react";
import PropTypes from "prop-types";
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
  const { id: threadId } = useParams();
  const isCommentVotedUp = upVotesBy.includes(authUser?.id);
  const isCommentVotedDown = downVotesBy.includes(authUser?.id);
  const dispatch = useDispatch();

  async function onVoteUpComment() {
    if (authUser === null) {
      return alert("You must sign in to vote a comment!");
    }

    if (isCommentVotedUp) {
      return dispatch(asyncNeutralizeCommentVote({ threadId, commentId: id }));
    }

    dispatch(asyncVoteUpComment({ threadId, commentId: id }));
  }

  function onVoteDownComment() {
    if (authUser === null) {
      return alert("You must sign in to vote a comment!");
    }

    if (isCommentVotedDown) {
      return dispatch(asyncNeutralizeCommentVote({ threadId, commentId: id }));
    }

    dispatch(asyncVoteDownComment({ threadId, commentId: id }));
  }

  return (
    <div>
      <div className="flex gap-x-2 mb-2">
        <Avatar url={owner.avatar} />

        <div className="w-full overflow-hidden">
          <p className="text-sm truncate">{owner.name}</p>

          <p className="text-[length:10px] font-light">{postedAt(createdAt)}</p>
        </div>
      </div>

      <p
        className="font-montserrat overflow-hidden leading-5 max-h-[calc(3*16px*1.25)] relative before:content-['']
        before:absolute before:h-[calc(16px*1.25)] before:w-full before:bottom-0 before:pointer-events-none
        before:bg-gradient-to-t [&:has(+_input:not(:checked))]:before:from-black-wash
        [&:has(+_input:checked)]:max-h-[none] min-h-[40px]"
      >
        {content}
      </p>

      <input
        type="checkbox"
        className="expand-btn mt-2 rounded appearance-none border px-2 cursor-pointer hover:bg-navy-blazer
        before:content-['Expand'] checked:before:content-['Collapse']"
      />

      <div className="flex rounded mt-2">
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
