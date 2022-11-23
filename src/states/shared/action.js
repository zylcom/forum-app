import Swal from "sweetalert2";
import { getAllThreads, getAllUsers, neutralizeVoteThread } from "../../utils";
import { receiveUsersActionCreator } from "../users/action";
import {
  neutralizeVoteThreadActionCreator,
  receiveThreadsActionCreator,
  voteDownThreadActionCreator,
  voteUpThreadActionCreator,
} from "../threads/action";
import {
  neutralizeVoteThreadDetailActionCreator,
  voteDownThreadDetailActionCreator,
  voteUpThreadDetailActionCreator,
} from "../threadDetail/action";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await getAllUsers();
      const threads = await getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
}

function asyncNeutralizeThreadVote({ threadId, isThreadVotedUp = false }) {
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
      if (isThreadVotedUp) {
        dispatch(voteUpThreadActionCreator({ threadId, userId: authUser.id }));
      } else {
        dispatch(
          voteDownThreadActionCreator({ threadId, userId: authUser.id }),
        );
      }

      if (threadDetail !== null && isThreadVotedUp) {
        dispatch(voteUpThreadDetailActionCreator(authUser.id));
      } else if (threadDetail !== null) {
        dispatch(voteDownThreadDetailActionCreator(authUser.id));
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

export { asyncPopulateUsersAndThreads, asyncNeutralizeThreadVote };
