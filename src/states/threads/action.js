import Swal from "sweetalert2";
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

function asyncVoteUpThread({ threadId, isVotedDown }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteUpThreadActionCreator({ userId: authUser.id, threadId }));

    try {
      await upVoteThread(threadId);
    } catch (error) {
      if (isVotedDown) {
        dispatch(
          voteDownThreadActionCreator({ userId: authUser.id, threadId }),
        );
      } else {
        dispatch(
          neutralizeVoteThreadActionCreator({ userId: authUser.id, threadId }),
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

function asyncVoteDownThread({ threadId, isVotedUp }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(voteDownThreadActionCreator({ userId: authUser.id, threadId }));

    try {
      await downVoteThread(threadId);
    } catch (error) {
      if (isVotedUp) {
        dispatch(voteUpThreadActionCreator({ userId: authUser.id, threadId }));
      } else {
        dispatch(
          neutralizeVoteThreadActionCreator({ userId: authUser.id, threadId }),
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
  receiveThreadsActionCreator,
  addThreadActionCreator,
  voteUpThreadActionCreator,
  voteDownThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  asyncAddThread,
  asyncVoteUpThread,
  asyncVoteDownThread,
};
