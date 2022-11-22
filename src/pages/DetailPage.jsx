import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import CommentList from "../components/CommentList";
import VoteDownButton from "../components/VoteDownButton";
import VoteUpButton from "../components/VoteUpButton";
import { asyncNeutralizeThreadVote } from "../states/shared/action";
import { postedAt } from "../utils";
import {
  asyncReceiveThreadDetail,
  asyncVoteDownThreadDetail,
  asyncVoteUpThreadDetail,
} from "../states/threadDetail/action";

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const isThreadVotedUp = threadDetail?.upVotesBy.includes(authUser?.id);
  const isThreadVotedDown = threadDetail?.downVotesBy.includes(authUser?.id);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  function onVoteUpThreadDetail() {
    if (authUser === null) {
      return alert("You must sign in to vote a thread!");
    }

    if (isThreadVotedUp) {
      return dispatch(asyncNeutralizeThreadVote(id));
    }

    dispatch(asyncVoteUpThreadDetail());
  }

  function onVoteDownThreadDetail() {
    if (authUser === null) {
      return alert("You must sign in to vote a thread!");
    }

    if (isThreadVotedDown) {
      return dispatch(asyncNeutralizeThreadVote(id));
    }

    dispatch(asyncVoteDownThreadDetail());
  }

  if (threadDetail === null) {
    return <div>Not Found</div>;
  }

  return (
    <div
      className="text-white flex md:max-h-screen md:min-h-screen flex-col gap-y-10
      md:flex-row "
    >
      <div className="w-full overflow-auto bg-navy-blazer py-16 md:py-0 md:my-14 px-3">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <Avatar url={threadDetail.owner.avatar} />

            <div className="text-sm text-center font-light break-all">
              {threadDetail.owner.name}

              <span className="text-[length:10px] font-light">
                {" "}
                &bull; {postedAt(threadDetail.createdAt)}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <VoteUpButton
              voteUp={onVoteUpThreadDetail}
              totalVotesUp={threadDetail.upVotesBy.length}
              isVoted={isThreadVotedUp}
            />
            <VoteDownButton
              voteDown={onVoteDownThreadDetail}
              totalVotesDown={threadDetail.downVotesBy.length}
              isVoted={isThreadVotedDown}
            />
          </div>
        </div>

        <span className="bg-deepest-water/50 rounded p-1 text-xs">
          #{threadDetail.category}
        </span>

        <h1 className="text-3xl font-bold my-7">{threadDetail.title}</h1>

        <p className="font-montserrat font-medium">{threadDetail.body}</p>
      </div>

      <aside
        className="md:border-l pb-16 md:pb-0 md:my-14 overflow-auto md:min-w-[300px] md:max-w-[350px] lg:max-w-[500px]
        xl:max-w-[600px]"
      >
        <CommentList comments={threadDetail.comments} threadId={id} />
      </aside>
    </div>
  );
}

export default DetailPage;
