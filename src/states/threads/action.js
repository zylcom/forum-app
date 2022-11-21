import { createThread, downVoteThread, neutralizeVoteThread, upVoteThread } from "../../utils";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  TOGGLE_VOTE_UP: "TOGGLE_VOTE_UP",
  TOGGLE_VOTE_DOWN: "TOGGLE_VOTE_DOWN",
  NEUTRALIZE_THREAD_VOTE: "NEUTRALIZE_THREAD_VOTE",
};

function receiveThreadsActionCreator(threads) {
  return { type: ActionType.RECEIVE_THREADS, payload: { threads } };
}

function addThreadActionCreator(thread) {
  return { type: ActionType.ADD_THREAD, payload: { thread } };
}

function toggleVoteUpThreadActionCreator({ userId, threadId }) {
  return { type: ActionType.TOGGLE_VOTE_UP, payload: { userId, threadId } };
}

function toggleVoteDownThreadActionCreator({ userId, threadId }) {
  return { type: ActionType.TOGGLE_VOTE_DOWN, payload: { userId, threadId } };
}

// function neutralizeThreadVoteActionCreator({ userId, threadId }) {
//   return {
//     type: ActionType.NEUTRALIZE_THREAD_VOTE,
//     payload: { userId, threadId },
//   };
// }

function asyncAddThread({ title, body, category = null }) {
  return async (dispatch) => {
    try {
      const thread = createThread({ title, body, category });

      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleVoteUpThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      toggleVoteUpThreadActionCreator({ userId: authUser.id, threadId }),
    );

    try {
      await upVoteThread(threadId);
    } catch (error) {
      alert(error.message);

      dispatch(
        toggleVoteUpThreadActionCreator({ userId: authUser.id, threadId }),
      );
    }
  };
}

function asyncToggleVoteDownThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      toggleVoteDownThreadActionCreator({ userId: authUser.id, threadId }),
    );

    try {
      await downVoteThread(threadId);
    } catch (error) {
      alert(error.message);

      dispatch(
        toggleVoteDownThreadActionCreator({ userId: authUser.id, threadId }),
      );
    }
  };
}

function asyncNeutralizeThreadVote(threadId) {
  return async () => {
    // const { authUser } = getState();

    // dispatch(
    //   neutralizeThreadVoteActionCreator({ userId: authUser.id, threadId }),
    // );

    try {
      await neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleVoteUpThreadActionCreator,
  toggleVoteDownThreadActionCreator,
  // neutralizeThreadVoteActionCreator,
  asyncAddThread,
  asyncToggleVoteUpThread,
  asyncToggleVoteDownThread,
  asyncNeutralizeThreadVote,
};
