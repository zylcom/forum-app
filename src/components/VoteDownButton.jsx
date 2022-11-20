import React from "react";
import VoteDownIcon from "./VoteDownIcon";

function VoteDownButton() {
  return (
    <button className="grow flex justify-center gap-x-2 items-center">
      <VoteDownIcon />

      <span className="text-sm">341231</span>
    </button>
  );
}

export default VoteDownButton;
