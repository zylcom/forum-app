import React from "react";
import CommentButton from "./CommentButton";
import VoteDownButton from "./VoteDownButton";
import VoteUpButton from "./VoteUpButton";

function ThreadCardFooter() {
  return (
    <>
      <VoteUpButton />

      <VoteDownButton />

      <CommentButton />
    </>
  );
}

export default ThreadCardFooter;
