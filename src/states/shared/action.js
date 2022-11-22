import {
  getAllThreads,
  getAllUsers,
  neutralizeVoteComment,
  neutralizeVoteThread,
} from "../../utils";
import { receiveThreadsActionCreator } from "../threads/action";
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
  return async () => {
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
