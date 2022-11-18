import React from "react";
import VoteUpIcon from "./VoteUpIcon";

function VoteUpButton() {
  return (
    <button className="grow flex justify-center gap-x-2 items-center border p-1 rounded-l">
      <VoteUpIcon />

      <span className="text-sm">11231</span>
    </button>
  );
}

export default VoteUpButton;
