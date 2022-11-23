import Swal from "sweetalert2";
import { getLeaderboards } from "../../utils";

const ActionType = {
  RECEIVE_LEADERBOARDS: "RECEIVE_LEADERBOARDS",
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return { type: ActionType.RECEIVE_LEADERBOARDS, payload: { leaderboards } };
}

function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    try {
      const leaderboards = await getLeaderboards();

      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
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
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
};
