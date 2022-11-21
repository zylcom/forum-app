import React from "react";
import PropTypes from "prop-types";
import VoteDownIcon from "./icons/VoteDownIcon";

function VoteDownButton({ voteDown, totalVotesDown, isVoted }) {
  return (
    <button
      className="grow flex justify-center gap-x-2 items-center"
      onClick={voteDown}
    >
      <VoteDownIcon fillColor={isVoted ? "#c70039" : "none"} />

      <span className="text-sm">{totalVotesDown}</span>
    </button>
  );
}

VoteDownButton.propTypes = {
  voteDown: PropTypes.func.isRequired,
  totalVotesDown: PropTypes.number.isRequired,
  isVoted: PropTypes.bool.isRequired,
};

export default VoteDownButton;
