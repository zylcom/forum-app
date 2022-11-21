import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  asyncNeutralizeThreadVote,
  asyncToggleVoteDownThread,
  asyncToggleVoteUpThread,
} from "../states/threads/action";
import CommentButton from "./CommentButton";
import VoteDownButton from "./VoteDownButton";
import VoteUpButton from "./VoteUpButton";

function ThreadCardFooter({ threadId, upVotesBy, downVotesBy, totalComments }) {
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const isVotedUp = upVotesBy.includes(authUser?.id);
  const isVotedDown = downVotesBy.includes(authUser?.id);

  function onVoteUp() {
    if (authUser === null) {
      return alert("You must sign in to vote a thread!");
    }

    dispatch(asyncToggleVoteUpThread(threadId));

    if (isVotedUp) {
      dispatch(asyncNeutralizeThreadVote(threadId));
    }
  }

  function onVoteDown() {
    if (authUser === null) {
      return alert("You must sign in to vote a thread!");
    }

    dispatch(asyncToggleVoteDownThread(threadId));

    if (isVotedDown) {
      dispatch(asyncNeutralizeThreadVote(threadId));
    }
  }

  return (
    <>
      <VoteUpButton
        voteUp={onVoteUp}
        totalVotesUp={upVotesBy.length}
        isVoted={isVotedUp}
      />

      <VoteDownButton
        voteDown={onVoteDown}
        totalVotesDown={downVotesBy.length}
        isVoted={isVotedDown}
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
