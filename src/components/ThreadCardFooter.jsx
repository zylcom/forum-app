import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  asyncToggleVoteDownThread,
  asyncToggleVoteUpThread,
} from "../states/threads/action";
import { asyncNeutralizeThreadVote } from "../states/shared/action";
import CommentButton from "./CommentButton";
import VoteDownButton from "./VoteDownButton";
import VoteUpButton from "./VoteUpButton";

function ThreadCardFooter({ threadId, upVotesBy, downVotesBy, totalComments }) {
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const isThreadVotedUp = upVotesBy.includes(authUser?.id);
  const isThreadVotedDown = downVotesBy.includes(authUser?.id);

  function onVoteUpThread() {
    if (authUser === null) {
      return alert("You must sign in to vote a thread!");
    }

    dispatch(asyncToggleVoteUpThread(threadId));

    if (isThreadVotedUp) {
      dispatch(asyncNeutralizeThreadVote(threadId));
    }
  }

  function onVoteDownThread() {
    if (authUser === null) {
      return alert("You must sign in to vote a thread!");
    }

    dispatch(asyncToggleVoteDownThread(threadId));

    if (isThreadVotedDown) {
      dispatch(asyncNeutralizeThreadVote(threadId));
    }
  }

  return (
    <>
      <VoteUpButton
        voteUp={onVoteUpThread}
        totalVotesUp={upVotesBy.length}
        isVoted={isThreadVotedUp}
      />

      <VoteDownButton
        voteDown={onVoteDownThread}
        totalVotesDown={downVotesBy.length}
        isVoted={isThreadVotedDown}
      />

      <CommentButton threadId={threadId} totalComments={totalComments} />
    </>
  );
}

ThreadCardFooter.propTypes = {
  threadId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default ThreadCardFooter;
