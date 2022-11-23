import Swal from "sweetalert2";
import {
  createComment,
  downVoteComment,
  downVoteThread,
  getThreadDetail,
  neutralizeVoteComment,
  upVoteComment,
  upVoteThread,
} from "../../utils";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  VOTE_UP_THREAD_DETAIL: "VOTE_UP_THREAD_DETAIL",
  VOTE_DOWN_THREAD_DETAIL: "VOTE_DOWN_THREAD_DETAIL",
  NEUTRALIZE_THREAD_DETAIL_VOTE: "NEUTRALIZE_THREAD_DETAIL_VOTE",
  ADD_COMMENT: "ADD_COMMENT",
  VOTE_UP_COMMENT: "VOTE_UP_COMMENT",
  VOTE_DOWN_COMMENT: "VOTE_DOWN_COMMENT",
  NEUTRALIZE_COMMENT_VOTE: "NEUTRALIZE_COMMENT_VOTE",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return { type: ActionType.RECEIVE_THREAD_DETAIL, payload: { threadDetail } };
}

function clearThreadDetailActionCreator() {
  return { type: ActionType.CLEAR_THREAD_DETAIL };
}

function voteUpThreadDetailActionCreator(userId) {
  return { type: ActionType.VOTE_UP_THREAD_DETAIL, payload: { userId } };
}

function voteDownThreadDetailActionCreator(userId) {
  return {
    type: ActionType.VOTE_DOWN_THREAD_DETAIL,
    payload: { userId },
  };
}

function neutralizeVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE,
    payload: { userId },
  };
}

function addCommentActionCreator(comment) {
  return { type: ActionType.ADD_COMMENT, payload: { comment } };
}

function voteUpCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.VOTE_UP_COMMENT,
    payload: { commentId, userId },
  };
}

function voteDownCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.VOTE_DOWN_COMMENT,
    payload: { commentId, userId },
  };
}

function neutralizeVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT_VOTE,
    payload: { commentId, userId },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await getThreadDetail(threadId);

      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        allowEscapeKey: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        confirmButtonText: "<a href='/'>Back to home</a>",
      });
    }
  };
}

function asyncVoteUpThreadDetail(isThreadVotedDown) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(voteUpThreadDetailActionCreator(authUser.id));

    try {
      await upVoteThread(threadDetail.id);
    } catch (error) {
      if (isThreadVotedDown) {
        dispatch(voteDownThreadDetailActionCreator(authUser.id));
      } else {
        dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
      }

      if (error.message === "Token maximum age exceeded") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<b>${error.message}</b> <br /> Please re-login`,
          confirmButtonText: "<a href='/login'>Sign In</a>",
          showCancelButton: true,
        });

        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

function asyncVoteDownThreadDetail(isThreadVotedUp) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(voteDownThreadDetailActionCreator(authUser.id));

    try {
      await downVoteThread(threadDetail.id);
    } catch (error) {
      if (isThreadVotedUp) {
        dispatch(voteUpThreadDetailActionCreator(authUser.id));
      } else {
        dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
      }

      if (error.message === "Token maximum age exceeded") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<b>${error.message}</b> <br /> Please re-login`,
          confirmButtonText: "<a href='/login'>Sign In</a>",
          showCancelButton: true,
        });
        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await createComment({ threadId, content });

      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

function asyncVoteUpComment({ threadId, commentId, isCommentVotedDown }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteUpCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await upVoteComment({ threadId, commentId });
    } catch (error) {
      if (isCommentVotedDown) {
        dispatch(
          voteDownCommentActionCreator({ commentId, userId: authUser.id }),
        );
      } else {
        dispatch(
          neutralizeVoteCommentActionCreator({
            commentId,
            userId: authUser.id,
          }),
        );
      }

      if (error.message === "Token maximum age exceeded") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<b>${error.message}</b> <br /> Please re-login`,
          confirmButtonText: "<a href='/login'>Sign In</a>",
          showCancelButton: true,
        });

        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

function asyncVoteDownComment({ threadId, commentId, isCommentVotedUp }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteDownCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await downVoteComment({ threadId, commentId });
    } catch (error) {
      if (isCommentVotedUp) {
        dispatch(
          voteUpCommentActionCreator({ commentId, userId: authUser.id }),
        );
      } else {
        dispatch(
          neutralizeVoteCommentActionCreator({
            commentId,
            userId: authUser.id,
          }),
        );
      }

      if (error.message === "Token maximum age exceeded") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<b>${error.message}</b> <br /> Please re-login`,
          confirmButtonText: "<a href='/login'>Sign In</a>",
          showCancelButton: true,
        });

        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

function asyncNeutralizeCommentVote({
  threadId,
  commentId,
  isCommentVotedUp = false,
}) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
    );

    try {
      await neutralizeVoteComment({ threadId, commentId });
    } catch (error) {
      if (isCommentVotedUp) {
        dispatch(
          voteUpCommentActionCreator({ commentId, userId: authUser.id }),
        );
      } else {
        dispatch(
          voteDownCommentActionCreator({ commentId, userId: authUser.id }),
        );
      }

      if (error.message === "Token maximum age exceeded") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<b>${error.message}</b> <br /> Please re-login`,
          confirmButtonText: "<a href='/login'>Sign In</a>",
          showCancelButton: true,
        });

        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  voteUpThreadDetailActionCreator,
  voteDownThreadDetailActionCreator,
  neutralizeVoteThreadDetailActionCreator,
  addCommentActionCreator,
  voteUpCommentActionCreator,
  voteDownCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncVoteUpThreadDetail,
  asyncVoteDownThreadDetail,
  asyncAddComment,
  asyncVoteUpComment,
  asyncVoteDownComment,
  asyncNeutralizeCommentVote,
};
