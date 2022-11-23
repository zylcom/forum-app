import { ActionType } from "./action";

function isPreLoadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;

    default:
      return isPreload;
  }
}

export default isPreLoadReducer;
