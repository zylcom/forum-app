import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import PageNotFound from "./PageNotFound";
import ThreadDetail from "../components/ThreadDetail";
import { asyncNeutralizeThreadVote } from "../states/shared/action";
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
      return Swal.fire({
        icon: "info",
        title: "You must sign in to vote a thread.",
        confirmButtonText: "<a href='/login'>Sign In</a>",
        showCancelButton: true,
      });
    }

    if (isThreadVotedUp) {
      return dispatch(asyncNeutralizeThreadVote({ threadId: id, isThreadVotedUp }));
    }

    dispatch(asyncVoteUpThreadDetail(isThreadVotedDown));
  }

  function onVoteDownThreadDetail() {
    if (authUser === null) {
      return Swal.fire({
        icon: "info",
        title: "You must sign in to vote a thread.",
        confirmButtonText: "<a href='/login'>Sign In</a>",
        showCancelButton: true,
      });
    }

    if (isThreadVotedDown) {
      return dispatch(asyncNeutralizeThreadVote({ threadId: id }));
    }

    dispatch(asyncVoteDownThreadDetail(isThreadVotedUp));
  }

  if (threadDetail === null) {
    return <PageNotFound />;
  }

  return (
    <div
      className="text-white flex pt-16 md:pt-0 md:max-h-screen md:min-h-screen flex-col gap-y-5 bg-navy-blazer
      md:flex-row "
    >
      <ThreadDetail
        thread={threadDetail}
        onVoteUpThreadDetail={onVoteUpThreadDetail}
        isThreadVotedUp={isThreadVotedUp}
        onVoteDownThreadDetail={onVoteDownThreadDetail}
        isThreadVotedDown={isThreadVotedDown}
      />

      <aside
        className="md:border-l pb-16 md:pb-0 md:my-14 overflow-auto md:min-w-[300px] md:max-w-[350px] lg:max-w-[500px]
        xl:max-w-[600px] ml-5 border-l"
      >
        <CommentList comments={threadDetail.comments} threadId={id} />
      </aside>
    </div>
  );
}

export default DetailPage;
