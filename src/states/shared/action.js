import {
  getAllThreads,
  getAllUsers,
  neutralizeVoteComment,
  neutralizeVoteThread,
} from "../../utils";
import {
  neutralizeVoteThreadActionCreator,
  receiveThreadsActionCreator,
} from "../threads/action";
import { neutralizeVoteThreadDetailActionCreator } from "../threadDetail/action";
import { receiveUsersActionCreator } from "../users/action";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await getAllUsers();
      const threads = await getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeThreadVote(threadId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(
      neutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }),
    );

    if (threadDetail !== null) {
      dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
    }

    try {
      await neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeCommentVote({ threadId, commentId }) {
  return async () => {
    try {
      await neutralizeVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  asyncPopulateUsersAndThreads,
  asyncNeutralizeThreadVote,
  asyncNeutralizeCommentVote,
};
