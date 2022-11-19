import React from "react";
import Avatar from "./Avatar";

function TopUserItem() {
  return (
    <div className="bg-white/5 p-3 rounded-md flex items-center gap-x-1">
      <span className="text-3xl mr-2">1.</span>

      <Avatar />

      <p className="text-xl mx-2 truncate">
        Zylcomasdasdadabsdjh asjd ajshdbajhsd asjdashdahsd
      </p>

      <div
        className="bg-gradient-to-br from-light-shotoku-purple to-blue-genie
            rounded p-1 gap-y-1 px-3 flex flex-col items-center ml-auto"
      >
        <span className="text-sm">Score</span>
        <span className="text-xs">12312</span>
      </div>
    </div>
  );
}

export default TopUserItem;
