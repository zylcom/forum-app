import { downVoteThread, getThreadDetail, upVoteThread } from "../../utils";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  TOGGLE_VOTE_UP_THREAD_DETAIL: "TOGGLE_VOTE_UP_THREAD_DETAIL",
  TOGGLE_VOTE_DOWN_THREAD_DETAIL: "TOGGLE_VOTE_DOWN_THREAD_DETAIL",
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

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleVoteUpThreadDetail,
  toggleVoteDownThreadDetail,
  asyncReceiveThreadDetail,
  asyncToggleVoteUpThreadDetail,
  asyncToggleVoteDownThreadDetail,
};
