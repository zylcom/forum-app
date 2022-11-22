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
      alert(error.message);
    }
  };
}

function asyncVoteUpThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(voteUpThreadDetailActionCreator(authUser.id));

    try {
      await upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);

      dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
    }
  };
}

function asyncVoteDownThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(voteDownThreadDetailActionCreator(authUser.id));

    try {
      await downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);

      dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
    }
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await createComment({ threadId, content });

      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncVoteUpComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteUpCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);

      dispatch(
        neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
      );
    }
  };
}

function asyncVoteDownComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteDownCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);

      dispatch(
        neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
      );
    }
  };
}

function asyncNeutralizeCommentVote({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
    );

    try {
      await neutralizeVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
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
