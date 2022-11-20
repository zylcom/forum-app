import React from "react";
import VoteUpIcon from "./VoteUpIcon";

function VoteUpButton() {
  return (
    <button className="grow flex justify-center gap-x-2 items-center p-1">
      <VoteUpIcon />

      <span className="text-sm">11231</span>
    </button>
  );
}

export default VoteUpButton;
