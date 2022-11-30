import React from "react";
import PropTypes from "prop-types";
import VoteUpIcon from "./icons/VoteUpIcon";

function VoteUpButton({ voteUp, totalVotesUp, isVoted }) {
  return (
    <button
      className="grow flex justify-center gap-x-2 items-center"
      onClick={voteUp}
    >
      <VoteUpIcon fillColor={isVoted ? "#1d90f4" : "none"} />

      <span className="text-sm">{totalVotesUp}</span>
    </button>
  );
}

VoteUpButton.propTypes = {
  voteUp: PropTypes.func.isRequired,
  totalVotesUp: PropTypes.number.isRequired,
  isVoted: PropTypes.bool.isRequired,
};

export default VoteUpButton;
