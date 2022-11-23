import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import VoteDownButton from "./VoteDownButton";
import VoteUpButton from "./VoteUpButton";
import { postedAt } from "../utils";

function ThreadDetail({
  thread,
  onVoteUpThreadDetail,
  isThreadVotedUp,
  onVoteDownThreadDetail,
  isThreadVotedDown,
}) {
  return (
    <div className="w-full overflow-auto bg-navy-blazer py-16 md:py-0 md:my-14 px-3">
      <div className=" flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Avatar url={thread.owner.avatar} />

          <div className="text-sm text-center font-light break-all">
            {thread.owner.name}

            <span className="text-[length:10px] font-light">
              {" "}
              &bull; {postedAt(thread.createdAt)}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <VoteUpButton
            voteUp={onVoteUpThreadDetail}
            totalVotesUp={thread.upVotesBy.length}
            isVoted={isThreadVotedUp}
          />
          <VoteDownButton
            voteDown={onVoteDownThreadDetail}
            totalVotesDown={thread.downVotesBy.length}
            isVoted={isThreadVotedDown}
          />
        </div>
      </div>

      <span className="bg-deepest-water/50 rounded p-1 text-xs">
        #{thread.category}
      </span>

      <h1 className="text-3xl font-bold my-7">{thread.title}</h1>

      <div className="font-montserrat font-medium">{parse(thread.body)}</div>
    </div>
  );
}

ThreadDetail.propTypes = {
  thread: PropTypes.object.isRequired,
  onVoteUpThreadDetail: PropTypes.func.isRequired,
  isThreadVotedUp: PropTypes.bool.isRequired,
  onVoteDownThreadDetail: PropTypes.func.isRequired,
  isThreadVotedDown: PropTypes.bool.isRequired,
};

export default ThreadDetail;
