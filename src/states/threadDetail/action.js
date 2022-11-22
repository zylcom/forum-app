import {
  createComment,
  downVoteComment,
  downVoteThread,
  getThreadDetail,
  upVoteComment,
  upVoteThread,
} from "../../utils";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  TOGGLE_VOTE_UP_THREAD_DETAIL: "TOGGLE_VOTE_UP_THREAD_DETAIL",
  TOGGLE_VOTE_DOWN_THREAD_DETAIL: "TOGGLE_VOTE_DOWN_THREAD_DETAIL",
  ADD_COMMENT: "ADD_COMMENT",
  TOGGLE_VOTE_UP_COMMENT: "TOGGLE_VOTE_UP_COMMENT",
  TOGGLE_VOTE_DOWN_COMMENT: "TOGGLE_VOTE_DOWN_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return { type: ActionType.RECEIVE_THREAD_DETAIL, payload: { threadDetail } };
}

function clearThreadDetailActionCreator() {
  return { type: ActionType.CLEAR_THREAD_DETAIL };
}

function toggleVoteUpThreadDetail(userId) {
  return { type: ActionType.TOGGLE_VOTE_UP_THREAD_DETAIL, payload: { userId } };
}

function toggleVoteDownThreadDetail(userId) {
  return {
    type: ActionType.TOGGLE_VOTE_DOWN_THREAD_DETAIL,
    payload: { userId },
  };
}

function addCommentActionCreator(comment) {
  return { type: ActionType.ADD_COMMENT, payload: { comment } };
}

function toggleVoteUpCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_VOTE_UP_COMMENT,
    payload: { commentId, userId },
  };
}

function toggleVoteDownCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_VOTE_DOWN_COMMENT,
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

function asyncToggleVoteUpThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(toggleVoteUpThreadDetail(authUser.id));

    try {
      await upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleVoteDownThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(toggleVoteDownThreadDetail(authUser.id));

    try {
      await downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
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

function asyncToggleVoteUpComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      toggleVoteUpCommentActionCreator({ commentId, userId: authUser.id }),
    );

    try {
      await upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleVoteDownComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      toggleVoteDownCommentActionCreator({ commentId, userId: authUser.id }),
    );

    try {
      await downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleVoteUpThreadDetail,
  toggleVoteDownThreadDetail,
  asyncReceiveThreadDetail,
  asyncToggleVoteUpThreadDetail,
  asyncToggleVoteDownThreadDetail,
  asyncAddComment,
  asyncToggleVoteUpComment,
  asyncToggleVoteDownComment,
};
