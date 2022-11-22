import { createThread, downVoteThread, upVoteThread } from "../../utils";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  VOTE_UP_THREAD: "VOTE_UP_THREAD",
  VOTE_DOWN_THREAD: "VOTE_DOWN_THREAD",
  NEUTRALIZE_THREAD_VOTE: "NEUTRALIZE_THREAD_VOTE",
};

function receiveThreadsActionCreator(threads) {
  return { type: ActionType.RECEIVE_THREADS, payload: { threads } };
}

function addThreadActionCreator(thread) {
  return { type: ActionType.ADD_THREAD, payload: { thread } };
}

function voteUpThreadActionCreator({ userId, threadId }) {
  return { type: ActionType.VOTE_UP_THREAD, payload: { userId, threadId } };
}

function voteDownThreadActionCreator({ userId, threadId }) {
  return { type: ActionType.VOTE_DOWN_THREAD, payload: { userId, threadId } };
}

function neutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_VOTE,
    payload: { threadId, userId },
  };
}

function asyncAddThread({ title, body, category = "general" }) {
  return async (dispatch) => {
    try {
      const thread = await createThread({ title, body, category });

      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncVoteUpThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteUpThreadActionCreator({ userId: authUser.id, threadId }));

    try {
      await upVoteThread(threadId);
    } catch (error) {
      alert(error.message);

      dispatch(voteUpThreadActionCreator({ userId: authUser.id, threadId }));
    }
  };
}

function asyncVoteDownThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteDownThreadActionCreator({ userId: authUser.id, threadId }));

    try {
      await downVoteThread(threadId);
    } catch (error) {
      alert(error.message);

      dispatch(voteDownThreadActionCreator({ userId: authUser.id, threadId }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  voteUpThreadActionCreator,
  voteDownThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  asyncAddThread,
  asyncVoteUpThread,
  asyncVoteDownThread,
};
